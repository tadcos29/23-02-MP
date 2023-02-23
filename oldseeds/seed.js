const sequelize = require('../config/connection');
const { Traveller, Location, Trip } = require('../models');

const travellerSeedData = require('./travellerSeedData.json');
const locationSeedData = require('./locationSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const travellers = await Traveller.bulkCreate(travellerSeedData);
  const locations = await Location.bulkCreate(locationSeedData);

  // for (const { id } of drivers) {
  //   const newLicense = await License.create({
  //     driver_id: id,
  //   });
  // }

  // for (const car of carSeedData) {
  //   const newCar = await Car.create({
  //     ...car,
  //     // Attach a random driver ID to each car
  //     driver_id: drivers[Math.floor(Math.random() * drivers.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
