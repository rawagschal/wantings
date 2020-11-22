const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
// const emailRoute = require('./email-route');
const loginRoute = require('./login-route');
const cartRoute = require('./cart-route');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/email', emailRoute);
router.use('/login', loginRoute);
router.use('/cart', cartRoute);



router.use((req, res) => {
    res.status(404).end();
  });
  

module.exports = router;
