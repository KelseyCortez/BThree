var express = require('express');
var router = express.Router();
const db = require('../models');


router.get('/users', function (req, res, next) {
    db.Users.findAll().then((data) => {
        res.json(data);
    });
});

module.exports = router;
