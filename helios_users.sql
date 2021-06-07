-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 07, 2021 at 09:59 PM
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
  `Password` varchar(32) NOT NULL,
  `Gender` varchar(8) NOT NULL,
  `Date` date NOT NULL,
  `Photo` varchar(500) NOT NULL,
  `Role` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `helios_users`
--

INSERT INTO `helios_users` (`id`, `Fname`, `Lname`, `Email`, `Username`, `Password`, `Gender`, `Date`, `Photo`, `Role`) VALUES
(8, 'asd', 'asd', 'asd@asd.asd', 'asd', 'asd', 'female', '2021-05-30', '../Media/asd10.jpg', 'user'),
(9, 'asd1', 'asd1', 'asd1@asd.asd', 'asd1', 'asd', 'male', '2021-05-18', '../Media/asd110.jpg', 'user');

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
  MODIFY `id` int(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
