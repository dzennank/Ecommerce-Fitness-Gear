<?php
include("../dbcon.php");

  $username = $_POST["username"];
  $email = $_POST["email"];
  $password = $_POST["password"];

  // Connect to database and insert new user

  $query = "INSERT INTO users (ime, email, sifra) VALUES ('$username', '$email', '$password')";
  $result = mysqli_query($conn, $query);

//   if ($result) {
//     $response = array("success" => true);
//   } else {
//     $response = array("success" => false);
//   }

//   echo json_encode($response);
?>
