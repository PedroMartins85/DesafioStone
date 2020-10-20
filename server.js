const express = require('express');
const app = express();
require('dotenv-safe').config();
const Sequelize = require('sequelize');
app.use(express.json());


const db = require("./models/db_connect.js");
db.sequelize.sync();


require("./routes/funcionarios_routes.js")(app);

app.listen(process.env.APP_PORT, function () {
  console.log(`API listening on port ${process.env.APP_PORT}!`);
})