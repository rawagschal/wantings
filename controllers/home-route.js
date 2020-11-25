const router = require('express').Router();
const sequelize = require('../config/connection');
const { Item } = require('../models');

router.get('/', (req, res) => {
    Item.findAll({
        attributes: [
            'id',
            'price',
            'name',
            'description',
            'itemType',
            'era',
            'dimensions',
            'photoUrl'
        ]
    })
    .then(dbItemData => {
        const items = dbItemData.map(item => item.get({ plain: true }));
        res.render('homepage', { items });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
});


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

  module.exports = router;
