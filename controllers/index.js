//api routes
const router = require('express').Router();
const apiRoutes = require('./api');
router.use('/api', apiRoutes);
router.use((req, res) => {
    res.status(404).end();
  });
module.exports = router;

//html routes item and user
const router = require('express').Router();
const itemRoutes = require('./itemRoutes');
router.use('/controller', itemRoutes);
router.use((req, res) => {
    res.status(404).end();
  });
module.exports = router;

const router = require('express').Router();
const userRoutes = require('./userRoutes');
router.use('/api', userRoutes);
router.use((req, res) => {
    res.status(404).end();
  });
module.exports = router;

const router = require('express').Router();
const itemRoutes = require('./itemRoutes');
router.use('/api', itemRoutes);
router.use((req, res) => {
    res.status(404).end();
  });
module.exports = router;