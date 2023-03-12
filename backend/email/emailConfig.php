<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require "../../PHPMailer-master/src/Exception.php";
require "../../PHPMailer-master/src/PHPMailer.php";
require "../../PHPMailer-master/src/SMTP.php";


//Create an instance of PHPMailer
$mail = new PHPMailer(true);

//Set mailer to use SMTP
$mail->isSMTP();

//Specify SMTP settings
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'dzenankrlic@gmail.com';
$mail->Password = 'xszqhkrgkmthjzgu';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

//Set email content
$mail->setFrom('dzenankrlic@gmail.com', 'Fitness Ecommerce');
$mail->addAddress('to@example.com', 'To Name');
$mail->Subject = 'Email Subject';
$mail->Body = 'Email Body';

//Send email
if($mail->send()) {
    echo 'Email sent successfully';
} else {
    echo 'Email sending failed: ' . $mail->ErrorInfo;
}
