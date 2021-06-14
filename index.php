<?php
session_start();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Styles/index.css">

    <script src="Scripts/navbar_function.js"></script>
    <!-- <script src="Scripts/loadmenu.js"></script> -->

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <title>SuperApp</title>
</head>

<body>
    <div class="container">
        <header>
            <a href="index.php">
                <img src="Media/transparentlogo.png" alt="logo" class="header_logo">
                <h1>C</h1>
                <p>..a programming language</p>
            </a>
        </header>
        <nav>
            <div class="menu" id="navbar">
            </div>
        </nav>
        <main>
            <div>
                <h2>
                    > Hello, World!_"
                    <?php echo $_SESSION["role"]; ?>
                </h2>
                <article class="article">
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;Ενημερωτική σελίδα για την γλώσσα προγραμματισμού C. Περιέχει ιστορική αναδρομή, μερικά
                        ενδιαφέροντα στατιστικά, αναλύει
                        μερικές βασικές αρχές όπως και τις εξετάζει. Το περιεχόμενο είναι αντικειμενικό καθώς προέρχεται από εδραιωμένες και
                        εμπεριστατωμένες πηγές.
                    </p>
                </article>
            </div>
        </main>
        <footer>
            <a href="aboutus.php">About Us</a>
            &copy;2021 All rights reserved
        </footer>
    </div>
    <?php
    $_temp = "";
    if (!isset($_SESSION["id"]) || $_SESSION["id"] !== true)
    {
        $_temp = " ";
    }
    else
    {
        $_temp = $_SESSION["role"];
    }
    echo '<script> loadMenu('.$_temp. ');
function loadMenu(usrRole)
{
    alert("loadmenualert");
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onload = function(){
        document.getElementById("navbar").innerHTML = xmlhttp.responseText;
        console.log(xmlhttp.responseText);
    };
    // xmlhttp.onreadystatechange = function(){
    //     if ((this.readyState == 4) && (this.status == 200))
    //     {
    //         document.getElementById("navbar").innerHTML = xmlhttp.responseText;
    //         console.log(xmlhttp.responseText);
    //     }
    // // };
    if (usrRole == "user")
    {
        xmlhttp.open("GET", "../menu.html", true);
        xmlhttp.send();
    }
    else if (usrRole == "")
    {
        xmlhttp.open("GET", "../visitormenu.html", true);
        xmlhttp.send();
    }
    // xmlhttp.open("GET", "../visitormenu.html", true);
} </script>';
    ?>
</body>

</html>