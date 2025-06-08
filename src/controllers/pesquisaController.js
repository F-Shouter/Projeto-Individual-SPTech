var pesquisaModel = require("../models/pesquisaModel");

function retornar_dados_afastamento(req, res) {
    var qtd_sim = req.body.qtd_simServer;
    var qtd_nao = req.body.qtd_naoServer;
        pesquisaModel.retornar_dados_afastamento(qtd_sim, qtd_nao)
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

    function retornar_dados_motivo(req, res) {
    var bullying = req.body.bullyingServer;
    var problema_casa = req.body.problema_casaServer;
    var mau_entendido = req.body.mau_entendidoServer;
    var outro = req.body.outroServer;
    
        grafico_motivoModel.retornar(bullying, problema_casa, mau_entendido, outro)
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

     function retornar_dados_emocional(req, res) {
    var concordam = req.body.concordamServer;
    var discordam = req.body.discordamServer;
    
        grafico_emocionalModel.retornar(concordam, discordam)
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
    retornar_dados_afastamento,
    retornar_dados_motivo,
    retornar_dados_emocional
}