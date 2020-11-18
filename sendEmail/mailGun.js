const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sendMail = require('./mail');
const router = require('express').Router();


router.post('/email', (req, res) => {
    const { email, subject, text } = req.body;
    console.log('Data: ', req.body);

    sendMail(email, subject, text, function(err, data) {
        if (err) {
            res.status(500).json({ message: "Internal Error "});
        } else {
            res.json({ message: 'Email Sent!' });
        }
    });
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

module.export = router;