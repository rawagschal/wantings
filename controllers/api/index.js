// const router = require('express').Router();
// const user = require('./user-route');
// const item = require('./item-route');
// const mailGun = require('./mailgun');

const router = require('express').Router();
const user = require('./user-route');
const item = require('./item-route');
const mailGun = require('./mailgun');
const checkoutSession = require('./checkout-session');


router.use('/email', mailGun);
router.use('/user', user);
router.use('/item', item);
router.use('create-checkout-session', checkoutSession);

module.exports = router;