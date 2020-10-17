var express = require('express');
var app = express();
var Sequelize = require('sequelize');

var db = require("./db_connect.js");

var Funcionarios = db.define('funcionarios', {
  Idade: Sequelize.INTEGER,
  Nome: Sequelize.STRING,
  Cargo: Sequelize.STRING
});

db.sync().then(function () {
  Funcionarios.create({
    Nome: 'Pedro',
    Idade: '23',
    Cargo: 'dev'
  });
});


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})