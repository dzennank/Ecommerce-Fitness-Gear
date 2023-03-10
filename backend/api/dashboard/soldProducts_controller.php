<?php 

class soldProductController {
    public function soldProducts() {
        include("../../dbcon.php");
        error_reporting(E_ERROR | E_PARSE);
        $product_type = $_POST['product_type'];
        if(!isset($product_type)) {
            
            $sql = "SELECT YEAR(order_date) as year, MONTH(order_date) as month, SUM(quantity) as total_sold
        FROM orders o 
        JOIN order_items oi ON o.order_id = oi.order_id 
        GROUP BY YEAR(order_date), MONTH(order_date)";
        } else {
            
            $sql = "SELECT YEAR(order_date) as year, MONTH(order_date) as month, SUM(quantity) as total_sold
        FROM orders o 
        JOIN order_items oi ON o.order_id = oi.order_id WHERE oi.product_type = '$product_type'
        GROUP BY YEAR(order_date), MONTH(order_date)";
        }
        
        $result = mysqli_query($conn, $sql);
        
        // create an array to hold the results
        $data = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $month_name = date('F', mktime(0, 0, 0, $row['month'], 1));
        $data[] = array(
        'year' => $row['year'],
        'month' => $month_name,
        'total_sold' => $row['total_sold']
        );
        }
        
        // return the data as JSON
        header('Content-Type: application/json');
        echo json_encode($data);

    }

}

$soldProducts = new soldProductController();
$soldProducts -> soldProducts();