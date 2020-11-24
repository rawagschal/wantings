const router = require('express').Router();
const { Item } = require('../../models');


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
  .then(dbItemData =>
    res.json(dbItemData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  
router.put('/', (req, res) => {
  Item.update(
    {
    itemType: req.body.itemType,
    name: req.body.name,
    price: req.body.price,
    era: req.body.era,
    dimensions: req.body.dimensions,
    photoUrl: req.body.photoUrl,
  },
  {
      where: {
      id: req.params.id
      }
  }
  )
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No id found with this id' });
      return;
    }
    res.json(dbPostData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
});  


router.delete('/:id', (req, res) => {
  Item.destroy({
    where: {  
    id: req.params.id,
    }
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No item found with this id' });
      return;
    }
    res.json(dbPostData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
module.exports = router;