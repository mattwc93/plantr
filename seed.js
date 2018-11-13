const { db, Plot, Vegetable, Gardener } = require('./models');


db.sync({force: true}).then(() => {
  console.log('synced');
  return Vegetable.bulkCreate([{
    name: 'carrot',
    color: 'orange',
    planted_on: Date.now()
  }, {
    name: 'tomato',
    color: 'red',
    planted_on: Date.now()
  }, {
    name: 'onion',
    color: 'white',
    planted_on: Date.now()
  }]);
})
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    db.close();
  })
