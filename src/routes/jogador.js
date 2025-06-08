var express = require("express");
var router = express.Router();

var jogadorController = require("../controllers/jogadorController");
var jogadorModel = require("../models/jogadorModel")

router.post("/cadastrar", function (req, res) {
    jogadorController.cadastrar(req, res);
});

router.get("/retornar", function (req, res) {
    jogadorModel.retornar(req) 
        .then(resultado => { 
                res.json(resultado[0]);
        })
});

module.exports = router;