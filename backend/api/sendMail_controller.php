<?php

class SendMailController {
    
    public function SendMail() {
      
       require "../email/emailConfig.php";

        $email = $_POST["email"];
        $username = $_POST["username"];

       sendMail($email, $username);

    
        

    }
}

$sendMailController = new SendMailController();
$sendMailController -> SendMail();