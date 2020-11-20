const { DataTypes, DATE } = require('sequelize');
// Require the connection to the database (connection.js)
const sequelize = require('../config/connection');
console.log(sequelize);
const OrderDetail = sequelize.define('orderDetail', {
  id:{
    type:DataTypes.INTEGER, 
    primaryKey:true,
    allowNull:false,
    autoIncrement:true
  },
  orderDate:{
    type:DataTypes.DATE,
    allowNull:false,
  }
})


// Export the book model for other files to use
module.exports = OrderDetail;