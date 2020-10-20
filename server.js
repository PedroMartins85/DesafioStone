var express = require('express');
var app = express();
require('dotenv-safe').config();
var Sequelize = require('sequelize');
app.use(express.json());


var db = require("./models/db_connect.js");
db.sequelize.sync();


require("./routes/funcionarios_routes.js")(app);

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})