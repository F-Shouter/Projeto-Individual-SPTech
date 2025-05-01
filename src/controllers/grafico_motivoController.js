var grafico_motivoModel = require("../models/grafico_motivoModel");

function atualizar(req, res) {
    var bullying = req.body.bullyingServer;
    var problema_em_casa = req.body.problema_em_casaServer;
    var mau_entendido = req.body.mau_entendidoServer;
    var outro = req.body.outroServer;

    console.log("Valores recebidos no atualizar:", bullying, problema_em_casa, mau_entendido, outro);

    grafico_motivoModel.atualizar(bullying, problema_em_casa, mau_entendido, outro)
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
    var bullying = req.body.bullyingServer;
    var problema_em_casa = req.body.problema_em_casaServer;
    var mau_entendido = req.body.mau_entendidoServer;
    var outro = req.body.outroServer;
    
        // Passe os valores como parâmetro e vá para o arquivo grafico_motivoModel.js
        grafico_motivoModel.retornar(bullying, problema_em_casa, mau_entendido, outro)
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