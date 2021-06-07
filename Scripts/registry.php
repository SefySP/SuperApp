<?php

$usr_fname = $_POST["user_fname"];
$usr_lname = $_POST["user_lname"];
$usr_email = $_POST["user_email"];
$usr_name = $_POST["username"];
$usr_pass = $_POST["password"];
$usr_re_pass = $_POST["repeat_password"];
$usr_gender = $_POST["user_gender"];
$usr_date = $_POST["user_date"];
$usr_photo = $_FILES["user_photo"]['name'];

$target = "../Media/$usr_name".basename($usr_photo);

$con = mysqli_connect("localhost", "root", "");
mysqli_select_db($con,"helios_users");

$sql = "INSERT INTO helios_users (Fname, Lname, Email, Username, Password, Gender, Date, Photo, Role) VALUES ('$usr_fname', '$usr_lname','$usr_email', '$usr_name', '$usr_pass', '$usr_gender', '$usr_date', '$target', 'user')";

if (move_uploaded_file($_FILES['user_photo']['tmp_name'],$target)) 
{
    echo "true";
}
else
{
    echo "false";
}


mysqli_query($con, $sql);

mysqli_close($con);

header("location:../index.html");

?>