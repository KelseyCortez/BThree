var express = require('express');
var router = express.Router();
const db = require('../models');


router.get('/users/:id', function(req, res, next) {
    // res.send(req.params.id)
    db.User.findByPk(req.params.id).then((data) => {
        res.json(data);
      }); 
});

module.exports = router;
