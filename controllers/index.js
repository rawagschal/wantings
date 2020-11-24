//api routes
const router = require('express').Router();


//html routes item and html

const userRoutes = require('./userRoutes');
router.use('/user', userRoutes);

// const itemRoutes = require('./itemRoutes');
// router.use('/item', itemRoutes);

const apiRoutes =require('./api');
router.use(apiRoutes)
const htmlRoutes = require('./htmlRoutes');
router.use('/html', htmlRoutes);

router.use((req, res) => {
    res.status(404).end();
  });
module.exports = router;