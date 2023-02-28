<?php

class tokenAuthController
{
    public function tokenAuth()
    {

        include("../dbcon.php");
        $headers = apache_request_headers();
        if (!isset($headers['Authorization'])) {
            http_response_code(401);
            exit();
        }
        $auth_header = $headers['Authorization'];
        $token = str_replace('Bearer ', '', $auth_header);

        $query = "SELECT * FROM users WHERE user_id = (select user_id from tokens where token = '$token')";
        $query_run = mysqli_query($conn, $query);
        $user_arr = mysqli_fetch_array($query_run);
        if (mysqli_num_rows($query_run) > 0) {
            $response = array("firstName" => $user_arr['ime'], "lastName" => $user_arr['prezime'], "role" => $user_arr['tip_korisnika'], 'email' => $user_arr['email']);
        } else {
            http_response_code(401);
            $response = array('error' => 'Invalid credentials');
        }
        echo json_encode($response);
    }
}

$tokenAuth_controller = new tokenAuthController();
$tokenAuth_controller->tokenAuth();
