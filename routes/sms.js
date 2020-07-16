var express = require('express');
var router = express.Router();
const db = require('../models');
const twilio = require('../module/twilio')
const checkAuth = require('../auth/checkAuthentication');

router.post('/alert', checkAuth, function (req, res, next) {
    // const tempEmergencyNumbers = ['+14077098738', '+14236195332', '+16786343529']
    db.User.findByPk(req.session.user.id, { //change 6 to user number from session. This is hardcoded user 6
        include: [{
            model: db.EmergencyContact
        }]
    })    .then((user) => {
        let emergencyNumbers = [];
        user.EmergencyContacts.forEach(contact => {
            emergencyNumbers.push(`+1${contact.phoneNumber}`)
        })
        twilio.sendMultiSms(emergencyNumbers, user.text)
            .then(message => {
                res.json(message);
            })
    })
});

module.exports = router; 