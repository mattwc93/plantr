const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/plantr', {logging: false});



const Gardener = db.define('gardener', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

const Plot = db.define('plot', {
  shaded: Sequelize.BOOLEAN,
  size: Sequelize.INTEGER
});

const Vegetable = db.define('vegetable', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  planted_on: Sequelize.DATE
});

Plot.belongsTo(Gardener);
Vegetable.belongsToMany(Plot, {through: 'location'});
Plot.belongsToMany(Vegetable, {through: 'location'});
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'});

module.exports = { db, Gardener, Plot, Vegetable};
