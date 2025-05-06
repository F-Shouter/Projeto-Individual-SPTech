-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE draw_With_Me;

USE draw_With_Me;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	apelido_jogador1 VARCHAR(20),
	apelido_jogador2 VARCHAR(20),
	avatar_jogador1 VARCHAR(45),
	avatar_jogador2 VARCHAR(45)
) AUTO_INCREMENT = 1;

CREATE TABLE grafico_afastamento (
	id INT PRIMARY KEY AUTO_INCREMENT,
	qtd_sim int,
	qtd_nao int	
) AUTO_INCREMENT = 100;

CREATE TABLE grafico_motivo (
	id INT PRIMARY KEY AUTO_INCREMENT,
    bullying int,
    problema_em_casa int,
    mau_entendido int,
    outro int	
) AUTO_INCREMENT = 200;

CREATE TABLE grafico_emocional (
	id INT PRIMARY KEY AUTO_INCREMENT,
    qtd_concordam int,
    qtd_discordam int		
) AUTO_INCREMENT = 300;