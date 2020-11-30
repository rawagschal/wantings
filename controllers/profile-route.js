const router = require('express').Router();
const sequelize = require('../config/connection');
const {  User } = require('../models');

router.get('/', (req, res) => {
    User.findAll({
        
        where: {
            id: req.params.id
        },
        
        attributes: [
            'username',
            'email',
            'first_name',
            'last_name',
            'address',
            'zip'
           
        ]
    })
    
    .then(dbUserData => {
        const user = dbUserData.map(user => user.get({ plain: true }));
        res.render('profile', { user, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });  
    
    });
    
    


module.exports = router;