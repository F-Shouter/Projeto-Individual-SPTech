var jogadorModel = require("../models/jogadorModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var apelido_jogador1 = req.body.apelido_jogador1Server;
    var apelido_jogador2 = req.body.apelido_jogador2Server;
    var avatar_jogador1 = req.body.avatar_jogador1Server;
    var avatar_jogador2 = req.body.avatar_jogador2Server;

        // Passe os valores como parâmetro e vá para o arquivo jogadorModel.js
        jogadorModel.cadastrar(apelido_jogador1, apelido_jogador2, avatar_jogador1, avatar_jogador2)
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
    var avatar_jogador1 = req.body.avatar_jogador1Server;
    var avatar_jogador2 = req.body.avatar_jogador2Server;
    
        // Passe os valores como parâmetro e vá para o arquivo jogadorModel.js
        jogadorModel.retornar(apelido_jogador1, apelido_jogador2, avatar_jogador1, avatar_jogador2)
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