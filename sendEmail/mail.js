const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();



const auth = {
    auth: {
        api_key: process.env.api_key,
        domain: 'sandboxb758134d45f945f6858890f7cbdf1df8.mailgun.org'

    }
};

const transporter = nodemailer.createTransport(mailGun(auth));
const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: 'Wantings <kmorarity@gmail.com>',
        to: email,
        subject: 
        text
    };
    
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

module.exports = sendMail;

