var database = require("../database/config")

function atualizar(qtd_sim, qtd_nao) {
  var instrucaoSql = `
      UPDATE grafico_afastamento 
      SET qtd_sim = '${qtd_sim}', qtd_nao = '${qtd_nao}' 
      WHERE id = 100;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function retornar() {
    var instrucaoSql = `
      SELECT qtd_sim, qtd_nao FROM grafico_afastamento 
        WHERE id = 100;`; // Busca o último registro
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

module.exports = {
    atualizar,
    retornar
};