const router = require('express').Router();
const itemController = require('./itemController.js');
router.use('/item', itemController);

// const ordersController = require('./ordersController.js');
// router.use('/orders', ordersController);

// const userController = require('./userController.js');
// router.use('/user', userController);

module.exports = router;