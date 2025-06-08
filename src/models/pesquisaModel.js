var database = require("../database/config")

function retornar_dados_afastamento() {
    var instrucaoSql = `
      select * from view_resultado_afastamento;`; 
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

  function retornar_dados_motivo() {
    var instrucaoSql = `
      select * from view_resultado_motivo;`; 
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

   function retornar_dados_emocional() {
    var instrucaoSql = `
      select * from view_resultado_emocional;`; 
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

module.exports = {
    retornar_dados_afastamento,
    retornar_dados_motivo,
    retornar_dados_emocional
};