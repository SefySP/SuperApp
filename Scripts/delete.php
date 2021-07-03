<?php
    $db = mysqli_connect("localhost", "root", "", "helios_users");
    
    $users = explode(",",$_POST['users']);
    $deletes = explode(",",$_POST['deletes']);

    for ($i = 0 ; $i < count($users) ; $i++)
    {
        if($deletes[$i] == 'true')
        {
            $query = "DELETE FROM helios_users WHERE Username = '$users[$i]'";
            $result = mysqli_query($db, $query);
        }
    }
        
    mysqli_close($db);
?>