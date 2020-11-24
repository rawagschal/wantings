<<<<<<< HEAD
const Item = require('./Item');
const User = require('./User');
const Cart = require('./Cart');
const CartDetail = require('./CartDetail');
const Order = require('./Order');
const OrderDetail = require('./OrderDetail');
=======
const Item = require('./Item')
const User = require('./User')
const Cart = require('./Cart')
const CartDetail = require('./CartDetail')
const Order = require('./Order')
const OrderDetail = require('./OrderDetail')
>>>>>>> 93c3457ae0ee56e46cb82510a17c8879f943e030

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


<<<<<<< HEAD
module.exports = { Item, Cart, CartDetail, Order, User, OrderDetail };
=======
module.exports = {Item, Cart, CartDetail, Order, User, OrderDetail};
>>>>>>> 93c3457ae0ee56e46cb82510a17c8879f943e030
