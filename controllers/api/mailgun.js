const router = require('express').Router();
const sendMail = require('./mail');


router.post('/', (req, res) => {
    const { email, subject, text } = req.body;
    console.log('Data: ', req.body);
    text.replace('#username', req.body.username);
    sendMail(email, subject, text, function (err, data) {
        if (err) {
            res.status(500).json({ message: "Internal Error " });
        } else {
            res.json({ message: 'Email Sent!' });
        }
    });
});

module.exports = router;