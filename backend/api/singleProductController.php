<?php

class FetchSingleProductController
{
    public function fetchSingleProduct()
    {
        $id = $_GET['id'];
        $name = $_GET['name'];

        include("../dbcon.php");
        // Validate and sanitize the parameters
        $id = mysqli_real_escape_string($conn, $id);
        $name = mysqli_real_escape_string($conn, $name);

        if ($name == 'clothes') {
            $query = "SELECT * FROM clothes WHERE clothes_id = '$id'";
        } else if ($name == 'equipment') {
            $query = "SELECT * FROM equipment WHERE equipment_id = '$id'";
        } else {
            $query = "SELECT * FROM supplements WHERE supplement_id = '$id'";
        }
        $query_run = mysqli_query($conn, $query);
        if ($query_run) {
            if (mysqli_num_rows($query_run) > 0) {
                $data = mysqli_fetch_assoc($query_run);
                echo json_encode(array("message" => "Product found.","name" => $name, "data" => $data));
            } else {
                echo json_encode(array("message" => "No product found."));
            }
        } else {
            echo json_encode(array("message" => "Query execution failed."));
        }
    }
}

$controller = new FetchSingleProductController();
$controller->fetchSingleProduct();

