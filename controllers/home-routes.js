// USER-FACING ROUTES
// const router = require('express').Router();
// const sequelize = require('../config/connection');
// const { User } = require('../models');

// router.get('/', (req, res) => {
//     User.findAll({
//         attributes: [
//             'id',
//             'first_name',
//             'last_name',
//             'username',
//             'email',
//             'address',
//             'zip',
//         ],
//         include: [
//             {
//                 model: User,
//                 attributes: ['id', 'first_name', 'last_name', 'username', 'email', 'address', 'zip']
//             }
//         ]
//     })
//     .then(dbUserData => {
//         console.log(dbUserData[0]);
//         const users = dbUserData.map(user => user.get({ plain: true}));
        
//         res.render('cart', { users });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
    
// });

// module.exports = router;


// HOMEPAGE ROUTE
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = router;