var express = require('express');
var router = express.Router();
const db = require('../models');
const twilio = require('../module/twilio')
const checkAuth = require('../auth/checkAuthentication');

//sends a text to multiple people through twilio.js
router.post('/alert', checkAuth, function (req, res, next) {
    db.User.findByPk(req.session.user.id, {
        include: [{
            model: db.EmergencyContact
        }]
    }).then((user) => {
        let emergencyNumbers = [];
        let text = `${user.text}.\n- ${user.firstName} ${user.lastName}.\n Last known Latitude and Longitude:\n ${user.lat}  ${user.lng}`
        user.EmergencyContacts.forEach(contact => {
            emergencyNumbers.push(`+1${contact.phoneNumber}`)
        })
        twilio.sendMultiSms(emergencyNumbers, text)
            .then(message => {
                res.json(message);
            })
    })
});


//sends a message based on a timer through twilio.js
router.post('/alert/timer', checkAuth, function (req, res, next) {
    let automatedMessage = "My Be right back timer just ended without me cancelling, can you text me to check in?"
    console.log(req.session.user)
    db.User.findByPk(req.session.user.id, {
        include: [{
            model: db.EmergencyContact
        }]
    }).then((user) => {
        let emergencyNumbers = [];
        user.EmergencyContacts.forEach(contact => {
            emergencyNumbers.push(`+1${contact.phoneNumber}`)
        })
        twilio.sendMultiSms(emergencyNumbers, automatedMessage)
            .then(message => {
                res.json(message)
            })
    })

})

module.exports = router;  