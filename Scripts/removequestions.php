<?php
$json = json_decode($_POST["json"], true);

$difficulty = $_POST["difficulty"];
$error = '';

if($difficulty == "easy")
{
    $file = "../JSON/Easy.json";
}
else if($difficulty == "medium")
{
    $file = "../JSON/Medium.json";
}
else{
    $file = "../JSON/Hard.json";
}

for($i = 0 ; $i < count($json); $i++)
{
    $error.=$json[$i];
}
$fileContent = file_get_contents($file);
$j = 0;
$data = json_decode($fileContent, true);
$dataArr = array();
for($i = 0 ; $i < count($json); $i++)
{
    if($json[$i] == 'false')
    {
        $dataArr[$j] = $data[$i];
        $j++;
    }
}
file_put_contents($file,json_encode($dataArr));
echo count($json);
?>