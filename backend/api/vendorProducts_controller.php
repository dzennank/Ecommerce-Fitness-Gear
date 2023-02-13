<?php 

class FetchVendorProductsController {
    public function fetchVendorProducts() {
        $email = 'dzenankrlic@gmail.com';

        include("../dbcon.php");

        $query = "SELECT user_id FROM users where email = '$email'";
        $query_run = mysqli_query($conn, $query);

        $userID = mysqli_fetch_row($query_run);;
        $id = $userID[0];
        

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
          
          
          $data = array("clothes" => $clothes, "equipment" => $equip, "supplements" => $supp);

          echo json_encode($data);

    }
}

$vendorProducts = new FetchVendorProductsController();
$vendorProducts -> fetchVendorProducts();