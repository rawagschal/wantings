// Dependencies
// =============================================================

// Require the sequelize library
const { DataTypes } = require('sequelize');
// Require the connection to the database (connection.js)
const sequelize = require('../config/connection');
console.log(sequelize);
const Item = sequelize.define('item', {
  id:{
    type:DataTypes.INTEGER, 
    primaryKey:true,
    allowNull:false,
    autoIncrement:true
  },
  itemType:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  price:{
    type:DataTypes.DOUBLE,
    allowNull:false,
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  era:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  dimensions:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  photoUrl:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      isUrl:true
    }
  },
})


// Export the book model for other files to use
module.exports = Item;
