var express = require('express');
var router = express.Router();
const db = require('../models');
const twilio = require('../module/twilio')


router.post('/alert', function (req, res, next) {
    // db.User.findByPk(req.params.id, {
    //     include: [{
    //         model: db.EmergencyContact
    //     }]
    // }).then((user) => {
    //     let emergencyNumbers = [];
    //     db.EmergencyContact.forEach(contact => {
    //         emergencyNumbers.push(contact.phoneNumber)
    //     })
        twilio.sendMultiSms(['4044021862'], 'This is using the button')
            .then(message => {
                res.json(message);
            })
    })
// });

module.exports = router;