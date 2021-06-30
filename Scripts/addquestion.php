<?php
$json = json_decode($_POST["json"], true); // Ηταν το decode ηθελε true 
$difficulty = $_POST["difficulty"];


$test = file_get_contents("../JSON/Easy.json");

$data = json_decode($test, true);

$dataArr[0] = $json;


for($i = 0; $i < count($data); $i++)
{
    $dataArr[$i + 1] = $data[$i];
}



file_put_contents("../JSON/Easy.json", json_encode($dataArr));


// if($difficulty == 'easy')
// {
//     $file = file_put_contents("../JSON/Easy.json", $json, FILE_APPEND);
//     if($file === false)
//     {
//         echo "False";
//     }
//     else
//     {
//         echo "Noice";
//     }
// }
return;
?>