var database = require("../database/config")

async function cadastrarRespostas(respostas) {
    for (let r of respostas) {
        let sql = `INSERT INTO Resposta (opcao, fkPesquisa, fkJogador) VALUES ('${r.opcao}', ${r.fkPesquisa}, 100) ;`;
        await database.executar(sql);
        console.log("Executando a instrução SQL: \n" + sql);
    }
    return { ok: true };
}

module.exports = {
    cadastrarRespostas
};