var express = require("express");
var router = express.Router();

var grafico_afastamentoController = require("../controllers/grafico_afastamentoController");
var grafico_afastamentoModel = require("../models/grafico_afastamentoModel")

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/atualizar", function (req, res) {
    grafico_afastamentoController.atualizar(req, res);
});

//Retornando os dados do banco e direcionando para a função retornar de jogo.html
router.get("/retornar", function (req, res) {
    grafico_afastamentoModel.retornar(req) 
        .then(resultado => { 
                res.json(resultado[0]);
        })
});

module.exports = router;