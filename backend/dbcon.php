<?php
   $host = 'localhost';
   $user = 'root';
   $password = '';
   $dbname = 'fitness_commerce';
   
   // Create connection
   $conn = mysqli_connect($host, $user, $password, $dbname);
   
   // Check connection
   if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
   }
   echo "Connected successfully";

   
?>
