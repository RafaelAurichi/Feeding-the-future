SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;

CREATE DATABASE IF NOT EXISTS `cadastro` DEFAULT CHARACTER SET utf8mb4;
USE `cadastro`;

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY_KEY,
  `nome` varchar(45) NOT NULL,
  `email` varchar(110) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `sexo` date NOT NULL,
  `data_nasc` varchar(50) NOT NULL,
  `cidade` varchar(45) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `endereco` varchar(45) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4;

INSERT INTO `usuarios` (`nome`, `email`, `senha`, `telefone`, `sexo`, `data_nasc`, `cidade`, `estado`, `endereco`) VALUES
('admin', 'admin@fiap', 'admin', '11111111111', 'masculino', '2023-06-01', 'São Paulo', 'São Paulo', 'rua a')