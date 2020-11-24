  
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
<<<<<<< HEAD
// const userRouter = require('./controllers/userRoutes')
const routes = require('./controllers')
=======
const userRouter = require('./routes/userRoutes')

>>>>>>> 93c3457ae0ee56e46cb82510a17c8879f943e030

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const models = require('./models');


// const Order = require('./models/Order');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
<<<<<<< HEAD
=======
app.use(express.static(path.join(__dirname, 'public')));
app.use(userRouter)
>>>>>>> 93c3457ae0ee56e46cb82510a17c8879f943e030

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.use(require('./controllers'));
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});