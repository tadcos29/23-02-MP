const Traveller = require('./Traveller');
const Trip = require('./Trip');
const Location = require('./Location');

// Driver.hasOne(License, {
//   foreignKey: 'driver_id',
// });

// License.belongsTo(Driver, {
//   foreignKey: 'driver_id',
// });

// Define a Driver as having many Cars, thus creating a foreign key in the `car` table

Traveller.hasMany(Trip, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});

Location.hasMany(Trip, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE',
});



Trip.belongsTo(Traveller, {
  foreignKey: 'traveller_id',
});

Trip.belongsTo(Location, {
  foreignKey: 'location_id',
});

module.exports = { Traveller, Trip, Location };
