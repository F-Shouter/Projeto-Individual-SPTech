var express = require("express");
var router = express.Router();

var jogadorController = require("../controllers/jogadorController");
var jogadorModel = require("../models/jogadorModel")

//Recebendo os dados do html e direcionando para a função cadastrar de jogadorController.js
router.post("/cadastrar", function (req, res) {
    jogadorController.cadastrar(req, res);
});

//Retornando os dados do banco e direcionando para a função retornar em jogo.html
router.get("/retornar", function (req, res) {
    jogadorModel.retornar(req) 
        .then(resultado => { 
                res.json(resultado[0]);
        })
});

module.exports = router;