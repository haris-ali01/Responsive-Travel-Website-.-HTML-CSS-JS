<?php

//Connecting databse
$serverAddress = 'localhost';
$username = 'ENTER YOUR USERNAME';
$password = 'ENTER YOUR PASSWORD';
$dbName = 'ENTER DATABASE NAME';

$con = new mysqli($serverAddress,$username,$password,$dbName);


if(isset($_POST['name'])){

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];

$sql = "INSERT INTO `contact_form` (`name`,`email`,`number`,`message`) VALUES ('$name', '$email', '$number', '$message')";

if($con->query($sql) == TRUE){
    // echo 'Message sent.';
    echo json_encode(['status' => 'success', 'message' => 'Message sent successfully!']);
}
else{
    // echo 'Message not sent.';
    echo json_encode(['status' => 'error', 'message' => 'Failed to send the message!']);
}

}
else{
    echo 'An Error Occured';
}



?>