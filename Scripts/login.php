<?php

$usr_name = $_POST["username"];
$usr_pass = $_POST["password"];

echo "$usr_name $usr_pass";

$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con,"helios_users");

$sql = "SELECT Username, Password, Photo FROM helios_users WHERE Username = '$usr_name' AND Password = '$usr_pass'";

$res = mysqli_query($con, $sql);

if($res->num_rows == 0)
{
    echo "false";
}
else
{
    $row = $res->fetch_assoc();
    echo "<!DOCTYPE html>
    <head>
        <title>SuperApp</title>
    </head>
    <body>
    <img src='" . $row["Photo"] . "'>
    </body>
    </html>";
}

mysqli_close($con);

header("location:../index.html");

?>