var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");
var usuarioModel = require("../models/usuarioModel")

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

//Retornando os dados do banco e direcionando para a função retornar de jogo.html
router.get("/retornar", function (req, res) {
    usuarioModel.retornar(req) 
        .then(resultado => { 
                res.json(resultado[0]);
        })
});

module.exports = router;