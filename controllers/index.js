//api routes
const router = require('express').Router();
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

//html routes item and user

const userRoutes = require('./userRoutes');
router.use('/user', userRoutes);

// const itemRoutes = require('./itemRoutes');
// router.use('/item', itemRoutes);


router.use((req, res) => {
    res.status(404).end();
  });
module.exports = router;