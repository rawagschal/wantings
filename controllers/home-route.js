// HOMEPAGE ROUTE
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Item } = require('../models');
const { post } = require('./api/item-route');

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
    // res.render('homepage', {
    //     id: 1,
    //     itemType: 'chair',
    //     price: '100',
    //     name: 'beautiful armchair',
    //     era: 'art nouveau',
    //     photoUrl: 'https://i.pinimg.com/originals/2d/8b/f8/2d8bf8f34d74c4884ed85e7ba880c4db.jpg'
    // });
});

module.exports = router;