const Item = require('./Item');
const User = require('./User');
const Cart = require('./Cart');
const CartDetail = require('./CartDetail');
const Order = require('./Order');
const OrderDetail = require('./OrderDetail');

Cart.belongsTo(User);
User.hasOne(Cart);
Item.belongsToMany(Cart, {
    through:CartDetail
});
Order.belongsToMany(Item, {
  through:OrderDetail
});
Order.belongsTo(User);
User.hasMany(Order);


module.exports = { Item, Cart, CartDetail, Order, User, OrderDetail };