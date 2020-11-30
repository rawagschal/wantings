const Item = require('../../models/Item.js')

const router = require('express').Router();

const stripe = require('stripe')('sk_test_51HqssXBJygQBRfdhB3znAyi9xE1pmEW4wHOmLfvYGNhpEG0RT0VdGtVO8VMGwYmtPzaM4aohKPD0qZs0vt9OhdKc004I63yuJt');

router.post('/:id', async (req, res) => {
    const itemId = req.params.id
    const response = await Item.findByPk(itemId)
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: response.name,
                        description: response.description,
                        images: [response.photoUrl],
                    },
                    unit_amount: response.price,
                },
                quantity: 1,
                
            },
        ],
        mode: 'payment',
        success_url: 'https://warm-crag-68291.herokuapp.com/success',
        cancel_url: 'https://warm-crag-68291.herokuapp.com/cancel',
    });

    res.json({ id: session.id });
});

module.exports = router;

