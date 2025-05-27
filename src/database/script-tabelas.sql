CREATE DATABASE Draw;
USE Draw;

CREATE TABLE Jogador(
	idJogador INT PRIMARY KEY AUTO_INCREMENT,
    apelido VARCHAR(12),
    avatar VARCHAR(45),
    fkParceiro INT,
    FOREIGN KEY (fkParceiro) REFERENCES Jogador(idJogador)
) AUTO_INCREMENT = 100;

CREATE TABLE Pesquisa(
	idPesquisa INT PRIMARY KEY AUTO_INCREMENT,
    tema VARCHAR(45)
);

CREATE TABLE Resposta (
    idResposta INT AUTO_INCREMENT,
    data DATE DEFAULT (CURRENT_DATE),
    opcao VARCHAR(45) CHECK (
        opcao IN ('sim', 'não', 'problema_casa', 'bullying', 'mau_entendido', 'outro')),
    fkPesquisa INT,
    fkJogador INT,
	PRIMARY KEY (idResposta, fkPesquisa, fkJogador),
    FOREIGN KEY (fkPesquisa) REFERENCES Pesquisa(idPesquisa),
    FOREIGN KEY (fkJogador) REFERENCES Jogador(idJogador)
) AUTO_INCREMENT = 1000;

INSERT INTO Pesquisa VALUES 
	(DEFAULT, "Isolamento durante Infância"),
    (DEFAULT, "Motivo de Afastamento"),
    (DEFAULT, "Prejuízo Emocional");
    
INSERT INTO Jogador VALUES
	(DEFAULT, "ADMIN", NULL, NULL);
    
-- ------------------- ATUALIZAÇÃO NO BANCO COM OS DADOS OBTIDOS DAS PESQUISAS -------------------------    
-- 42 respostas "sim" para idPesquisa = 1
INSERT INTO Resposta (opcao, fkPesquisa, fkJogador) VALUES
('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100),
('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100),
('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100),
('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100),
('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100),
('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100),
('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100),
('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100), ('sim', 1, 100),
('sim', 1, 100), ('sim', 1, 100);

-- 8 respostas "não" para idPesquisa = 1
INSERT INTO Resposta (opcao, fkPesquisa, fkJogador) VALUES
('não', 1, 100), ('não', 1, 100), ('não', 1, 100), ('não', 1, 100),
('não', 1, 100), ('não', 1, 100), ('não', 1, 100), ('não', 1, 100);

-- 15 respostas "bullying" para idPesquisa = 2
INSERT INTO Resposta (opcao, fkPesquisa, fkJogador) VALUES
('bullying', 2, 100), ('bullying', 2, 100), ('bullying', 2, 100), ('bullying', 2, 100), ('bullying', 2, 100),
('bullying', 2, 100), ('bullying', 2, 100), ('bullying', 2, 100), ('bullying', 2, 100), ('bullying', 2, 100),
('bullying', 2, 100), ('bullying', 2, 100), ('bullying', 2, 100), ('bullying', 2, 100), ('bullying', 2, 100);

-- 10 respostas "outro" para idPesquisa = 2
INSERT INTO Resposta (opcao, fkPesquisa, fkJogador) VALUES
('outro', 2, 100), ('outro', 2, 100), ('outro', 2, 100), ('outro', 2, 100), ('outro', 2, 100),
('outro', 2, 100), ('outro', 2, 100), ('outro', 2, 100), ('outro', 2, 100), ('outro', 2, 100);

-- 10 respostas "mau_entendido" para idPesquisa = 2
INSERT INTO Resposta (opcao, fkPesquisa, fkJogador) VALUES
('mau_entendido', 2, 100), ('mau_entendido', 2, 100), ('mau_entendido', 2, 100), ('mau_entendido', 2, 100), ('mau_entendido', 2, 100),
('mau_entendido', 2, 100), ('mau_entendido', 2, 100), ('mau_entendido', 2, 100), ('mau_entendido', 2, 100), ('mau_entendido', 2, 100);

-- 7 respostas "problema_casa" para idPesquisa = 2
INSERT INTO Resposta (opcao, fkPesquisa, fkJogador) VALUES
('problema_casa', 2, 100), ('problema_casa', 2, 100), ('problema_casa', 2, 100), ('problema_casa', 2, 100),
('problema_casa', 2, 100), ('problema_casa', 2, 100), ('problema_casa', 2, 100);

-- 39 respostas "sim" para idPesquisa = 3
INSERT INTO Resposta (opcao, fkPesquisa, fkJogador) VALUES
('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100),
('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100),
('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100),
('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100),
('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100),
('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100),
('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100),
('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100), ('sim', 3, 100);

-- 4 respostas "não" para idPesquisa = 3
INSERT INTO Resposta (opcao, fkPesquisa, fkJogador) VALUES
('não', 3, 100), ('não', 3, 100), ('não', 3, 100), ('não', 3, 100);

-- ---------------------------- CRIAÇÃO DAS VIEWS ------------------------------------------
CREATE VIEW view_resultado_afastamento AS
SELECT 
    SUM(CASE WHEN r.opcao = 'sim' THEN 1 ELSE 0 END) AS qtd_sim,
    SUM(CASE WHEN r.opcao = 'não' THEN 1 ELSE 0 END) AS qtd_nao
FROM Resposta AS r
JOIN Pesquisa AS p ON r.fkPesquisa = p.idPesquisa
WHERE r.fkPesquisa = 1;

CREATE VIEW view_resultado_motivo AS
SELECT 
    SUM(CASE WHEN r.opcao = 'bullying' THEN 1 ELSE 0 END) AS bullying,
    SUM(CASE WHEN r.opcao = 'problema_casa' THEN 1 ELSE 0 END) AS problema_casa,    
    SUM(CASE WHEN r.opcao = 'mau_entendido' THEN 1 ELSE 0 END) AS mau_entendido,
    SUM(CASE WHEN r.opcao = 'outro' THEN 1 ELSE 0 END) AS outro
FROM Resposta AS r
JOIN Pesquisa AS p ON r.fkPesquisa = p.idPesquisa
WHERE r.fkPesquisa = 2;

CREATE VIEW view_resultado_emocional AS
SELECT 
    SUM(CASE WHEN r.opcao = 'sim' THEN 1 ELSE 0 END) AS concordam,
    SUM(CASE WHEN r.opcao = 'não' THEN 1 ELSE 0 END) AS discordam
FROM Resposta AS r
JOIN Pesquisa AS p ON r.fkPesquisa = p.idPesquisa
WHERE r.fkPesquisa = 3;