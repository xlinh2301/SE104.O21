-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: qlcgp
-- ------------------------------------------------------
-- Server version	8.4.0

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
-- Table structure for table `baocaotanggiam`
--

DROP TABLE IF EXISTS `baocaotanggiam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `baocaotanggiam` (
  `MaBaoCaoTangGiam` char(255) NOT NULL,
  `Nam` smallint DEFAULT NULL,
  `SoLuongSinh` tinyint DEFAULT NULL,
  `SoLuongKetHon` tinyint DEFAULT NULL,
  `SoLuongMat` tinyint DEFAULT NULL,
  PRIMARY KEY (`MaBaoCaoTangGiam`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `baocaotanggiam`
--

LOCK TABLES `baocaotanggiam` WRITE;
/*!40000 ALTER TABLE `baocaotanggiam` DISABLE KEYS */;
/*!40000 ALTER TABLE `baocaotanggiam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `baocaothanhtich`
--

DROP TABLE IF EXISTS `baocaothanhtich`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `baocaothanhtich` (
  `MaBaoCaoThanhTich` char(255) NOT NULL,
  `Nam` smallint DEFAULT NULL,
  `MaLoaiThanhTich` char(255) DEFAULT NULL,
  `SoLuongThanhTich` tinyint DEFAULT NULL,
  PRIMARY KEY (`MaBaoCaoThanhTich`),
  KEY `fk_BaoCaoThanhTich_LoaiThanhTich` (`MaLoaiThanhTich`),
  CONSTRAINT `fk_BaoCaoThanhTich_LoaiThanhTich` FOREIGN KEY (`MaLoaiThanhTich`) REFERENCES `loaithanhtich` (`MaLoaiThanhTich`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `baocaothanhtich`
--

LOCK TABLES `baocaothanhtich` WRITE;
/*!40000 ALTER TABLE `baocaothanhtich` DISABLE KEYS */;
/*!40000 ALTER TABLE `baocaothanhtich` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diadiemmaitang`
--

DROP TABLE IF EXISTS `diadiemmaitang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diadiemmaitang` (
  `MaDiaDiemMaiTang` char(255) NOT NULL,
  `TenDiaDiemMaiTang` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`MaDiaDiemMaiTang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diadiemmaitang`
--

LOCK TABLES `diadiemmaitang` WRITE;
/*!40000 ALTER TABLE `diadiemmaitang` DISABLE KEYS */;
/*!40000 ALTER TABLE `diadiemmaitang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ketthuc`
--

DROP TABLE IF EXISTS `ketthuc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ketthuc` (
  `MaKetThuc` char(255) NOT NULL,
  `HoVaTen` varchar(255) DEFAULT NULL,
  `NgayGioMat` datetime DEFAULT NULL,
  `MaNguyenNhan` char(255) DEFAULT NULL,
  `MaDiaDiemMaiTang` char(255) DEFAULT NULL,
  PRIMARY KEY (`MaKetThuc`),
  KEY `fk_KetThuc_NguyenNhan` (`MaNguyenNhan`),
  KEY `fk_KetThuc_DiaDiemMaiTang` (`MaDiaDiemMaiTang`),
  CONSTRAINT `fk_KetThuc_DiaDiemMaiTang` FOREIGN KEY (`MaDiaDiemMaiTang`) REFERENCES `diadiemmaitang` (`MaDiaDiemMaiTang`),
  CONSTRAINT `fk_KetThuc_NguyenNhan` FOREIGN KEY (`MaNguyenNhan`) REFERENCES `nguyennhan` (`MaNguyenNhan`),
  CONSTRAINT `fk_maketthuc` FOREIGN KEY (`MaKetThuc`) REFERENCES `thanhvien` (`MaThanhVien`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ketthuc`
--

LOCK TABLES `ketthuc` WRITE;
/*!40000 ALTER TABLE `ketthuc` DISABLE KEYS */;
/*!40000 ALTER TABLE `ketthuc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loaithanhtich`
--

DROP TABLE IF EXISTS `loaithanhtich`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loaithanhtich` (
  `MaLoaiThanhTich` char(255) NOT NULL,
  `TenLoaiThanhTich` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`MaLoaiThanhTich`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaithanhtich`
--

LOCK TABLES `loaithanhtich` WRITE;
/*!40000 ALTER TABLE `loaithanhtich` DISABLE KEYS */;
/*!40000 ALTER TABLE `loaithanhtich` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nghenghiep`
--

DROP TABLE IF EXISTS `nghenghiep`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nghenghiep` (
  `MaNgheNghiep` char(255) NOT NULL,
  `TenNgheNghiep` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`MaNgheNghiep`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nghenghiep`
--

LOCK TABLES `nghenghiep` WRITE;
/*!40000 ALTER TABLE `nghenghiep` DISABLE KEYS */;
/*!40000 ALTER TABLE `nghenghiep` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nguyennhan`
--

DROP TABLE IF EXISTS `nguyennhan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nguyennhan` (
  `MaNguyenNhan` char(255) NOT NULL,
  `TenNguyenNhan` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`MaNguyenNhan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguyennhan`
--

LOCK TABLES `nguyennhan` WRITE;
/*!40000 ALTER TABLE `nguyennhan` DISABLE KEYS */;
/*!40000 ALTER TABLE `nguyennhan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quanhe`
--

DROP TABLE IF EXISTS `quanhe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quanhe` (
  `MaLoaiQuanHe` char(255) NOT NULL,
  `TenLoaiQuanHe` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`MaLoaiQuanHe`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quanhe`
--

LOCK TABLES `quanhe` WRITE;
/*!40000 ALTER TABLE `quanhe` DISABLE KEYS */;
/*!40000 ALTER TABLE `quanhe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quequan`
--

DROP TABLE IF EXISTS `quequan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quequan` (
  `MaQueQuan` char(255) NOT NULL,
  `TenQueQuan` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`MaQueQuan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quequan`
--

LOCK TABLES `quequan` WRITE;
/*!40000 ALTER TABLE `quequan` DISABLE KEYS */;
/*!40000 ALTER TABLE `quequan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thanhtich`
--

DROP TABLE IF EXISTS `thanhtich`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thanhtich` (
  `MaThanhTich` char(255) NOT NULL,
  `HoVaTen` varchar(255) DEFAULT NULL,
  `MaLoaiThanhTich` char(255) DEFAULT NULL,
  `NgayPhatSinh` date DEFAULT NULL,
  PRIMARY KEY (`MaThanhTich`),
  KEY `fk_ThanhTich_LoaiThanhTich` (`MaLoaiThanhTich`),
  CONSTRAINT `fk_mathanhtich` FOREIGN KEY (`MaThanhTich`) REFERENCES `thanhvien` (`MaThanhVien`),
  CONSTRAINT `fk_ThanhTich_LoaiThanhTich` FOREIGN KEY (`MaLoaiThanhTich`) REFERENCES `loaithanhtich` (`MaLoaiThanhTich`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thanhtich`
--

LOCK TABLES `thanhtich` WRITE;
/*!40000 ALTER TABLE `thanhtich` DISABLE KEYS */;
/*!40000 ALTER TABLE `thanhtich` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thanhvien`
--

DROP TABLE IF EXISTS `thanhvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thanhvien` (
  `MaThanhVien` char(255) NOT NULL,
  `HoVaTen` varchar(255) DEFAULT NULL,
  `GioiTinh` varchar(255) DEFAULT NULL,
  `NgayGioSinh` datetime DEFAULT NULL,
  `MaQueQuan` varchar(255) DEFAULT NULL,
  `MaNgheNghiep` varchar(255) DEFAULT NULL,
  `DiaChi` varchar(255) DEFAULT NULL,
  `MaThanhVienCu` char(255) DEFAULT NULL,
  `MaLoaiQuanHe` char(255) DEFAULT NULL,
  `NgayPhatSinh` date DEFAULT NULL,
  PRIMARY KEY (`MaThanhVien`),
  KEY `fk_ThanhVien_QueQuan` (`MaQueQuan`),
  KEY `fk_ThanhVien_NgheNghiep` (`MaNgheNghiep`),
  KEY `fk_ThanhVien_QuanHe` (`MaLoaiQuanHe`),
  CONSTRAINT `fk_ThanhVien_NgheNghiep` FOREIGN KEY (`MaNgheNghiep`) REFERENCES `nghenghiep` (`MaNgheNghiep`),
  CONSTRAINT `fk_ThanhVien_QuanHe` FOREIGN KEY (`MaLoaiQuanHe`) REFERENCES `quanhe` (`MaLoaiQuanHe`),
  CONSTRAINT `fk_ThanhVien_QueQuan` FOREIGN KEY (`MaQueQuan`) REFERENCES `quequan` (`MaQueQuan`),
  CONSTRAINT `thanhvien_chk_1` CHECK ((`HoVaTen` in (_utf8mb4'Nam',_utf8mb4'Nữ',_utf8mb4'Khác')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thanhvien`
--

LOCK TABLES `thanhvien` WRITE;
/*!40000 ALTER TABLE `thanhvien` DISABLE KEYS */;
/*!40000 ALTER TABLE `thanhvien` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-18 23:17:06
