<?php
class orderItemsController
{
    public function createOrderItems()
    {

        $cartData = json_decode(file_get_contents('php://input'), true);
        $quantity = $_POST['quantity'];
        include("../dbcon.php");
        $order_query = "SELECT MAX(order_id) from orders";
        $order_query_run = mysqli_query($conn, $order_query);

        $order_id = mysqli_fetch_row($order_query_run);

        foreach ($cartData as $data) {
            $productName = $data['name'];
            $orderProducts = $data['data'];
            if ($productName == 'clothes') {

                $id = $orderProducts['clothes_id'];
            }
            if ($productName == 'supplement') {
                $id = $orderProducts['supplement_id'];
            }
            if ($productName == 'equipment') {
                $id = $orderProducts['equipment_id'];
            }
            $query = "INSERT INTO order_items 
            (
                order_id, 
                product_id, 
                product_type,
                quantity
            ) 
                VALUES
            (
                $order_id, 
                $id, 
                '$productName', 
                '$quantity'
            )";
        $query_run = mysqli_query($conn, $query);
        }
        if($query_run) {
            $response = array('success' => true);
        } else {
            $response = array('success' => false);
        }

        echo json_encode($response);
    }
}
$orderItems_controller = new orderItemsController();
$orderItems_controller -> createOrderItems();
