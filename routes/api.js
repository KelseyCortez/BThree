const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const secret = "mysecretshhh"


router.get('/users/:id', function (req, res, next) {
    // res.send(req.params.id)
    db.User.findByPk(req.params.id).then((data) => {
        res.json(data);
    });
})

router.get('/users', function (req, res, next) {
    // res.send(req.params.id)
    db.User.findAll().then((data) => {
        res.json(data);
    });
});

router.get('/users/:id', function (req, res, next) {
    db.User.findByPk(req.params.id)
        .then(data => {
            res.json(data)
        })
})

router.get('/users/:id/contacts', (req, res, next) => {
    db.User.findByPk(req.params.id, {
        include: [{
            model: db.EmergencyContact
        }]
    }).then((data) => {
        res.json(data.EmergencyContacts)
    })
})

router.post('/users/:id/contacts', (req, res, next) => {
    db.User.findByPk(req.params.id)
        .then(User => User.createEmergencyContact({
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            relationship: req.body.relationship,
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
                    const payload = { username }
                    const token = jwt.sign(payload, secret, {
                        expiresIn: '1h'
                    })
                    res.cookie('token', token, { httpOnly: true })
                        .status(200)

                    // req.session.user = User; 
                    
                    res.json(User)

                }
            })
        })
        .catch(() => {
            res.status(401)
                .json({ error: 'username not found' })
        })

}) 


router.post('/register', function (req, res) { 
    console.log(req.body)
    const { userName, email, password, firstName, lastName, dob } = req.body
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
        })
            .then(user => {
                res.status(201).json(user);
            })
    });
});

//deletes a user works and also deletes associated contacts
router.delete('/users/:id', (req, res) => {
    db.User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then((user) => {
            res.redirect('/');
        }).catch((err) => {
            res.json({ error: 'Could not delete user' });
        });
});

//deletes an emergency contact
router.delete('/contacts/:id', (req, res) => {
    db.EmergencyContact.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((contact) => {
        res.json(contact);
    }).catch((err)=>{
        res.json({error: 'Could not delete contact'});
    })
})

//updates emergency contacts
router.put('/contacts/:id', (req, res, next)=> {
    db.EmergencyContact.findByPk(parseInt(req.params.id))
    .then((contact) => {
        contact.name = req.body.name;
        contact.phoneNumber = req.body.phoneNumber;
        contact.relationship = req.body.relationship;
        contact.save().then((result)=>{
            res.json(result);
        })

    })
})




module.exports = router;
