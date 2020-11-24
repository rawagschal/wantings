const router = require('express').Router();
const sequelize = require('../config/connection');
const { Item } = require('../models');
// const stripe = require('stripe')('sk_test_51HpO6wGjGw30uJiXQXG2cLxVYzbDA9xIr4YbDL1hd7EHLbfsMZGxbdLRhAfslyAcGWpCJ7nLP9RP5TEd5XNYnF8k00XmdrbsiL');
// const test = async () => {
//     const paymentIntent = await stripe.paymentIntents.create({
//   amount: 1000,
//   currency: 'usd',
//   payment_method_types: ['card'],
//   receipt_email: 'jenny.rosen@example.com',
// });
// console.log(paymentIntent);
// }
// test();


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


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

  module.exports = router;
