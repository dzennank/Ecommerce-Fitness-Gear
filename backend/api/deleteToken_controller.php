<?php

class deleteTokenController {

    public function deleteToken() {
        include("../dbcon.php");

        $headers = apache_request_headers();
        if (!isset($headers['Authorization'])) {
            http_response_code(401);
            exit();
        }
        $auth_header = $headers['Authorization'];
        $token = str_replace('Bearer ', '', $auth_header);

        $query = "DELETE FROM tokens WHERE token = '$token'";
        $query_run = mysqli_query($conn, $query);

        if($query_run) {
            $response = array("success" => true);
        } else {
            $response = array("success" => false);
        }
        echo json_encode($response);
    }
}

$delete_token = new deleteTokenController();
$delete_token -> deleteToken();