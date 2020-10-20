module.exports = app => {
    const funcionarios = require("../controllers/funcionarios_controller.js");
    const router = require("express").Router();
    const { body } = require("express-validator");

    router.post("/", [
        body('nome')
            .isString()
            .trim(),
        body('idade')
            .isNumeric(),
        body('cargo')
            .isString()
            .trim(),
    ], funcionarios.create);

    router.delete("/:id", funcionarios.delete);

    router.put("/:id",[
        body('nome')
            .optional()
            .isString()
            .trim(),
        body('idade')
            .optional() 
            .isNumeric(), 
        body('cargo')
            .optional()
            .isString()
            .trim(),
    ], funcionarios.update);

    router.get("/", funcionarios.findALL);

    router.get("/:id", funcionarios.findID);

    app.use("/funcionarios", router);
}