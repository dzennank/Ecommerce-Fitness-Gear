<?php 

class PieChartDataController {
    public function getPieChartData() {

        
        include("../../dbcon.php");
        $query_supp = "SELECT quantity FROM order_items where product_type = 'supplement'";
        $query_supp_run = mysqli_query($conn, $query_supp);

        while ($row = mysqli_fetch_assoc($query_supp_run)) {
            $products[] = $row;
          }
          foreach ($products as $prod ) {
            $quantity = $prod['quantity'];

            // print_r($quantity);
            $result[] = $quantity;
          }

          $query_equip = "SELECT quantity FROM order_items where product_type = 'equipment'";
          $query_equip_run = mysqli_query($conn, $query_equip);
          while ($row = mysqli_fetch_assoc($query_equip_run)) {
            $equip_products[] = $row;
          }
        //   print_r($equip_products);
          foreach ($equip_products as $equip ) {
            $equip_quantity = $equip['quantity'];

            // print_r($quantity);
            $equip_result[] = $equip_quantity;
          }

          $query_clothes = "SELECT quantity FROM order_items where product_type = 'clothes'";
          $query_clothes_run = mysqli_query($conn, $query_clothes);

          while ($row = mysqli_fetch_assoc($query_clothes_run)) {
            $clothes_products[] = $row;
          }
        //   print_r($equip_products);
          foreach ($clothes_products as $clot ) {
            $clothes_quantity = $clot['quantity'];

            // print_r($quantity);
            $clothes_result[] = $clothes_quantity;
          }

          $clothes_sum = array_sum($clothes_result);
          $equip_sum = array_sum($equip_result);
          $supp_sum = array_sum($result);
         
          $response = array("clothes" => $clothes_sum, "equipment" => $equip_sum, "supplmenet" => $supp_sum);
          echo json_encode($response);
    }
}

$getPieData = new PieChartDataController();
$getPieData -> getPieChartData();
