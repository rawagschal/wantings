// const router = require('express').Router();
// const user = require('./user-route');
// const item = require('./item-route');
// const mailGun = require('./mailgun');

const router = require('express').Router();
const user = require('./user-route');
const item = require('./item-route');
const mailGun = require('./mailgun');


router.use('/email', mailGun);
router.use('/user', user);
router.use('/item', item);

module.exports = router;