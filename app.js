var ambiente_processo = 'desenvolvimento'; 
// var caminho_env = '.env.dev'; 

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var usuarioRouter = require("./src/routes/usuarios");
var grafico_afastamentoRouter = require("./src/routes/grafico_afastamento");
var grafico_motivoRouter = require("./src/routes/grafico_motivo");
var grafico_emocionalRouter = require("./src/routes/grafico_emocional");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/usuarios", usuarioRouter);
app.use("/grafico_afastamento", grafico_afastamentoRouter);
app.use("/grafico_motivo", grafico_motivoRouter);
app.use("/grafico_emocional", grafico_emocionalRouter);

app.listen(PORTA_APP, function () {
    console.log(`
    ##   ##  ######   #####             ####       ##     ######     ##              ##  ##    ####    ######  
    ##   ##  ##       ##  ##            ## ##     ####      ##      ####             ##  ##     ##         ##  
    ##   ##  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##        ##   
    ## # ##  ####     #####    ######   ##  ##   ######     ##     ######   ######   ##  ##     ##       ##    
    #######  ##       ##  ##            ##  ##   ##  ##     ##     ##  ##            ##  ##     ##      ##     
    ### ###  ##       ##  ##            ## ##    ##  ##     ##     ##  ##             ####      ##     ##      
    ##   ##  ######   #####             ####     ##  ##     ##     ##  ##              ##      ####    ######  
    \n\n\n        
    Você está rodando sua aplicação! Conectado ao banco de dados!\n                                                                                         
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar:\n\n
    \t\t\thttp://${HOST_APP}:${PORTA_APP} \n\n
    `);
});
