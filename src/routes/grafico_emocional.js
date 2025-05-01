var express = require("express");
var router = express.Router();

var grafico_emocionalController = require("../controllers/grafico_emocionalController");
var grafico_emocionalModel = require("../models/grafico_emocionalModel")

//Recebendo os dados do html e direcionando para a função atualizar de grafico_emocionalController.js
router.post("/atualizar", function (req, res) {
    grafico_emocionalController.atualizar(req, res);
});

//Retornando os dados do banco e direcionando para a função retornar de pesquisa.html
router.get("/retornar", function (req, res) {
    grafico_emocionalModel.retornar(req) 
        .then(resultado => { 
                res.json(resultado[0]);
        })
});

module.exports = router;