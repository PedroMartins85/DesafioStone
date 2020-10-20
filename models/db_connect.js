var Sequelize = require("sequelize");


var sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT
});

var Funcionarios = sequelize.define('funcionarios', {
  Nome: Sequelize.STRING,
  Idade: Sequelize.INTEGER,
  Cargo: Sequelize.STRING
});

var db ={};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.funcionarios = Funcionarios;

module.exports = db;