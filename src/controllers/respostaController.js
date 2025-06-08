var respostaModel = require("../models/respostaModel");

function cadastrar(req, res) {
    var respostas = req.body.respostas;

    respostaModel.cadastrarRespostas(respostas)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao cadastrar as respostas! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrar
};