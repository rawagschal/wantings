const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
// const emailRoute = require('./email-route');
const loginRoute = require('./login-route');
const contactRoute = require('./contact-route');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/email', emailRoute);
router.use('/login', loginRoute);
router.use('/contact', contactRoute);



router.use((req, res) => {
    res.status(404).end();
  });
  

module.exports = router;
