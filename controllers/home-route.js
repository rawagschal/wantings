// HOMEPAGE ROUTE
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Item } = require('../models');

router.get('/', (req, res) => {
    Item.findAll({
        attributes: [
            'id',
            'price',
            'name',
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

module.exports = router;