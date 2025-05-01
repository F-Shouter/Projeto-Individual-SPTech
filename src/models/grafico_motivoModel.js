var database = require("../database/config")

function atualizar(bullying, problema_em_casa, mau_entendido, outro ) {
  var instrucaoSql = `
      UPDATE grafico_motivo 
      SET bullying = '${bullying}', problema_em_casa = '${problema_em_casa}', mau_entendido = '${mau_entendido}, outro = '${outro}'
      WHERE id = 200;
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function retornar() {
    var instrucaoSql = `
      SELECT bullying, problema_em_casa, mau_entendido, outro FROM grafico_motivo 
      WHERE id = 200;`; 
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

module.exports = {
    atualizar,
    retornar
};