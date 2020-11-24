const router = require('express').Router();

const stripe = require('stripe')('sk_test_51HqssXBJygQBRfdhB3znAyi9xE1pmEW4wHOmLfvYGNhpEG0RT0VdGtVO8VMGwYmtPzaM4aohKPD0qZs0vt9OhdKc004I63yuJt');

router.post('/', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Sample Item Name',
                    },
                    unit_amount: 1234,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3001/success',
        cancel_url: 'http://localhost:3001/cancel',
    });

    res.json({ id: session.id });
});

module.exports = router;

