<?php

class clothesFiltering
{
  public function filteringValues()
  {
    include("../dbcon.php");

    $selectedSize = $_POST["selectedSize"];
    $priceFrom = $_POST["priceFrom"];
    $priceTo= $_POST["priceTo"];
    $selectedGender = $_POST["selectedGender"];

   
    $query = "SELECT * FROM clothes";
    $conditions = [];

    if($selectedSize) {
      
      $conditions[] = "size = '$selectedSize'";
    }
    if($priceFrom && $priceTo){
      $conditions[] = "clothes_price >= '$priceFrom' AND clothes_price <= '$priceTo'";
    }
    if($priceFrom && !$priceTo)  {
      $conditions[] = "clothes_price >='$priceFrom'";
    }

    if(!$priceFrom && $priceTo) {
      $conditions[] = "clothes_price <= '$priceTo'";
    }
    if($selectedGender){
      $conditions[] = "clothes_gender = '$selectedGender'";
    }

    if (count($conditions) > 0) {
      $query .= " WHERE " . implode(" AND ", $conditions);
      
    }
    $query_run = mysqli_query($conn, $query);
    

    if (mysqli_num_rows($query_run) > 0) {

      $products = array();

      // Fetch each row and store it in the array
      while ($row = mysqli_fetch_assoc($query_run)) {
        $products[] = $row;
      }
      echo json_encode($products);
    } else {
      echo json_encode(array("message" => "No products found."));
    }
  }
}

$clothes_controller = new clothesFiltering();
$clothes_controller->filteringValues();