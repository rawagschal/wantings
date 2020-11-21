const router = require('express').Router();
const itemController = require('./itemController.js');
router.use('/item', itemController);
module.exports = router;