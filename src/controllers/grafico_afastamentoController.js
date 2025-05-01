var grafico_afastamentoModel = require("../models/grafico_afastamentoModel");

function atualizar(req, res) {
    var qtd_sim = req.body.qtd_simServer;
    var qtd_nao = req.body.qtd_naoServer;

    console.log("Valores recebidos no atualizar:", qtd_sim, qtd_nao);

    grafico_afastamentoModel.atualizar(qtd_sim, qtd_nao)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro no atualizar:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function retornar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var qtd_sim = req.body.qtd_simServer;
    var qtd_nao = req.body.qtd_naoServer;
    
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        grafico_afastamentoModel.retornar(qtd_sim, qtd_nao)
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