const Sequelize = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "wipro@123", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false
});

module.exports = sequelize;
global.sequelize = sequelize;