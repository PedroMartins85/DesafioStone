module.exports = app =>{
    var funcionarios = require("../controllers/funcionarios_controller.js");
    var router = require("express").Router();

    router.post("/", funcionarios.create);

    app.use("/funcionarios", router);
}