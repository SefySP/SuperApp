<?php
    require_once "Scripts/session.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Styles/index.css">
    <link rel="stylesheet" href="Styles/form.css">
    
    <script src="Scripts/navbar_function.js"></script>
    <script src="Scripts/loadmenu.js"></script>
    <script src="Scripts/loadadd.js"></script>

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
            <h2>Delete</h2>
            <div id = 'users_del'>
        
            </div>
        </main>
        <footer>
            <a href="aboutus.php">About Us</a>
            &copy;2021 All rights reserved
        </footer>
    </div>  
    <script src = 'Scripts/deleteuser.js'></script>
    <script>deleteUser()</script>
</body>
</html>