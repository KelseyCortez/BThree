var express = require('express');
var router = express.Router();
const db = require('../models');
const twilio = require('../module/twilio')


router.post('/alert', function (req, res, next) {
    // const tempEmergencyNumbers = ['+14077098738', '+14236195332', '+16786343529']
    db.User.findByPk(6, {
        include: [{
            model: db.EmergencyContact
        }]
    })    .then((user) => {
        let emergencyNumbers = [];
        user.EmergencyContacts.forEach(contact => {
            emergencyNumbers.push(`+1${contact.phoneNumber}`)
        })
        twilio.sendMultiSms(emergencyNumbers, user.phrase)
            .then(message => {
                res.json(message);
            })
    })
});

module.exports = router;