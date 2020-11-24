const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/checkout', (req, res) => {
    res.render('checkout', {});

});


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

module.exports = router;