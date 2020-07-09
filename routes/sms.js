var express = require('express');
var router = express.Router();
const db = require('../models');
const twilio = require('../module/twilio')


router.post('/alert', function (req, res, next) {
    twilio.sendMultiSms(['+14077098738', '+14702658975'], 'here goes nothing' )
    .then(message => {
        res.json(message);
    })
});

module.exports = router;