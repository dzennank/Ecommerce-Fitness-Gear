<?php
include("../dbcon.php");

$username = $_POST["firstName"];
$lastName = $_POST["lastName"];
$email = $_POST["email"];
$password = $_POST["password"];
$confirmPassword = $_POST["confirmPassword"];
$sex = $_POST["sex"];
$place_birth = $_POST["place_birth"];
$country = $_POST["country"];
$birthday = $_POST["birthday"];
$jmbg = $_POST["jmbg"];
$phone = $_POST["phone"];
$img = "neki_url";
$user_type = $_POST["type"];
// Connect to database and insert new user
$target_dir = "../uploads/";
$target_file = $target_dir . basename($_FILES["image"]["name"]);
if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {

  $url = "http://localhost/fitness-ecommerce/Ecommerce-Fitness-Gear/backend/uploads/" . basename($_FILES["image"]["name"]);
  $query = "INSERT INTO users (
    ime, 
    prezime,
    email, 
    sifra, 
    potvrda_sifra, 
    mesto_rodjenja, 
    drzava_rodjenja,
    datum_rodjenja,
    jmbg,
    telefon,
    slika_url,
    tip_korisnika
    ) 
    VALUES (
        '$username', 
        '$lastName', 
        '$email', 
        '$password', 
        '$confirmPassword', 
        '$place_birth', 
        '$country',
        '$birthday',
        '$jmbg',
        '$phone',
        '$url',
        '$user_type'
        )";
      $result = mysqli_query($conn, $query);
      if ($result) {
        $response = array("success" => true);
      } else {
        $response = array("success" => false);
      }
      
      echo json_encode($response);

}

// $query = "INSERT INTO users (
//     ime, 
//     prezime,
//     email, 
//     sifra, 
//     potvrda_sifra, 
//     mesto_rodjenja, 
//     drzava_rodjenja,
//     datum_rodjenja,
//     jmbg,
//     telefon,
//     slika_url,
//     tip_korisnika
//     ) 
//     VALUES (
//         '$username', 
//         '$lastName', 
//         '$email', 
//         '$password', 
//         '$confirmPassword', 
//         '$place_birth', 
//         '$country',
//         '$birthday',
//         '$jmbg',
//         '$phone',
//         '$img',
//         '$user_type'
//         )";



