var express = require('express');
var router = express.Router();
const db = require('../models');
const twilio = require('../module/twilio')


router.post('/alert', function (req, res, next) {
    db.User.findByPk(req.params.id, {
        include: [{
            model: db.EmergencyContact
        }]
    }).then((user) => {
        let emergencyNumbers = [];
        db.EmergencyContact.forEach(contact => {
            emergencyNumbers.push(contact.phoneNumber)
        })
        twilio.sendMultiSms(emergencyNumbers, 'This is from the app')
            .then(message => {
                res.json(message);
            })
    })
});

module.exports = router;