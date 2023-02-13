<?php


class SupplementFiltering{
  public function GetDataForFiltering()
  {
    $selectedType = $_POST["selectedType"];
    $selectedPrice = $_POST["selectedPrice"];
    $selectedWeight = $_POST["selectedWeight"];

    include("../dbcon.php");
   
    $query = "SELECT * FROM supplements";
    $conditions = [];

    if($selectedType) {
      
      $conditions[] = "supplement_type = '$selectedType'";
    }
    if($selectedPrice){
      $priceRange = explode('-', $selectedPrice);
      $conditions[] = "supplement_price >= '$priceRange[0]' AND supplement_price <= '$priceRange[1]'";
    }
    if($selectedWeight){
      $conditions[] = "supplement_weight = '$selectedWeight'";
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

$supp_controler = new SupplementFiltering();
$supp_controler -> GetDataForFiltering();
