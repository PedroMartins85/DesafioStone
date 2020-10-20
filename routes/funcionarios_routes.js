module.exports = app =>{
    var funcionarios = require("../controllers/funcionarios_controller.js");
    var router = require("express").Router();

    router.post("/", funcionarios.create);

    router.delete("/:id", funcionarios.delete);

    router.put("/:id", funcionarios.update);

    router.get("/", funcionarios.findALL);

    router.get("/:id", funcionarios.findID);

    app.use("/funcionarios", router);
}