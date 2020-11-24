const { DataTypes } = require('sequelize');
// Require the connection to the database (connection.js)
const sequelize = require('../config/connection');
console.log(sequelize);
const User = sequelize.define('user', {
  id:{
    type:DataTypes.INTEGER, 
    primaryKey:true,
    allowNull:false,
    autoIncrement:true
  },
  firstName:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  lastName:{
    type:DataTypes.STRING,
    allowNull:false,
  },
<<<<<<< HEAD
=======
  lastName:{
    type:DataTypes.STRING,
    allowNull:false,
  },
>>>>>>> 93c3457ae0ee56e46cb82510a17c8879f943e030
  username:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true,
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  address:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  zip:{
    type:DataTypes.INTEGER,
    allowNull:false,
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true,
    validate:{
    isEmail:true,
    }
  },

})
User.sync();

// Export the book model for other files to use
module.exports = User;
