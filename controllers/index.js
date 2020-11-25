const router = require('express').Router();
const homeRoute = require('./home-route');
const apiRoutes = require('./api');
// const loginRoute = require('./login-route');
const aboutRoute = require('./about-route');
const successRoute = require('./success-route');
const cancelRoute = require('./cancel-route');

router.use('/api', apiRoutes);

router.use('/', homeRoute);
router.use('/success', successRoute);
router.use('/cancel', cancelRoute);
// router.use('/login', loginRoute);
router.use('/about', aboutRoute);



router.use((req, res) => {
    res.status(404).end();
  });
  

  

module.exports = router;
