const router = require('express').Router();
const apiRoutes = require('./api');
//const loginRoute = require('./login-route');
const homeRoute = require('./home-route');


router.use('/api', apiRoutes);

router.use('/', homeRoute);



router.use((req, res) => {
    res.status(404).end();
  });
  

module.exports = router;