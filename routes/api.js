const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');

router.get('/users/:id', function(req, res, next) {
    // res.send(req.params.id)
    db.User.findByPk(req.params.id).then((data) => {
        res.json(data);
      }); 
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

router.post('/users', function (req, res)  {
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
module.exports = router;
