const router = require('express').Router();
const travellerRoutes = require('./travellerRoutes');
const tripRoutes = require('./tripRoutes');
const locationRoutes = require('./locationRoutes');

router.use('/travellers', travellerRoutes);
router.use('/trips', tripRoutes);
router.use('/locations', locationRoutes);

module.exports = router;
