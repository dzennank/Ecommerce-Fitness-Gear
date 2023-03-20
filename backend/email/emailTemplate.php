<?php 

function generete_email_template($username) {
  // $totalPrice = $_POST['totalPrice'];
  include("../dbcon.php");
  $sql = "SELECT
  oi.order_id,
  oi.product_type,
  oi.quantity,
  CASE
      WHEN oi.product_type = 'supplement' THEN s.supplement_name
      WHEN oi.product_type = 'clothes' THEN c.clothes_name
      WHEN oi.product_type = 'equipment' THEN e.equipment_name
  END AS product_name,
  CASE
      WHEN oi.product_type = 'supplement' THEN s.supplement_price
      WHEN oi.product_type = 'clothes' THEN c.clothes_price
      WHEN oi.product_type = 'equipment' THEN e.equipment_price
  END AS product_price
 FROM
  orders o
  JOIN order_items oi ON o.order_id = oi.order_id
  LEFT JOIN supplements s ON oi.product_type = 'supplement' AND oi.product_id = s.supplement_id
  LEFT JOIN clothes c ON oi.product_type = 'clothes' AND oi.product_id = c.clothes_id
  LEFT JOIN equipment e ON oi.product_type = 'equipment' AND oi.product_id = e.equipment_id
 WHERE
  o.order_id = (SELECT MAX(order_id) FROM orders)";
  
  // execute query
  $result = mysqli_query($conn, $sql);
  // fetch data into array
  $data = array();
  if (mysqli_num_rows($result) > 0) {
  while ($row = mysqli_fetch_assoc($result)) {
  $data[] = $row;
  
  }
  
  }

  $totalPriceArr = array();
  $totalQuantityArr = array();
    $tableRows = '';
    foreach ($data as $d) {
      $totalPriceArr[] = $d['product_price'];
      $totalQuantityArr[] = $d['quantity'];
      $tableRows .= '<tr>
                      <td style="padding: 10px; text-align: left; border: 1px solid #ccc;">' . $d['product_name'] . '</td>
                      <td style="padding: 10px; text-align: left; border: 1px solid #ccc;">' . $d['quantity'] . '</td>
                      <td style="padding: 10px; text-align: left; border: 1px solid #ccc;">' . $d['product_price'] . '$</td>
                    </tr>';
    }
    // $totalPriceArr = array_map('intval', $totalPriceArr);
    $totalPrice = array_sum($totalPriceArr);
    $totalQuantity = array_sum($totalQuantityArr);
  
    // Replace the placeholders in the HTML code with the actual values
    return '<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Confirmation of Purchase</title>
      </head>
      <body style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; background-color: #f5f5f5; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); overflow: hidden;">
          <div style="background-color: #eaeaea; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; color: #333;">Confirmation of Purchase</h1>
          </div>
          <div style="padding: 20px;">
            <p style="margin: 0 0 20px 0;">Dear ' .$username . ',</p>
            <p style="margin: 0 0 20px 0;">Thank you for your recent purchase on Fitness Ecommerce. We are pleased to confirm your order details below:</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <thead>
                <tr style="background-color: #eaeaea;">
                  <th style="padding: 10px; text-align: left; border: 1px solid #ccc;">Product</th>
                  <th style="padding: 10px; text-align: left; border: 1px solid #ccc;">Quantity</th>
                  <th style="padding: 10px; text-align: left; border: 1px solid #ccc;">Price</th>
                </tr>
              </thead>
              <tbody>
                ' . $tableRows . '
              </tbody>
              <tfoot>
                <tr>
                  <td style="padding: 10px; text-align: left; border: 1px solid #ccc;">Total</td>
                  <td style="padding: 10px; text-align: left; border: 1px solid #ccc;">' . $totalQuantity . '</td>
                  <td style="padding: 10px; text-align: left; border: 1px solid #ccc;">' . $totalPrice . '$</td>
                </tr>
                </tfoot>
        </table>
        <p style="margin: 0 0 20px 0;">Thank you for shopping with us!</p>
      </div>';

}

// generete_email_template();




