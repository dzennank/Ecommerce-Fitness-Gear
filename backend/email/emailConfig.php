<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require "../../PHPMailer-master/src/Exception.php";
require "../../PHPMailer-master/src/PHPMailer.php";
require "../../PHPMailer-master/src/SMTP.php";


//Create an instance of PHPMailer
function sendMail($email, $username)
{
    $mail = new PHPMailer(true);

//Set mailer to use SMTP
$mail->isSMTP();

//Specify SMTP settings
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'dzenankrlic@gmail.com';
$mail->Password = '';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

//Set email content
$mail->setFrom('dzenankrlic@gmail.com', 'Fitness Ecommerce');
$mail->addAddress($email, $username);
$mail->Subject = "Purchase confirmation";
$mail->Body = 'THANK YOU FOR PURHCASE BRO';

//Send email
if($mail->send()) {
    $response = array("sucess" => true);
    // echo 'Email sent successfully';
} else {
    $response = array("success" => false, "error" => $mail->ErrorInfo);
    // echo 'Email sending failed: ' . $mail->ErrorInfo;
}
echo json_encode($response);
}

