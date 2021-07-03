<?php
session_start();

$_userRole = "";
$_userName = "";
$_fName = "";
$_lName = "";
$_email = "";
$_gender = "";
$_date = "";
$_photo = "";

if(isset($_SESSION["id"]))
{
    $_userRole = $_SESSION["role"];
    $_userName = $_SESSION["username"];
    $_fName = $_SESSION["fname"];
    $_lName = $_SESSION["lname"];
    $_email = $_SESSION["email"];
    $_gender = $_SESSION["gender"];
    $_date = $_SESSION["date"];
    $_photo = $_SESSION["photo"];
}
else
{
    $_userRole = "1";
    $_userName = "2";
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Styles/index.css">
    
    <script src="Scripts/navbar_function.js"></script>
    <script src="Scripts/loadmenu.js"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <title>SuperApp</title>
</head>

<body onload="loadMenu('<?php echo $_userRole?>');">
    <div class="container">
        <header>
            <a href="index.php">
                <img src="Media/transparentlogo.png" alt="logo" class="header_logo">
                <h1>C</h1>
                <p>..a programming language</p>
            </a>
        </header>
        <nav>
            <div class="menu" id="navbar"></div>
        </nav>
        <main>
            <div id="photo"> 
                <img src="<?php echo $_photo; ?>">
            </div>
            
        </main>
        <footer>
            <a href="aboutus.php">About Us</a>
            &copy;2021 All rights reserved
        </footer>
    </div>    
</body>
</html>
