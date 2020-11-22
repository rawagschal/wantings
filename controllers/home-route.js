const sequelize = require('../config/connection');
const { User, Item } = require('../models');
const router = require('express').Router();



router.get('/login', (req, res) => {
    res.render('login');
  });

  module.exports = router;