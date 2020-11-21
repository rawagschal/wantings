const router = require('express').Router();
const { Item } = require('../../models')
// const sequelize = require('../../config/connection');


router.get('/', (req, res) => {
  // Access our Item model and run .findAll() method)
  Item.findAll({
   attributes: ['id', 'price', 'name', 'itemType', 'era', 'dimensions', 'photoUrl']
  })
    .then(dbItemData => res.json(dbItemData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', (req, res) => {
  Item.create({
    id: req.body.id,
    itemType: req.body.itemType,
    name: req.body.name,
    price: req.body.price,
    era: req.body.era,
    dimensions: req.body.dimensions,
    photoUrl: req.body.photoUrl,
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});  

router.put('/', (req, res) => {
  Item.update({
    id: req.body.id,
    itemType: req.body.itemType,
    name: req.body.name,
    price: req.body.price,
    era: req.body.era,
    dimensions: req.body.dimensions,
    photoUrl: req.body.photoUrl,
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});  
router.delete('/', (req, res) => {
  Item.destroy({
    id: req.body.id,
    itemType: req.body.itemType,
    name: req.body.name,
    price: req.body.price,
    era: req.body.era,
    dimensions: req.body.dimensions,
    photoUrl: req.body.photoUrl,
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});  
module.exports = router;