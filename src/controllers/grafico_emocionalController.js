var grafico_emocionalModel = require("../models/grafico_emocionalModel");

function atualizar(req, res) {
    var qtd_concordam = req.body.qtd_concordamServer;
    var qtd_discordam = req.body.qtd_discordamServer;

    console.log("Valores recebidos no atualizar:", qtd_concordam, qtd_discordam);

    grafico_emocionalModel.atualizar(qtd_concordam, qtd_discordam)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro no atualizar:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function retornar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo quiz.html
    var qtd_concordam = req.body.qtd_concordamServer;
    var qtd_discordam = req.body.qtd_discordamServer;
    
        // Passe os valores como parâmetro e vá para o arquivo grafico_emocionalModel.js
        grafico_emocionalModel.retornar(qtd_concordam, qtd_discordam)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o retorno! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    atualizar,
    retornar
}