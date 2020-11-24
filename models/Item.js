// Dependencies
// =============================================================

// Require the sequelize library
<<<<<<< HEAD
const { Model, DataTypes } = require('sequelize');
// Require the connection to the database (connection.js)
const sequelize = require('../config/connection');
// console.log(sequelize);
class Item extends Model{}

Item.init(
  {id: {
=======
const { DataTypes } = require('sequelize');
// Require the connection to the database (connection.js)
const sequelize = require('../config/connection');
console.log(sequelize);
const Item = sequelize.define('item', {
  id:{
>>>>>>> 93c3457ae0ee56e46cb82510a17c8879f943e030
    type:DataTypes.INTEGER, 
    primaryKey:true,
    allowNull:false,
    autoIncrement:true
  },
<<<<<<< HEAD
  itemType: {
    type:DataTypes.STRING,
    allowNull:false,
  },
  price: {
    type:DataTypes.STRING,
    allowNull:false,
  },
  name: {
    type:DataTypes.STRING,
    allowNull:false,
  },
  era: {
    type:DataTypes.STRING,
    allowNull:false,
  },
  dimensions: {
    type:DataTypes.STRING,
    allowNull:false,
  },
  photoUrl: {
=======
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
>>>>>>> 93c3457ae0ee56e46cb82510a17c8879f943e030
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      isUrl:true
    }
  },
<<<<<<< HEAD
  },
  {
    sequelize,
    freezeTableName:true,
    underscored:true,
    modelName:'item',
  }
  );


// Export the model for other files to use
=======
})


// Export the book model for other files to use
>>>>>>> 93c3457ae0ee56e46cb82510a17c8879f943e030
module.exports = Item;
