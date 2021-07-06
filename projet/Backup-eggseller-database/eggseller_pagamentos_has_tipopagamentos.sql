-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: eggseller
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `pagamentos_has_tipopagamentos`
--

DROP TABLE IF EXISTS `pagamentos_has_tipopagamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pagamentos_has_tipopagamentos` (
  `pagamentos_id` int NOT NULL,
  `tipoPagamentos_id` int NOT NULL,
  PRIMARY KEY (`pagamentos_id`,`tipoPagamentos_id`),
  KEY `fk_pagamentos_has_tipoPagamentos_tipoPagamentos1_idx` (`tipoPagamentos_id`),
  KEY `fk_pagamentos_has_tipoPagamentos_pagamentos1_idx` (`pagamentos_id`),
  CONSTRAINT `fk_pagamentos_has_tipoPagamentos_pagamentos1` FOREIGN KEY (`pagamentos_id`) REFERENCES `pagamentos` (`id`),
  CONSTRAINT `fk_pagamentos_has_tipoPagamentos_tipoPagamentos1` FOREIGN KEY (`tipoPagamentos_id`) REFERENCES `tipopagamentos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagamentos_has_tipopagamentos`
--

LOCK TABLES `pagamentos_has_tipopagamentos` WRITE;
/*!40000 ALTER TABLE `pagamentos_has_tipopagamentos` DISABLE KEYS */;
INSERT INTO `pagamentos_has_tipopagamentos` VALUES (1,1),(2,2);
/*!40000 ALTER TABLE `pagamentos_has_tipopagamentos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-06  9:09:11
