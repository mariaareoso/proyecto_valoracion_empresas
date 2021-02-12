-- MySQL dump 10.13  Distrib 8.0.21, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: Sharp_view
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
  `puesto` varchar(20) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date DEFAULT NULL,
  `accesibilidad` int DEFAULT NULL,
  `ambiente_de_trabajo` int DEFAULT NULL,
  `sueldos` int DEFAULT NULL,
  `posibilidad_de_ascenso` int DEFAULT NULL,
  `opinion` varchar(200) DEFAULT NULL,
  `conciliacion` int DEFAULT NULL,
  `estabilidad` int DEFAULT NULL,
  `validacion` tinyint NOT NULL DEFAULT '0',
  `idusuario` int NOT NULL,
  `idempresa` int NOT NULL,
  PRIMARY KEY (`idaspecto`,`idusuario`,`idempresa`),
  KEY `fk_aspecto_usuario1_idx` (`idusuario`),
  KEY `fk_aspecto_empresa1_idx` (`idempresa`),
  CONSTRAINT `fk_aspecto_usuario1` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aspecto`
--

LOCK TABLES `aspecto` WRITE;
/*!40000 ALTER TABLE `aspecto` DISABLE KEYS */;
INSERT INTO `aspecto` VALUES (1,'Contable','2000-03-20',NULL,2,3,2,3,'Lorem ipsum',2,4,1,1,1),(2,'RRHH','1992-03-24','2010-10-24',3,3,3,2,'Lorem ipsum',2,5,1,2,1),(3,'Administrativo','1997-10-20',NULL,3,3,3,5,'Lorem ipsum',3,5,1,3,2),(4,'Ingeniero','2015-03-12','2010-10-24',1,2,1,2,'Lorem ipsum',1,2,1,4,3),(5,'Informático','2020-03-20',NULL,1,3,3,2,'Lorem ipsum',2,5,1,13,5);
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
  `nombre_empresa` varchar(45) DEFAULT NULL,
  `sede` varchar(25) DEFAULT NULL,
  `bio` varchar(500) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `web` varchar(60) DEFAULT NULL,
  `idusuario` int NOT NULL,
  PRIMARY KEY (`idempresa`,`idusuario`),
  KEY `fk_empresa_usuario1_idx` (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (1,'Softtek','Coruña','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a suscipit enim, sed vehicula augue. Donec vitae dui a elit viverra aliquam. Sed gravida est vel semper pellentesque. Nam ultricies urna sit amet diam dictum condimentum. Suspendisse magna dolor, feugiat id turpis in, finibus molestie ante. Cras consequat, sem ut aliquam placerat.','link','https://www.softtek.com/es/',5),(2,'Everis','Madrid','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a suscipit enim, sed vehicula augue. Donec vitae dui a elit viverra aliquam. Sed gravida est vel semper pellentesque. Nam ultricies urna sit amet diam dictum condimentum. Suspendisse magna dolor, feugiat id turpis in, finibus molestie ante. Cras consequat, sem ut aliquam placerat.','link','https://www.everis.com/spain/es/home-spain',6),(3,'Glue','Vigo','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a suscipit enim, sed vehicula augue. Donec vitae dui a elit viverra aliquam. Sed gravida est vel semper pellentesque. Nam ultricies urna sit amet diam dictum condimentum. Suspendisse magna dolor, feugiat id turpis in, finibus molestie ante. Cras consequat, sem ut aliquam placerat.','link','http://glue.digital',7),(4,'Amazon','Seattle','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a suscipit enim, sed vehicula augue. Donec vitae dui a elit viverra aliquam. Sed gravida est vel semper pellentesque. Nam ultricies urna sit amet diam dictum condimentum. Suspendisse magna dolor, feugiat id turpis in, finibus molestie ante. Cras consequat, sem ut aliquam placerat.','link','https://www.amazon.es',8),(5,'Tecalis','Milladoiro (Ames)','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a suscipit enim, sed vehicula augue. Donec vitae dui a elit viverra aliquam. Sed gravida est vel semper pellentesque. Nam ultricies urna sit amet diam dictum condimentum. Suspendisse magna dolor, feugiat id turpis in, finibus molestie ante. Cras consequat, sem ut aliquam placerat.','link','https://www.tecalis.com/es',9),(6,'Evelb','Milladoiro (Ames)','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a suscipit enim, sed vehicula augue. Donec vitae dui a elit viverra aliquam. Sed gravida est vel semper pellentesque. Nam ultricies urna sit amet diam dictum condimentum. Suspendisse magna dolor, feugiat id turpis in, finibus molestie ante. Cras consequat, sem ut aliquam placerat.','link','https://evelb.es',10),(7,'Dinahosting','Santiago de Compostela','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a suscipit enim, sed vehicula augue. Donec vitae dui a elit viverra aliquam. Sed gravida est vel semper pellentesque. Nam ultricies urna sit amet diam dictum condimentum. Suspendisse magna dolor, feugiat id turpis in, finibus molestie ante. Cras consequat, sem ut aliquam placerat.','link','https://dinahosting.com',11),(8,'Hack a book','Ourense','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a suscipit enim, sed vehicula augue. Donec vitae dui a elit viverra aliquam. Sed gravida est vel semper pellentesque. Nam ultricies urna sit amet diam dictum condimentum. Suspendisse magna dolor, feugiat id turpis in, finibus molestie ante. Cras consequat, sem ut aliquam placerat.','link','https://hackaboss.com',14);
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
  `nombre_empresa` tinyint DEFAULT NULL,
  `empresa` tinyint DEFAULT '0',
  `empleado` tinyint DEFAULT '0',
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Jose@mail.com','$2a$10$vG42FksPlchXYCa5nytV0uPJvRnHUtsvHrk9fFurNxu6rELwdOglu','Jose','FR','Niza',NULL,NULL,NULL,0,1),(2,'Ana@mail.com','$2a$10$6BU5b9tT.SXeqAwoC9aZ/uXuPSKwq8PqGY/yVK3Qh7so1BcZdXqhW','Ana','PT','Lisboa',NULL,NULL,NULL,0,1),(3,'Paco@mail.com','$2a$10$9ohpKJrxqV839zSqGyXPDOo8x8dJDCPahU.nm6aCdFtiaClywGy1S','Paco','ES','Lugo',NULL,NULL,NULL,0,1),(4,'Lucia@mail.com','$2a$10$AUcMi0vM3z2Y1/FA273hOOHK3t2qePT41QbtXaU0MkI3Km0Wt/Iyi','Lucia','ES','Coruña',NULL,NULL,NULL,0,1),(5,'Jaquin@email.com','$2a$10$YGPa1m3LeTmYNcMoZ9laHOptFujBc4kRiVy/sdAq1vYFx35adz5k6','Joaquin','ES','Coruña',NULL,NULL,NULL,1,1),(6,'Everis@mail.com','$2a$10$fDfLs/P4ZinYd/3FIUH7k.u1OYBlEcoXxM8WwAiSSZU.dALQVfhkW',NULL,NULL,NULL,NULL,NULL,NULL,1,1),(7,'Glue@mail.com','$2a$10$y3qKnjskkZqzlVcM/hC/a..AwSDr4vAFOSjEu1MTjNg07c707Mksi',NULL,NULL,NULL,NULL,NULL,NULL,1,1),(8,'Amazon@mail.com','$2a$10$0/7XIHlv9cdekV3pz9s/6O0l8LzrHMEEd1dMlmOMtNDNiM8esawcO',NULL,NULL,NULL,NULL,NULL,NULL,1,0),(9,'Tecalis@mail.com','$2a$10$.J/ry61G/DrXTIESRFDFKuFHD/cxClG.Bcmv2Cq0Napydj4fMA4gK',NULL,NULL,NULL,NULL,NULL,NULL,1,0),(10,'Evelb@mail.com','$2a$10$.AcdwbsZEuKzR5lRA7ydEuAtAFC7MsKccLRj3dzfiR8lLdZCmzWEq',NULL,NULL,NULL,NULL,NULL,NULL,1,0),(11,'Dinahosting@mail.com','$2a$10$wGTL2rvXd/WuGwYWqAbBcuXTdhdV5kEdTAF3sQI4LqDNhFyMN.vWK',NULL,NULL,NULL,NULL,NULL,NULL,1,0),(13,'Jaquin@email.com','$2a$10$U6LpQUx98YICtFS0mRdU2usxa7Fey3alrx0nhsdWx2niA2jTCBRty','Joaquin','ES','Coruña',NULL,NULL,NULL,0,1),(14,'HackaBook@mail.com','$2a$10$HUeu8ZO32LvF2RPxK45QTeHUgR/jdJsHNv3VGGYdkl6GfFrtmHdnq',NULL,NULL,NULL,NULL,NULL,NULL,1,0);
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

-- Dump completed on 2021-02-12 17:32:36
