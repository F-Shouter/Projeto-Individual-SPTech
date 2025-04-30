var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");
var usuarioModel = require("../models/usuarioModel")

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.get("/retornar", function (req, res) {
    usuarioModel.retornar() // Chama a função no model
        .then(resultado => {
            if (resultado.length > 0) {
                res.json(resultado[0]); // Retorna o primeiro resultado como JSON
            } else {
                res.status(404).json({ erro: "Nenhum usuário encontrado" });
            }
        })
        .catch(erro => {
            console.log(`#ERRO: ${erro}`);
            res.status(500).json({ erro: erro });
        });
});

module.exports = router;