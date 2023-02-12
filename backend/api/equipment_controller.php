<?php
include("../dbcon.php");

$query = "SELECT * FROM equipment";
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
