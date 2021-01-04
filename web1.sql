-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: web
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aspecto`
--

DROP TABLE IF EXISTS `aspecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aspecto` (
  `idaspecto` int NOT NULL AUTO_INCREMENT,
  `idempresa` int DEFAULT NULL,
  `idusuario` int DEFAULT NULL,
  `puesto` varchar(20) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date DEFAULT NULL,
  `accesibilidad` varchar(5) DEFAULT NULL,
  `ambiente_de_trabajo` varchar(5) DEFAULT NULL,
  `sueldos` varchar(5) DEFAULT NULL,
  `posibilidad_de_ascenso` varchar(5) DEFAULT NULL,
  `opinion` varchar(200) DEFAULT NULL,
  `conciliacion` varchar(20) DEFAULT NULL,
  `estabilidad` varchar(20) DEFAULT NULL,
  `validacion` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`idaspecto`),
  KEY `idempresa` (`idempresa`),
  CONSTRAINT `idempresa` FOREIGN KEY (`idempresa`) REFERENCES `empresa` (`idempresa`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aspecto`
--

LOCK TABLES `aspecto` WRITE;
/*!40000 ALTER TABLE `aspecto` DISABLE KEYS */;
INSERT INTO `aspecto` VALUES (1,3,1,'Administrador','1990-10-01',NULL,'5','5','4','3',NULL,'2','1',1),(2,2,2,'Jefe','1990-10-01','2000-03-20','1','2','3','4',NULL,'5','5',0),(3,2,3,'Ingeniero','1990-10-01',NULL,'1','5','3','4',NULL,'5','5',0),(4,3,4,'Contable','1990-10-01',NULL,'1','1','1','4',NULL,'2','5',0),(5,3,5,'Marketin','1990-10-01','2000-03-20','1','2','2','4',NULL,'3','5',0),(6,1,6,'Admin','2000-03-20',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0),(7,1,7,'Admin','2000-03-20','2002-04-20',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0),(8,1,7,'Admin','2000-03-20','2002-04-20',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0),(9,1,NULL,'Admin','2000-03-20','2002-04-20',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0),(10,1,7,'Admin','2000-03-20','2002-04-20',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0),(13,1,7,'Jefe','2000-03-20','2002-04-20',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `aspecto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresa` (
  `idempresa` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `sede` varchar(25) DEFAULT NULL,
  `bio` varchar(155) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `idusuario` int DEFAULT NULL,
  `accesibilidad` tinyint DEFAULT NULL,
  `ambiente_de_trabajo` tinyint DEFAULT NULL,
  `sueldos` tinyint DEFAULT NULL,
  `posibilidad_de_ascenso` tinyint DEFAULT NULL,
  `opinion` varchar(200) DEFAULT NULL,
  `conciliacion` tinyint DEFAULT NULL,
  `estabilidad` tinyint DEFAULT NULL,
  PRIMARY KEY (`idempresa`),
  KEY `idusuario` (`idusuario`),
  CONSTRAINT `idusuario` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (1,'BRK','Coruña',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'Zara','Vigo',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'Strad','Lugo',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `clave` varchar(255) NOT NULL,
  `nombre` varchar(25) DEFAULT NULL,
  `pais` varchar(50) DEFAULT NULL,
  `ciudad` varchar(10) DEFAULT NULL,
  `bio` varchar(55) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `empresa` tinyint DEFAULT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'gus@email.com','12345','Gus',NULL,NULL,NULL,NULL,NULL),(2,'jose@email.com','12345','Jose','PR',NULL,NULL,NULL,NULL),(3,'pepe@email.com','12345','Pepe','ES',NULL,NULL,NULL,NULL),(4,'email@email.com','12345','Email','EN',NULL,NULL,NULL,NULL),(5,'ana@email.com','12345','Ana','RU',NULL,NULL,NULL,NULL),(7,'jos@email.com','$2a$10$c54xL6tNVghanOxnVMunT.5OL9SP6EJVzjaATtTTe7fVTBqz8GV/a','Jos',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-04 17:44:14
