-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (arm64)
--
-- Host: appworks-mysql-1.cwsergwzdswh.us-east-1.rds.amazonaws.com    Database: mailex
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `mails`
--

DROP TABLE IF EXISTS `mails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sender_id` int DEFAULT NULL,
  `receiver_id` int DEFAULT NULL,
  `content` text,
  `status` enum('arrived','sending','draft') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'draft',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `sent_at` timestamp NULL DEFAULT NULL,
  `arrived_at` timestamp NULL DEFAULT NULL,
  `subject` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `sender_id` (`sender_id`),
  KEY `receiver_id` (`receiver_id`),
  CONSTRAINT `mails_ibfk_1` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`),
  CONSTRAINT `mails_ibfk_2` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mails`
--

LOCK TABLES `mails` WRITE;
/*!40000 ALTER TABLE `mails` DISABLE KEYS */;
/*!40000 ALTER TABLE `mails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `age` int DEFAULT NULL,
  `country_code` char(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `gender` enum('male','female','others') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `profile_content` text,
  `password` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `provider` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `country_code` (`country_code`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`country_code`) REFERENCES `countries` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'lytt925','ytli.tw@gmail.com','2023-11-30 11:39:26',NULL,NULL,NULL,NULL,'$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-11-30 11:59:30'),(5,'lyttd925','ytlis.tw@gmail.com','2023-11-30 11:40:16',NULL,NULL,NULL,NULL,'$2b$10$zTGoLsffmCGn2lYvG7bNVOzla3KP26qwhu6A7cmhxwVy1JIGGo5W.','native','2023-11-30 11:59:30'),(6,'lyttdd925','ytslis.tw@gmail.com','2023-11-30 11:41:55',NULL,NULL,NULL,NULL,'$2b$10$AESz75EOQ9nFJECg6/IMsupwJFq7v1NeRdMeJKLgMBc2KiBwYndW2','native','2023-11-30 11:59:30'),(7,'lyttsdfdd925','ytsdfsis.tw@gmail.com','2023-11-30 11:42:36',NULL,NULL,NULL,NULL,'$2b$10$c2UnU5a.SJAxr3kQnwScMuBiTUQie2bPVDASxcHo8AmecSdENqAaS','native','2023-11-30 11:59:30'),(8,'lytdtsdfdd925','ytsdfsisda.tw@gmail.com','2023-11-30 11:45:38',NULL,NULL,NULL,NULL,'$2b$10$8Xc6lBzBufpxKez9qD88fOJLEnDvqpoUotEfWKI0KIuV0bDgUNqua','native','2023-11-30 11:59:30'),(9,'lytdtsasddfdd925','ytsddfsisda.tw@gmail.com','2023-11-30 11:46:20',NULL,NULL,NULL,NULL,'$2b$10$iy3DIPSAdBwNZeit5dYnzuw1a1AOyn/uqj/oWhyzNkrG0Dzrdv8uy','native','2023-11-30 11:59:30'),(10,'lytadtsasddfdd925','ytsddfsdisda.tw@gmail.com','2023-11-30 11:51:38',NULL,NULL,NULL,NULL,'$2b$10$7TaRTjGMd.QVXi6Y/7.ztO5KbvizayfhV.eGtKZPj3VO1TFy2zsPi','native','2023-11-30 11:59:30'),(11,'lytadtsasddfddd925','ytsdsdfsdisda.tw@gmail.com','2023-11-30 11:52:11',NULL,NULL,NULL,NULL,'$2b$10$LdMMIE8Rq0khEynRGXJ.LOSKhfOVBMIQ95XfKoKJ6wVNrzSjPHTe.','native','2023-11-30 11:59:30'),(12,'ltadtasddfddd95hjhf','ytsddklkfsdisda.tw@gmail.com','2023-11-30 11:53:57',NULL,NULL,NULL,NULL,'$2b$10$bbT4tbDxUOkGBHEs9FWW3eWmCJ4pipl/pQTgeiDhyuZZBbmoo5PHa','native','2023-11-30 11:59:30'),(13,'regsdg','ytsddklkfsdsdfgisda.tw@gmail.com','2023-11-30 12:01:19',NULL,NULL,NULL,NULL,'$2b$10$U7CznI9u.fLZ6ZqKOFtRZeA43uxgcEjoUnP0FovWt9hx5QyS3naZ.','native','2023-11-30 12:01:19'),(14,'lytasdft925','ytfdsagli.tw@gmail.com','2023-12-02 11:20:09',NULL,NULL,NULL,NULL,'$2b$10$NEoV/bXq/ndZU3pcC/nVCu3qElgHe8PLE17bqKwevSXxvLbKisQxm','native','2023-12-02 11:20:09'),(15,'lytasdgadsft925','ytfdadfasagli.tw@gmail.com','2023-12-02 11:20:56',NULL,NULL,NULL,NULL,'$2b$10$dLY6.dUhDz1W1ds38.EArOSwEWgMNMV25v7yaxhDNVeEYEy/hFKcK','native','2023-12-02 11:20:56'),(16,'lagytasdgadsft925','ytfdadfasaggli.tw@gmail.com','2023-12-02 11:21:14',NULL,NULL,NULL,NULL,'$2b$10$6m2tdkgeJOdC0trBQlSuuuhj568s431/N3oL5ba1eaBIGR0JCRbta','native','2023-12-02 11:21:14'),(17,'hyw','hyw@gmail.com','2023-12-02 17:25:12',NULL,NULL,NULL,NULL,'$2b$10$CHfoq7N78DTgFDDidnrWoeTMYlsSEGhl3zzcBtvR7Nz6u3mvx.xRO','native','2023-12-02 17:25:12'),(18,'tren','tren@gmail.com','2023-12-02 17:27:06',NULL,NULL,NULL,NULL,'$2b$10$6Pjd0TbIZNA3yRCkrQugFea/iGJ4xfiYep8CZFHF2V4u6jDBuelCe','native','2023-12-02 17:27:06');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-03  2:00:19
