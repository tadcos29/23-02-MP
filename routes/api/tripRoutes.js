const router = require('express').Router();
const { Traveller, Trip, Location } = require('../../models');

// GET all trips
router.get('/', async (req, res) => {
  try {
    const tripData = await Trip.findAll({
      // include: [{ model: Traveller }, { model: Trip }],
    });
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const tripData = await Trip.create(req.body);
    res.status(200).json(tripData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', (req, res) => {
  Trip.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTrip) => {
      res.status(200).json(deletedTrip);
    })
    .catch((err) => res.json(err));
});



// GET a single trip
// router.get('/:id', async (req, res) => {
//   try {
//     const driverData = await Driver.findByPk(req.params.id, {
//       include: [{ model: License }, { model: Car }],
//     });

//     if (!driverData) {
//       res.status(404).json({ message: 'No driver found with that id!' });
//       return;
//     }

//     res.status(200).json(driverData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
