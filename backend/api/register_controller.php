<?php
include("../dbcon.php");

  $username = $_POST["username"];
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
  $img = $_POST["img"];
  $user_type = $_POST["user_type"];
  // Connect to database and insert new user

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
        '$img',
        '$user_type'
        )";
  $result = mysqli_query($conn, $query);

  if ($result) {
    $response = array("success" => true);
  } else {
    $response = array("success" => false);
  }

  echo json_encode($response);
