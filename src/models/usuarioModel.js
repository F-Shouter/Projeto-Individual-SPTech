var database = require("../database/config")

function cadastrar(apelido_jogador1, apelido_jogador2, avatar_jogador1, avatar_jogador2) {
    var instrucaoSql = `
        INSERT INTO usuario (apelido_jogador1, apelido_jogador2, avatar_jogador1, avatar_jogador2)
        VALUES ('${apelido_jogador1}','${apelido_jogador2}', '${avatar_jogador1}', '${avatar_jogador2}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function retornar() {
    var instrucaoSql = `
      SELECT apelido_jogador1, apelido_jogador2, avatar_jogador1, avatar_jogador2 FROM usuario 
        ORDER BY id DESC LIMIT 1;`; // Busca o último registro
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

module.exports = {
    cadastrar,
    retornar
};