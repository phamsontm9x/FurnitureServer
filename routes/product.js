var express = require('express');
var router = express.Router();
var	userHandlers = require('../controllers/userController.js');
var	productHandlers = require('../controllers/productController.js');
/* GET home page. */
router.get('/:categoryId',userHandlers.loginRequired, productHandlers.get);
router.post('/:categoryId/create',userHandlers.loginRequired, productHandlers.create);
router.post('/:productId/update',userHandlers.loginRequired, productHandlers.update);
router.post('/:productId/delete',userHandlers.loginRequired, productHandlers.delete);

router.get('/:productId/detail',userHandlers.loginRequired, productHandlers.getDetail);


module.exports = router;
