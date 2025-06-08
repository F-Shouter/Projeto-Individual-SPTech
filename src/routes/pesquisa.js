var express = require("express");
var router = express.Router();

var pesquisaModel = require("../models/pesquisaModel")

router.get("/retornar/afastamento", function (req, res) {
    pesquisaModel.retornar_dados_afastamento(req) 
        .then(resultado => { 
                res.json(resultado[0]);
        })
});

router.get("/retornar/motivo", function (req, res) {
    pesquisaModel.retornar_dados_motivo(req) 
        .then(resultado => { 
                res.json(resultado[0]);
        })
});

router.get("/retornar/emocional", function (req, res) {
    pesquisaModel.retornar_dados_emocional(req) 
        .then(resultado => { 
                res.json(resultado[0]);
        })
});

module.exports = router;