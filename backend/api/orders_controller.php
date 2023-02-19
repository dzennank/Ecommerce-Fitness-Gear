<?php

class createOrderController {
    public function createOrder() {
        require("./getUserID.php");
        include("../dbcon.php");
        $email = 'dzenankrlic@gmail.com';
        $id = getUserID($email);

        $date = date('m-d-Y');

        $query = "INSERT INTO orders (user_id) VALUES ($id)";
        $query_run = mysqli_query($conn, $query);

        if($query_run) {
            $response = array('success' => true);
        } else {
            $response = array('success' => false);

        }

        echo json_encode($response);

    }
}

$orderController = new createOrderController();
$orderController -> createOrder();