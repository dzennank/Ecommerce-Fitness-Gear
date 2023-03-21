<?php

class DeleteProductController {
    public function deleteProduct() {
        $productType = $_POST['name'];
        $productID = $_POST['id'];

        include("../dbcon.php");

        if($productType === "clothes") {
            $query = "DELETE FROM clothes WHERE clothes_id = '$productID'";
        }
        if($productType === "supplement") {
            $query = "DELETE FROM supplements WHERE supplement_id = '$productID'";
        }
        if($productType === "equipment") {
            $query = "DELETE FROM equipment WHERE equipment_id = '$productID'";
        }

        $query_run = mysqli_query($conn, $query);
        if($query_run) {
            $response = array("product_deleted" => true);
        } else {
            $response = array("product_deleted" => false);
        }

        echo json_encode($response);
        
    }
}

$deleteProductCont = new DeleteProductController();
$deleteProductCont -> deleteProduct();