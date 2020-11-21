const path = require('path');
const express = require('express');

const sendMail = require('./mail');
const router = require('express').Router();



router.post('/email', (req, res) => {
    const { email, subject, text } = req.body;
    console.log('Data: ', req.body);
    text.replace('#username', req.body.username);
    sendMail(email, subject, text, function(err, data) {
        if (err) {
            res.status(500).json({ message: "Internal Error "});
        } else {
            res.json({ message: 'Email Sent!' });
        }
    });
});

/* router.get('/', (req, res) => {
    res.render('email');
}); */

module.exports = router;