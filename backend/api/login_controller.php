<?php
include("../dbcon.php");

$email = $_POST["email"];
$password = $_POST["password"];

$query = "SELECT * FROM users WHERE email = '$email' AND sifra = '$password'";
$query_run = mysqli_query($conn, $query);

$user_arr = mysqli_fetch_array($query_run);

if (mysqli_num_rows($query_run) > 0) {
  $response = array("success" => true, "ime" => $user_arr['ime'], "prezime" => $user_arr['prezime'], "tip" => $user_arr['tip_korisnika']);
} else {
  $response = array("success" => false);
}

echo json_encode($response);
