const router = require('express').Router();
// const mailGun = require('./mailGun');
const user = require('./user-route');
const item = require('./item-route')

// router.use('/email', mailGun);
router.use('/user', user);
router.use('/item', item);

module.exports = router;