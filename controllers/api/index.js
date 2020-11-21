const router = require('express').Router();
// const mailGun = require('./mailGun');
const user = require('./user-route');

// router.use('/email', mailGun);
router.use('/user', user);

module.exports = router;