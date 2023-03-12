<?php

class SendMailController {
    
    public function SendMail() {
       require "../email/emailConfig.php";

        $email = $_POST["email"];
        $username = $_POST["username"];

        $response = sendMail($email, $username) ? array("success" => true) : array("success" => false);

    
        

    }
}

$sendMailController = new SendMailController();
$sendMailController -> SendMail();