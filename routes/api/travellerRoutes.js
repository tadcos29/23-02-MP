const router = require('express').Router();
const { Traveller, Trip, Location } = require('../../models');

// GET all travellers
router.get('/', async (req, res) => {
  try {
    const travellerData = await Traveller.findAll();
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single traveller
router.get('/:id', async (req, res) => {
  try {
    const travellerData = await Traveller.findByPk(req.params.id, {
      include: [{ all: true, nested: true }],
    });
    // const travellerData = await Traveller.findByPk(req.params.id);

    if (!travellerData) {
      res.status(404).json({ message: 'No traveller found with that id!' });
      return;
    }

    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const travellerData = await Traveller.create(req.body);
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', (req, res) => {
  Traveller.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTraveller) => {
      res.status(200).json(deletedTraveller);
    })
    .catch((err) => res.json(err));
});

// router.delete('/:id', (req, res) => {
//   Traveller.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((deletedTrip) => {
//       res.status(200).json(deletedTrip);
//     })
//     .catch((err) => res.json(err));
// });


module.exports = router;
