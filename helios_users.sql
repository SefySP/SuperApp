-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Εξυπηρετητής: 127.0.0.1
-- Χρόνος δημιουργίας: 16 Ιουν 2021 στις 19:35:00
-- Έκδοση διακομιστή: 10.4.19-MariaDB
-- Έκδοση PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Βάση δεδομένων: `helios_users`
--

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `helios_users`
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
-- Άδειασμα δεδομένων του πίνακα `helios_users`
--

INSERT INTO `helios_users` (`id`, `Fname`, `Lname`, `Email`, `Username`, `Password`, `Gender`, `Date`, `Photo`, `Role`) VALUES
(12, 'u1', 'u1', 'u1@u1.com', 'u1', '$2y$10$7bSps1OI2kgAwQxXcktCQuX7q/ULin1H2pfmydQdff0WXEK65nFYC', 'female', '2021-06-24', '../Media/u1lecpain.jpg', 'user'),
(13, 'u2', 'u2', 'u2@u2.com', 'u2', '$2y$10$i8pB25xLCABsmiRXA50pAO.Xk.cc3AND3WIWq9WD4kAWzJwRneI72', 'male', '2021-06-24', '../Media/u2yak.jpg', 'user'),
(14, 'dannis', 'dannis', 'dannis@gmail.com', 'dannis', '$2y$10$eyVESixKWOZm0W3cxowUtOdOu49c/b1mHyaP7.8PGyj98bfztSHuW', 'male', '2021-06-01', '../Media/dannisPgi1E6.jpg', 'user'),
(15, '11', '11', 'f11@gmail.com', '11', '$2y$10$SqqVYFP84e0vEIDGqxkLKudlVa/QuIbmoRZAfIEt32vDobfGgIy.e', 'female', '2021-06-15', '../Media/11224441.jpg', 'user');

--
-- Ευρετήρια για άχρηστους πίνακες
--

--
-- Ευρετήρια για πίνακα `helios_users`
--
ALTER TABLE `helios_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `Username` (`Username`);

--
-- AUTO_INCREMENT για άχρηστους πίνακες
--

--
-- AUTO_INCREMENT για πίνακα `helios_users`
--
ALTER TABLE `helios_users`
  MODIFY `id` int(255) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
