const { DataTypes } = require('sequelize');
// Require the connection to the database (connection.js)
const sequelize = require('../config/connection');
console.log(sequelize);
const CartDetail = sequelize.define('cartDetail', {
  id:{
    type:DataTypes.INTEGER, 
    primaryKey:true,
    allowNull:false,
    autoIncrement:true
  },
})


// Export the book model for other files to use
module.exports = CartDetail;