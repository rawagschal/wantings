const router = require('express').Router();
const homeRoute = require('./home-route');
const apiRoutes = require('./api');
// const loginRoute = require('./login-route');
//const contactRoute = require('./contact-route');

router.use('/api', apiRoutes);

router.use('/', homeRoute);
// router.use('/login', loginRoute);
//router.use('/contact', contactRoute);



router.use((req, res) => {
    res.status(404).end();
  });
  

  

module.exports = router;
