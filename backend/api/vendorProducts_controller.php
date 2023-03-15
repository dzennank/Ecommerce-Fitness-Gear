<?php 

class FetchVendorProductsController {
    public function fetchVendorProducts() {
        $email = $_POST["email"];
        $type = $_POST['type'];
        require("./getUserID.php");
        include("../dbcon.php");

        $id = getUserID($email);
        
        if($type == "clothes") {
          $query_clothes = "SELECT * FROM clothes where vendor_id = '$id'";
          $query_clothes_run = mysqli_query($conn, $query_clothes);
          
          if (mysqli_num_rows($query_clothes_run) > 0) {

            $clothes = array();
      
            // Fetch each row and store it in the array
            while ($row = mysqli_fetch_assoc($query_clothes_run)) {
              $clothes[] = $row;
            }
           
          } else {
            $clothes = "No products found";
          }
          $equip = "No Products Found";
          $supp = "No Products Found";
          
        } else if ($type == "equipment") {
          $query_equip = "SELECT * FROM equipment where vendor_id = '$id'";
          $query_equip_run = mysqli_query($conn, $query_equip);

          if (mysqli_num_rows($query_equip_run) > 0) {

            $equip = array();
      
            // Fetch each row and store it in the array
            while ($row = mysqli_fetch_assoc($query_equip_run)) {
              $equip[] = $row;
            }
           
          } else {
            $equip = "No Products Found";
          }
          $clothes = "No Products Found";
          $supp = "No Products Found";

        } else if ($type == "supplements") {
          $query_supp = "SELECT * FROM supplements where vendor_id = '$id'";
          $query_supp_run = mysqli_query($conn, $query_supp);

          if (mysqli_num_rows($query_supp_run) > 0) {

            $supp = array();
      
            // Fetch each row and store it in the array
            while ($row = mysqli_fetch_assoc($query_supp_run)) {
              $supp[] = $row;
            }
           
          } else{
            $supp = "No Products Found";
          }
          $equip = "No Products Found";
          $clothes = "No Products Found";
          
        } else {
          $query_clothes = "SELECT * FROM clothes where vendor_id = '$id'";
          $query_clothes_run = mysqli_query($conn, $query_clothes);

          
  
          $query_equip = "SELECT * FROM equipment where vendor_id = '$id'";
          $query_equip_run = mysqli_query($conn, $query_equip);
  
          $query_supp = "SELECT * FROM supplements where vendor_id = '$id'";
          $query_supp_run = mysqli_query($conn, $query_supp);

          if (mysqli_num_rows($query_clothes_run) > 0) {

            $clothes = array();
      
            // Fetch each row and store it in the array
            while ($row = mysqli_fetch_assoc($query_clothes_run)) {
              $clothes[] = $row;
            }
           
          } else {
            $clothes = "No products found";
          }

          if (mysqli_num_rows($query_equip_run) > 0) {

            $equip = array();
      
            // Fetch each row and store it in the array
            while ($row = mysqli_fetch_assoc($query_equip_run)) {
              $equip[] = $row;
            }
           
          } else {
            $equip = "No Products Found";
          }

          if (mysqli_num_rows($query_supp_run) > 0) {

            $supp = array();
      
            // Fetch each row and store it in the array
            while ($row = mysqli_fetch_assoc($query_supp_run)) {
              $supp[] = $row;
            }
           
          } else{
            $supp = "No Products Found";
          }
        }

        
          
          
          
          
          $data = array("clothes" => $clothes, "equipment" => $equip, "supplements" => $supp);

          echo json_encode($data);

    }
}

$vendorProducts = new FetchVendorProductsController();
$vendorProducts -> fetchVendorProducts();