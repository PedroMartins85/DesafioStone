var db = require("../models/db_connect.js");

var Funcionarios = db.funcionarios;


exports.create = (req, res) =>{

    if (req.body.nome == null){
        res.status(400).send({
            message: "Nome nao pode estar vazio"
          });
          return;
    }
    
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
    var id = req.params.id;

    Funcionarios.destroy({
        where: {id: id}
    })
    .then(num =>{
        if (num == 1){
            res.send({
                message: "Funcionario com id=" + id + " foi deletado."
            });
        }
        else{
            res.send({
                message: "Nao foi possivel deletar o funcionario de id=${id}."
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    })


};

exports.update = (req, res) =>{
    var id = req.params.id;

    var funcionario = {
        Nome: req.body.nome,
        Idade: req.body.idade,
        Cargo: req.body.cargo
    };
    
    Funcionarios.update(funcionario, {
        where:{id: id}
    })
    .then(num =>{
        if (num == 1){
            res.send({
                message: "Funcionario com id=" + id + " foi atualizado."
            });
        }
        else{
            res.send({
                message: "Nao foi possivel atualizar o funcionario de id=" + id
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    })

};

exports.findALL = (req, res) =>{
    Funcionarios.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });

};

exports.findID = (req, res) =>{
    var id = req.params.id;

    Funcionarios.findByPk(id)
    .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message
        });
      });

};

