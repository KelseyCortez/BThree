var express = require('express');
var router = express.Router();
const db = require('../models');


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

router.post('/users', function (req, res)  {
    const { userName, email, password, firstName, lastName, dob } = req.body
    if (!userName) { res.status(400).json({ error: 'user-name field is required' }); }
    if (!email) { res.status(400).json({ error: 'email field is required' }); }
    if (!password) { res.status(400).json({ error: 'password field is required' }); }

db.User.create({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        dob: dob,
        password: password,    
        email: email,
    })
    .then(user => {
        res.status(201).json(user);
    })
})
module.exports = router;
