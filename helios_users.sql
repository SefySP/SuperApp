-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2021 at 08:45 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `helios_users`
--

-- --------------------------------------------------------

--
-- Table structure for table `helios_users`
--

CREATE TABLE `helios_users` (
  `id` int(255) UNSIGNED NOT NULL,
  `Fname` varchar(32) NOT NULL,
  `Lname` varchar(32) NOT NULL,
  `Email` varchar(256) NOT NULL,
  `Username` varchar(32) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Gender` varchar(8) NOT NULL,
  `Date` date NOT NULL,
  `Photo` varchar(500) NOT NULL,
  `Role` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `helios_users`
--

INSERT INTO `helios_users` (`id`, `Fname`, `Lname`, `Email`, `Username`, `Password`, `Gender`, `Date`, `Photo`, `Role`) VALUES
(15, '11', '11', 'f11@gmail.com', '11', '$2y$10$SqqVYFP84e0vEIDGqxkLKudlVa/QuIbmoRZAfIEt32vDobfGgIy.e', 'female', '2021-06-15', '../Media/11224441.jpg', 'user'),
(18, 'mod', 'mod', 'mod@gmail.com', 'mod', '$2y$10$bIS1O9eiHlr0jnk6QaXmLencvr1JqkRbkciF.lCcwavkbpQoQgjWO', 'other', '2000-08-04', '../Media/modIMG_20190825_010248.jpg', 'mod'),
(19, 'admin', 'admin', 'admin@gmail.com', 'admin', '$2y$10$SSL6kwgOKmkYoD.0vzsJouzQd8HdX14CLclqthLiP9ApTXzopanlO', 'other', '1999-11-09', '../Media/admin10.jpg', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `helios_users`
--
ALTER TABLE `helios_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `Username` (`Username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `helios_users`
--
ALTER TABLE `helios_users`
  MODIFY `id` int(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
