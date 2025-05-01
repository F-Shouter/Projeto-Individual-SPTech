var database = require("../database/config")

function atualizar(qtd_concordam, qtd_discordam) {
  var instrucaoSql = `
      UPDATE grafico_emocional
      SET qtd_concordam = '${qtd_concordam}', qtd_discordam = '${qtd_discordam}'
      WHERE id = 300;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function retornar() {
    var instrucaoSql = `
      SELECT qtd_concordam, qtd_discordam FROM grafico_emocional
      WHERE id = 300;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

module.exports = {
    atualizar,
    retornar
};