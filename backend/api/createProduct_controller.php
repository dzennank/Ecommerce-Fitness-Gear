<?php

class createProductController
{
    public function createProduct()
    {
        include("../dbcon.php");
        $selectedTypeValue = $_POST["selectedTypeValue"];
        $name = $_POST["name"];
        $image = $_POST["image"];
        $price = $_POST["price"];
        $desc = $_POST["desc"];
        $email = $_POST["email"];

        $query_id = "SELECT user_id FROM users where email = '$email'";
        $query_id_run = mysqli_query($conn, $query_id);

        $userID = mysqli_fetch_row($query_id_run);;
        $id = $userID[0];

        if ($selectedTypeValue == "clothes") {
            $selectedGender = $_POST["selectedGender"];
            $selectedSize = $_POST["selectedSize"];
            $query = "INSERT INTO clothes (clothes_name, clothes_price, clothes_gender, clothes_image, size, clothes_desc, vendor_id) 
            VALUES('$name', '$price', '$selectedGender', '$image', '$selectedSize', '$desc', '$id')";
        }
        if($selectedTypeValue == "supplements") {
            $suppType = $_POST["suppType"];
            $weight = $_POST["weight"];
            $query = "INSERT INTO supplements (supplement_type, supplement_name, supplement_price, supplement_weight, supplement_image, supplement_desc, vendor_id) 
            VALUES('$suppType','$name', '$price', '$weight', '$image', '$desc', '$id')";
        }
        if($selectedTypeValue == "equipment") {
            $equipType = $_POST["equipType"];
            $query = "INSERT INTO equipment (equipment_name, equipment_type, equipment_price, equipment_image, equipment_desc, vendor_id) 
            VALUES('$name', '$equipType', '$price', '$weight', '$image', '$desc', '$id')";
        }
        $query_run = mysqli_query($conn, $query);
        if($query_run) {
                $response = array("success" => true);
        } else {
            $response = array("success" => false);
        }
        echo json_encode($response);
    }
}

$createProduct = new createProductController();
$createProduct -> createProduct();
