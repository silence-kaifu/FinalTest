var express = require('express');
var services = require('./../services/userService');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
// router.get('/',services.login)
router.options('/',services.login);
router.post('/',services.login);
module.exports = router;
