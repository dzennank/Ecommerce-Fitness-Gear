<?php
include("../dbcon.php");

$email = $_POST["email"];
$password = $_POST["password"];

$query = "SELECT * FROM users WHERE email = '$email' AND sifra = '$password'";
$query_run = mysqli_query($conn, $query);

if (mysqli_num_rows($query_run) > 0) {
    $response = array("success" => true);
  } else {
    $response = array("success" => false);
  }

  echo json_encode($response);

