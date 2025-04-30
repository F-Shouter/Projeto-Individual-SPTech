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
	apelido_jogador2 VARCHAR(20)
);