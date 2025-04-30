var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(apelido_jogador1, apelido_jogador2) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", apelido_jogador1, apelido_jogador2);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (apelido_jogador1, apelido_jogador2) VALUES ('${apelido_jogador1}','${apelido_jogador2}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function retornar() {
    var instrucaoSql = `
      SELECT apelido_jogador1, apelido_jogador2 FROM usuario 
      ORDER BY id DESC LIMIT 1;`; // Busca o último registro
    return database.executar(instrucaoSql);
  }

module.exports = {
    cadastrar,
    retornar
};