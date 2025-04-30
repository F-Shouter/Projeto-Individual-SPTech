var usuarioModel = require("../models/usuarioModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var apelido_jogador1 = req.body.apelido_jogador1Server;
    var apelido_jogador2 = req.body.apelido_jogador2Server;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(apelido_jogador1, apelido_jogador2)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

function retornar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var apelido_jogador1 = req.body.apelido_jogador1Server;
    var apelido_jogador2 = req.body.apelido_jogador2Server;
    
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.retornar(apelido_jogador1, apelido_jogador2)
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
    cadastrar,
    retornar
}