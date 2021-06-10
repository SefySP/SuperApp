-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2021 at 08:52 PM
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
(12, 'u1', 'u1', 'u1@u1.com', 'u1', '$2y$10$7bSps1OI2kgAwQxXcktCQuX7q/ULin1H2pfmydQdff0WXEK65nFYC', 'female', '2021-06-24', '../Media/u1lecpain.jpg', 'user'),
(13, 'u2', 'u2', 'u2@u2.com', 'u2', '$2y$10$i8pB25xLCABsmiRXA50pAO.Xk.cc3AND3WIWq9WD4kAWzJwRneI72', 'male', '2021-06-24', '../Media/u2yak.jpg', 'user');

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
  MODIFY `id` int(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
