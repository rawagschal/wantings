const sequelize = require('../config/connection');
const { Item } = require('../models');


const itemData = [
{  
  "itemType": "Dresser with Mirror",
  "price": "29900",
  "name": "Exquisite 1900's Serpentine Tiger Oak Dresser with Mirror",
  "description": "A darling dresser and the perfect solution for someone with big style and a small space! This Victorian chest of drawers features quarter-sawn oak construction in serpentine form with floral embellishments on the mirror frame. 💐 And it's on wheels!",
  "era": "Victorian",
  "dimensions": "Dresser: H:27in W:19.5in x L:34in; with Mirror: H:47in", 
  "photoUrl": "https://photos.smugmug.com/Vintage-Wantings/n-R8qvCD/i-jwnbDWP/0/b8f78146/X3/i-jwnbDWP-X3.jpg"

},
{
 "itemType": "Chair",
  "price": "19900",
  "name": "Strong Brown Chair",
  "description": "This solid construction will last for years to come. 👷A mid century beauty that has some wear, but a lot of life left in it. 💃",
  "era": "Mid-Century",
  "dimensions": "Chair: H:32in W:24in x L:24in; Seat: H:19in", 
  "photoUrl": "https://photos.smugmug.com/Vintage-Wantings/n-R8qvCD/i-9s3dptD/0/c418502a/X2/i-9s3dptD-X2.jpg"
},
{
     
  "itemType": "Buffet Table with Hutch",
  "price": "79900",
  "name": "Divine Antique Jacobean Oak Buffet Table with Hutch",
  "description": "This stunning Jacobean piece with traditional barley twists and brass pulls will add charm and sophistication to your home! 👑 Perfect for entertaining and displaying all your cool glassware!",
  "era": "Victorian",
  "dimensions": "Dresser: H:42in W:23in x L:52in;  Hutch: H:29in W:11in L:51in",
  "photoUrl": "https://photos.smugmug.com/Vintage-Wantings/n-R8qvCD/i-JzP7bgr/0/1b2ddcda/X3/i-JzP7bgr-X3.jpg"

},
{
     
  "itemType": "Bar",
  "price": "38900",
  "name": "Classy Flip Top Bar on Wheels",
  "description": "Party time! This classic Ethan Allen bar is perfect for small spaces, complete with silverware drawers, ample cabinet space, and wheels for ease of use. 🍸 Light scratches and a watermark on top, but overall in great condition!",
  "era": "Victorian",
  "dimensions": "Bar: H:34in W:21in x L:32in;  Extended: L:56", 
  "photoUrl": "https://photos.smugmug.com/Vintage-Wantings/n-R8qvCD/i-p3BjcNz/0/bd82a165/X3/i-p3BjcNz-X3.jpg"

},
{
     
  "itemType": "Dresser",
  "price": "79900",
  "name": "Stunning Century Isabel Bombe Dresser",
  "description": "This Century dresser is the bombe! (I was legally required by the state of CA to make that joke) Beautiful heavy wood and fine craftsmanship make it a perfect heirloom piece. In fantastic condition with only very light scratches on the surface.",
  "era": "Late 20th Century",
  "dimensions": "H:36in W:23in x L:49in", 
  "photoUrl": "https://photos.smugmug.com/Vintage-Wantings/n-R8qvCD/i-4jHwN9w/0/25d48bb0/X2/i-4jHwN9w-X2.jpg"

},
{
     
  "itemType": "Table",
  "price": "22900",
  "name": "Art Nouveau Style Occasional Table",
  "description": "This stunning table has dynamic flowing lines typical of the art nouveau style. I truly love this piece! There has been a small repair made as shown. It does not take away from how lovely it is.",
  "era": "Art Nouveau Style, Construction Unknown",
  "dimensions": "H:28in W:31in x L:31in", 
  "photoUrl": "https://tinyurl.com/y2tkn7y6"

},
{

  "itemType": "Table",
  "price": "7900",
  "name": "Unique Wooden Side Table",
  "description": "This 3-tiered vintage side table makes a big impact with its intricate design and quality wood construction. It’s perfect for resting your Brandy Alexander (with a coaster of course) or as an amazing multi-level plant stand.",
  "era": "Late 20th Century",
  "dimensions": "H:22in W:14in x L:25in", 
  "photoUrl": "https://tinyurl.com/y5frdqgz"

}

]
const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;