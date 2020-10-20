const Sequelize = require("sequelize");


const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT
});

const Funcionarios = sequelize.define('funcionarios', {
  nome: Sequelize.STRING,
  idade: Sequelize.INTEGER,
  cargo: Sequelize.STRING
});

const db ={};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.funcionarios = Funcionarios;

module.exports = db;