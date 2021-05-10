var express = require('express');
var services = require('./../services/userService');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',services.login);
module.exports = router;
