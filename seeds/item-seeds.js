const sequelize = require('../config/connection');
const { Item } = require('../models');

const itemData = [
{  
  "itemType": "Dresser with Mirror",
  "price": "29900",
  "name": "Exquisite 1900's Serpentine Tiger Oak Dresser with Mirror",
  "era": "Victorian",
  "dimensions": "Dresser: H:27in W:19.5in x L:34in; with Mirror: H:47in", 
  "photoUrl": "https://photos.smugmug.com/Vintage-Wantings/n-R8qvCD/i-jwnbDWP/0/b8f78146/X3/i-jwnbDWP-X3.jpg"

},
{
 "itemType": "Chair",
  "price": "19900",
  "name": "Strong Brown Chair",
  "era": "Mid-Century",
  "dimensions": "Chair: H:32in W:24in x L:24in; Seat: H:19in", 
  "photoUrl": "https://photos.smugmug.com/Vintage-Wantings/n-R8qvCD/i-9s3dptD/0/c418502a/X2/i-9s3dptD-X2.jpg"
},
{
     
  "itemType": "Buffet Table with Hutch",
  "price": "79900",
  "name": "Divine Antique Jacobean Oak Buffet Table with Hutch",
  "era": "Victorian",
  "dimensions": "Dresser: H:42in W:23in x L:52in;  Hutch: H:29in W:11in L:51in",
  "photoUrl": "https://photos.smugmug.com/Vintage-Wantings/n-R8qvCD/i-JzP7bgr/0/1b2ddcda/X3/i-JzP7bgr-X3.jpg"

},
{
     
  "itemType": "Bar",
  "price": "38900",
  "name": "Classy Flip Top Bar on Wheels",
  "era": "Victorian",
  "dimensions": "Bar: H:34in W:21in x L:32in;  Extended: L:56", 
  "photoUrl": "https://photos.smugmug.com/Vintage-Wantings/n-R8qvCD/i-p3BjcNz/0/bd82a165/X3/i-p3BjcNz-X3.jpg"

},
{
     
  "itemType": "Dresser",
  "price": "79900",
  "name": "Stunning Century Isabel Bombe Dresser",
  "era": "Late 20th Century",
  "dimensions": "H:36in W:23in x L:49in", 
  "photoUrl": "https://photos.smugmug.com/Vintage-Wantings/n-R8qvCD/i-4jHwN9w/0/25d48bb0/X2/i-4jHwN9w-X2.jpg"

},
{
     
  "itemType": "Table",
  "price": "22900",
  "name": "Art Nouveau Style Occasional Table",
  "era": "Art Nouveau Style, Construction Unknown",
  "dimensions": "H:28in W:31in x L:31in", 
  "photoUrl": "photo.com"

},
{

  "itemType": "Table",
  "price": "7900",
  "name": "Unique Wooden Side Table",
  "era": "Late 20th Century",
  "dimensions": "H:22in W:14in x L:25in", 
  "photoUrl": "photo.com"

},
{

  "itemType": "Chair",
  "price": "10900",
  "name": "Charming Antique Tiger Wood Rocker",
  "era": "Victorian",
  "dimensions": "H:35in W:17in x L:28in, Seat H:15in", 
  "photoUrl": "photo.com"

},
{

  "itemType": "Sofa",
  "price": "49900",
  "name": "Camel Colored Bannister Sofa",
  "era": "Contemporary",
  "dimensions": "H:36in W:363in x L:83in", 
  "photoUrl": "photo.com"

},

]
const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;