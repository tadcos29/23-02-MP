const router = require('express').Router();
const { Traveller, Trip, Location } = require('../../models');

// GET all locations
router.get('/', async (req, res) => {
  try {
    const locationData = await Location.findAll({
     // include: [{ model: Location }, { model: Trip }],
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id, {
      include: [{ model: Trip }],
    });

    if (!locationData) {
      res.status(404).json({ message: 'No location found with that id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  Location.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedLoc) => {
      res.status(200).json(deletedLoc);
    })
    .catch((err) => res.json(err));
});

router.post('/', async (req, res) => {
  try {
    const locationData = await Location.create(req.body);
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
