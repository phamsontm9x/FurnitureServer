var express = require('express');
var router = express.Router();
var	userHandlers = require('../controllers/userController.js');
var	inspirationHandlers = require('../controllers/inspirationController.js');
/* GET home page. */
router.get('/getAllData',userHandlers.loginRequired, inspirationHandlers.get)

module.exports = router;