var dbConfig = require("../config/db_config.js");
var Sequelize = require("sequelize");


var sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
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