<?php

class NumberOfSupplements {
    public function numberOfSupp() {
        
        include("../../dbcon.php");
        $query = "SELECT * FROM supplements";
        $query_run = mysqli_query($conn, $query);

        $query_clothes = "SELECT * FROM clothes";
        $query_clothes_run = mysqli_query($conn, $query_clothes);

        $query_equip = "SELECT * FROM equipment";
        $query_equip_run = mysqli_query($conn, $query_equip);

        $supp= mysqli_num_rows($query_run);
        $clothes = mysqli_num_rows($query_clothes_run);
        $equip = mysqli_num_rows($query_equip_run);

        $total = $supp + $clothes + $equip;

        $response = array("numberOfSupplements" => $supp, "numberOfClothes" => $clothes, "numberOfEquip" => $equip, "total" => $total );
        echo json_encode($response);
    }
}

$getNumOfSupp = new NumberOfSupplements();
$getNumOfSupp -> numberOfSupp();