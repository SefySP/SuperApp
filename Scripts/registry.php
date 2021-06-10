<?php

$usr_fname = trim($_POST["user_fname"]);
$usr_lname = trim($_POST["user_lname"]);
$usr_email = trim($_POST["user_email"]);
$usr_name = trim($_POST["username"]);
$usr_pass = trim($_POST["password"]);
$usr_re_pass = trim($_POST["repeat_password"]);
$pw_hash = password_hash($usr_pass, PASSWORD_BCRYPT);
$usr_gender = trim($_POST["user_gender"]);
$usr_date = trim($_POST["user_date"]);
$usr_photo = $_FILES["user_photo"]['name'];

$target = "../Media/$usr_name".basename($usr_photo);

$db = mysqli_connect("localhost", "root", "", "helios_users");

$sql = "INSERT INTO helios_users (Fname, Lname, Email, Username, Password, Gender, Date, Photo, Role) VALUES ('$usr_fname', '$usr_lname','$usr_email', '$usr_name', '$pw_hash', '$usr_gender', '$usr_date', '$target', 'user')";

if (move_uploaded_file($_FILES['user_photo']['tmp_name'],$target)) 
{
    echo "true";
}
else
{
    echo "false";
}


mysqli_query($db, $sql);

mysqli_close($db);

header("location:../index.html");

?>