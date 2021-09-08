const Sequelize = require("sequelize");

const db = new Sequelize('messenger', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = db;
