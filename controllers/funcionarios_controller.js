var db = require("../models/db_connect.js");

var Funcionarios = db.funcionarios;


exports.create = (req, res) =>{
    
    var funcionario = {
        Nome: req.body.nome,
        Idade: req.body.idade,
        Cargo: req.body.cargo
    };

    Funcionarios.create(funcionario)
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message
            });
        });
};

exports.delete = (req, res) =>{

};

exports.update = (req, res) =>{

};

exports.findALL = (req, res) =>{

};

exports.findID = (req, res) =>{

};

