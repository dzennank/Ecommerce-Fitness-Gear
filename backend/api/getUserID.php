<?php

 function getUserID($email)
 {
    include("../dbcon.php");
    $query_id = "SELECT user_id FROM users where email = '$email'";
    $query_id_run = mysqli_query($conn, $query_id);
    $userID = mysqli_fetch_row($query_id_run);
    $id = $userID[0];
    return $id;
    // print_r($id);
 }


//  print_r( getUserID('dzenankrlic@gmail.com'));