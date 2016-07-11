var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'root', '');

var Fruit = sequelize.define('fruit', {
  name: Sequelize.STRING,
});

sequelize.sync().then(function() {
  return Fruit.create({
    name: 'Banana',
  });
}).then(function(banana) {
  console.log(banana.get({
    plain: true
  }));
});
