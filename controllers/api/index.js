const router = require('express').Router();
const mailGun = require('./mailGun');

router.use('/email', mailGun);

module.exports = router;