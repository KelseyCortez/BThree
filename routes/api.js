const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const Op = db.Sequelize.Op
const secret = "mysecretshhh";
const checkAuth = require('../auth/checkAuthentication');

router.get('/user', checkAuth, function (req, res, next) {
    db.User.findByPk(req.session.user.id)
        .then(data => {
            res.json(data)
        })
})

router.get('/user/contacts', checkAuth, (req, res, next) => {
    db.User.findByPk(req.session.user.id, {

        include: [{
            model: db.EmergencyContact
        }]
    }).then((data) => {
        res.json(data.EmergencyContacts)
    })
})

router.post('/user/contacts', checkAuth, (req, res, next) => {
    console.log(req.body);

    const contactsArray = [];
    let keys = Object.keys(req.body)
    for (key of keys) {
        if (req.body[key].phoneNumber) {
            contactsArray.push(req.body[key])

        }
    }

    db.User.findByPk(req.session.user.id)
        .then(User => contactsArray.forEach(contact => {
            User.createEmergencyContact({
                name: contact.name,
                phoneNumber: contact.phoneNumber,
                relationship: contact.relationship,
                id: contact.id,
            })
        }))
        .then(data => res.json(data));
})

router.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(req)
    db.User.findOne({ where: { userName: username } })
        .then((User) => {
            console.log(User, username, password)
            bcrypt.compare(password, User.password, (err, match) => {
                console.log(err, match)
                if (err) {
                    res.status(500)
                        .json({ error: 'Incorrect Password' })
                } else if (!match) {
                    res.status(401)
                        .json({
                            error: 'Incorrect email or password'
                        })
                } else {
                    req.session.user = User;
                    res.json(User)
                }
            })
        })
        .catch(() => {
            res.status(401)
                .json({ error: 'Username not found' })
        })
})

router.post('/register', function (req, res) {
    console.log(req.body)
    const { userName, email, password, firstName, lastName, dob, phrase, text } = req.body
    if (!userName) { res.status(400).json({ error: 'user-name field is required' }); }
    if (!email) { res.status(400).json({ error: 'email field is required' }); }
    if (!password) { res.status(400).json({ error: 'password field is required' }); }
    bcrypt.hash(password, 10, (err, hash) => {
        db.User.create({
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            dob: dob,
            password: hash,
            email: email,
            phrase: phrase,
            text: text
        })
            .then(user => {
                req.session.user = user;
                res.status(201).json(user);
            })
    });
});

//deletes a user works and also deletes associated contacts
router.delete('/users', checkAuth, (req, res) => {
    db.User.destroy({
        where: {
            id: req.session.user.id
        }
    })
        .then((user) => {
            res.redirect('/');
        }).catch((err) => {
            res.json({ error: 'Could not delete user' });
        });
});

//deletes an emergency contact
router.delete('/user/contacts', (req, res) => {
    console.log(req.query);
    db.EmergencyContact.destroy({
        where: {
            id: req.query.id
        }
    })
        .then((contact) => {
            res.json(req.query.id);
        }).catch((err) => {
            res.json({ error: 'Could not delete contact' });
        })
})

//updates emergency contacts
router.put('/user/contacts', checkAuth, (req, res, next) => {
    const contacts = req.body;
    console.log('*');
    console.log(contacts);
    db.EmergencyContact.findAll({
        where: {
            userId: req.session.user.id
        }
    }).then(contactsArray => {
        contactsArray.forEach((contact, index) => {
            contact.update({
                name: contacts[`contact${index + 1}`].name,
                phoneNumber: contacts[`contact${index + 1}`].phoneNumber,
                relationship: contacts[`contact${index + 1}`].relationship,
            })
        })
    })
        .then(data => res.json(data))
})



router.put('/user', checkAuth, (req,res, next) => {
    db.User.findByPk(req.session.user.id)
    .then((user) => {
        user.lat = req.body.lat;
        user.lng = req.body.lng;
        user.save().then((result) => {
            res.json(result);
        })
    })
})

//     const contactsArray = [];
// let keys = Object.keys(req.body)
// for(key of keys){
//     if(req.body[key].phoneNumber) {
//         contactsArray.push(req.body[key])

//     }
// }

// db.User.findByPk(req.session.user.id)
//     .then(User => contactsArray.forEach(contact => {
//         User.createEmergencyContact({
//             name: contact.name,
//             phoneNumber: contact.phoneNumber,
//             relationship: contact.relationship,
//         })
//     }))
//     .then(data => res.json(data));

// db.EmergencyContact.findByPk(parseInt(req.params.id))
//     .then((contact) => {
//         contact.name = req.body.name;
//         contact.phoneNumber = req.body.phoneNumber;
//         contact.relationship = req.body.relationship;
//         contact.save().then((result) => {
//             res.json(result);
//         })

//     })



// logs user out
router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy()
    }
})

// get messages from forum 
router.get('/messages', (req, res) => {
    db.Message.findAll({
        where: {

            [Op.or]: [

                {
                    RecipientId: B,
                    SenderId: A
                }
            ]
        },
        order: [
            ['createdAt', 'DESC']
        ],
        include: {
            model: db.User,
            as: 'Sender'
        } 
    }).then((messages) => {
        if (messages) {
            const formattedMessages = messages.map(message => {
                return {
                    authorId: message.SenderId,
                    author: message.Sender.firstName,
                    message: message.content,
                    time: message.createdAt
                }
            })
            res.json(formattedMessages)
        } else {
            res.json([])
        }
    })
})

module.exports = router;














