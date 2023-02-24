const router = require('express').Router();
const apiRoutes = require('./api');


router.get('/', async (req, res) => {
    try {
      res.status(200).json(`Use /api/travellers, /api/locations, /api/trips with their various associated GET, POST, and DELETE methods.`);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.use('/api', apiRoutes);

module.exports = router;
