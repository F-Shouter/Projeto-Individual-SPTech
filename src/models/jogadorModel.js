var database = require("../database/config")

async function cadastrar(apelido_jogador1, apelido_jogador2, avatar_jogador1, avatar_jogador2) {

    var sql1 = `INSERT INTO Jogador (apelido, avatar) VALUES ('${apelido_jogador1}', '${avatar_jogador1}');`;
    var result1 = await database.executar(sql1);
    var id1 = result1.insertId;
    console.log('\x1b[32m%s\x1b[0m', "Executando a instrução SQL: \n" + sql1);

    var sql2 = `INSERT INTO Jogador (apelido, avatar) VALUES ('${apelido_jogador2}', '${avatar_jogador2}');`;
    var result2 = await database.executar(sql2);
    var id2 = result2.insertId;
    console.log('\x1b[32m%s\x1b[0m', sql2);

    var sql3 = `UPDATE Jogador SET fkParceiro = ${id2} WHERE idJogador = ${id1};`;
    var sql4 = `UPDATE Jogador SET fkParceiro = ${id1} WHERE idJogador = ${id2};`;
    console.log('\x1b[36m%s\x1b[0m', "\n\nExecutando a instrução SQL: \n" + sql3);
    console.log('\x1b[36m%s\x1b[0m', sql4);
    await database.executar(sql3);
    await database.executar(sql4);

    return { id1, id2 };
}

module.exports = {
    cadastrar
};