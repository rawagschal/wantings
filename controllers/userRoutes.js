const express = require('express');
const router = express.Router();
const userController = require('./api/userController')



// router.get('/login', userController.getLogInPage);
// router.get('/register', userController.getRegistrationPage)
// router.post('/register', userController.registerUser)



//api routes
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

//html routes item and user

// const userRoutes = require('./userRoutes');
// router.use('/user', userRoutes);

// const itemRoutes = require('./itemRoutes');
// router.use('/item', itemRoutes);


router.use((req, res) => {
    res.status(404).end();
  });
module.exports = router;