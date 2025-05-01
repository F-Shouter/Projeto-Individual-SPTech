var express = require("express");
var router = express.Router();

var grafico_motivoController = require("../controllers/grafico_motivoController");
var grafico_motivoModel = require("../models/grafico_motivoModel")

//Recebendo os dados do html e direcionando para a função atualizar de grafico_motivoController.js
router.post("/atualizar", function (req, res) {
    grafico_motivoController.atualizar(req, res);
});

//Retornando os dados do banco e direcionando para a função retornar de pesquisa.html
router.get("/retornar", function (req, res) {
    grafico_motivoModel.retornar(req) 
        .then(resultado => { 
                res.json(resultado[0]);
        })
});

module.exports = router;