const db = require("../models/db_connect.js");
const { validationResult } = require('express-validator');
const logger = require("../helpers/logger.js");

const Funcionarios = db.funcionarios;


exports.create = (req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).send({
            message: errors.errors[0].msg
          });
          logger.error('Erro de validação de entrada para criar novo funcionario');
          return;
    }
    
    const funcionario = {
        nome: req.body.nome,
        idade: req.body.idade,
        cargo: req.body.cargo
    };

    Funcionarios.create(funcionario)
        .then(data =>{
            res.send(data);
            logger.info(`Novo funcionario inserido no banco de dados id=${data.id}`);
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message
            });
            logger.warn(`Erro ao inserir novo registro no banco de dados`);
        });
};

exports.delete = (req, res) =>{
    const id = req.params.id;

    Funcionarios.destroy({
        where: {id: id}
    })
    .then(num =>{
        if (num == 1){
            res.send({
                message: `Funcionario com id=${id} foi deletado.`
            });
            logger.info(`Funcionario com id=${id} foi deletado.`);
        }
        else{
            res.send({
                message: `Nao foi possivel deletar o funcionario de id=${id}.`
            });
            logger.warn(`Nao foi possivel deletar o funcionario de id=${id}.`);
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
        logger.warn(`Nao foi possivel deletar o funcionario de id=${id}.`);
    })


};

exports.update = (req, res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).send({
            message: errors.errors[0].msg
          });
          logger.warn(`Erro de validacao da entrada para update.`);
          return;
    }

    const id = req.params.id;

    Funcionarios.update(req.body, {
        where:{id: id}
    })
    .then(num =>{
        if (num == 1){
            res.send({
                message: `Funcionario com id=${id} foi atualizado.`
            });
            logger.info(`Funcionario com id=${id} foi atualizado.`);
        }
        else{
            res.send({
                message: `Nao foi possivel atualizar o funcionario de id=${id}`
            });
            logger.warn(`Nao foi possivel atualizar o funcionario de id=${id}.`);
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
        logger.warn(`Nao foi possivel deletar o funcionario de id=${id}.`);
    })

};

exports.findALL = (req, res) =>{
    Funcionarios.findAll()
    .then(data => {
      res.send(data);
      logger.info('Busca concluida com sucesso');
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
      logger.warn('Nao foi possivel concluir a busca');
    });

};

exports.findID = (req, res) =>{
    const id = req.params.id;

    Funcionarios.findByPk(id)
    .then(data => {
        res.send(data);
        logger.info('Busca pelo id concluida com sucesso');
      })
      .catch(err => {
        res.status(500).send({
          message: err.message
        });
        logger.warn('Nao foi possivel concluir a busca para esse id');
      });

};

