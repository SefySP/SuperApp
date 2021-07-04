-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2021 at 03:17 AM
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
(0, '11', '11', 'f11@gmail.com', '11', '$2y$10$LIN0TWx66rn/3ncFmhuRDuvkG44xLNBDwmLvskPMfVZAqt3vdHrk2', 'female', '2021-06-15', '../UserPhoto/11.png', 'user'),
(1, 'mod', 'mod', 'mod1@gmail.com', 'mod', '$2y$10$ZLmUUG1mu8vRDACoETtAfe4PcaQ0X9jvfnyRdNur9IhScrVZ/9jbe', 'other', '2000-08-04', '../UserPhoto/mod.jpg', 'mod'),
(2, 'admin', 'admin', 'admin@gmail.com', 'admin', '$2y$10$FQw0xzvm.RAL6hL43bWfl.S0TaSW2ucu1gWyEONItnq87yErKHH0m', 'male', '1999-11-09', '../UserPhoto/admin.jpg', 'admin'),
(50, 'User', 'User', 'User@gmail.com', 'User', '$2y$10$mY5NT/hDnXXyiHTkXjIbAOuTP9GS6KhuaIgr.BfpY6wMuKaFAsLKO', 'other', '2000-09-12', '../UserPhoto/User.jpeg', 'user');

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
  MODIFY `id` int(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
