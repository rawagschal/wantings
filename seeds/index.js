const sequelize = require('../config/connection');
const { Item } = require('../models');

const itemData = [{
     
  "itemType": "Chair",
  "price": "100",
  "name": "kids chair",
  "era": "art deco",
  "dimensions": "24 in x 30 in x 16 in",
  "photoUrl": "abcdsf.com"

}
]
const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedUsers;
