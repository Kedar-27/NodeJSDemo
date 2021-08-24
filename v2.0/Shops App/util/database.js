const Sequelize = require('sequelize');

const sequelize = new Sequelize('shops_app', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
