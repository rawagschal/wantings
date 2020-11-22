const sequelize = require('../config/connection');
const { Item } = require('../models');

const itemData = [
{  
  "itemType": "Dresser with Mirror",
  "price": "299",
  "name": "Exquisite 1900's Serpentine Tiger Oak Dresser with Mirror",
  "era": "Victorian",
  "dimensions": "Dresser: H:27in W:19.5in x L:34in; with Mirror: H:47in", 
  "photoUrl": "https://kimmulliganphoto.smugmug.com/Vintage-Wantings/n-R8qvCD/i-jwnbDWP"

},
{
 "itemType": "Chair ",
  "price": "199",
  "name": "Strong Brown Chair",
  "era": "Mid-Century",
  "dimensions": "Chair: H:32in W:24in x L:24in; Seat: H:19in", 
  "photoUrl": "https://kimmulliganphoto.smugmug.com/Vintage-Wantings/n-R8qvCD/i-9s3dptD"
},
{
     
  "itemType": "Buffet Table with Hutch",
  "price": "799",
  "name": "Divine Antique Jacobean Oak Buffet Table with Hutch",
  "era": "Victorian",
  "dimensions": "Dresser: H:42in W:23in x L:52in;  Hutch: H:29in W:11in L:51in",
  "photoUrl": "https://kimmulliganphoto.smugmug.com/Vintage-Wantings/n-R8qvCD/i-JzP7bgr"

},
{
     
  "itemType": "Bar",
  "price": "389",
  "name": "Classy Flip Top Bar on Wheels",
  "era": "Victorian",
  "dimensions": "Bar: H:34in W:21in x L:32in;  Extended: L:56", 
  "photoUrl": "https://kimmulliganphoto.smugmug.com/Vintage-Wantings/n-R8qvCD/i-p3BjcNz"

},
{
     
  "itemType": "Dresser",
  "price": "799",
  "name": "Stunning Century Isabel Bombe Dresser",
  "era": "Late 20th Century",
  "dimensions": "H:36in W:23in x L:49in", 
  "photoUrl": "https://kimmulliganphoto.smugmug.com/Vintage-Wantings/n-R8qvCD/i-4jHwN9w"

},
 
]
const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;