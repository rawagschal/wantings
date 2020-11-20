const { DataTypes } = require('sequelize');
// Require the connection to the database (connection.js)
const sequelize = require('../config/connection');
console.log(sequelize);
const Order = sequelize.define('order', {
  id:{
    type:DataTypes.INTEGER, 
    primaryKey:true,
    allowNull:false,
    autoIncrement:true
  },
  date:{
    type:DataTypes.DATE, 
    allowNull:false,
  },
})


// Export the book model for other files to use
module.exports = Order;