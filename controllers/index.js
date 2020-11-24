const router = require('express').Router();
const homeRoute = require('./home-route');
const apiRoutes = require('./api');
// const loginRoute = require('./login-route');
//const contactRoute = require('./contact-route');
const successRoute = require('./success-route');
const cancelRoute = require('./cancel-route');

router.use('/api', apiRoutes);

router.use('/', homeRoute);
router.use('/success', successRoute);
router.use('/cancel', cancelRoute);
// router.use('/login', loginRoute);
//router.use('/contact', contactRoute);



router.use((req, res) => {
    res.status(404).end();
  });
  

  

module.exports = router;
