  
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sendMail = require('./mail');

const app = express();
const PORT = process.env.PORT || 3001;

//const sequelize = require("./config/connection");
//const SequelizeStore = require('connect-session-sequelize')(session.Store);

/*const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}; */

//app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(require('./controllers/'));

app.post('/email', (req, res) => {
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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


//sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
//});