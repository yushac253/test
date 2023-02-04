<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'you@example.com';
$subject = 'New message from website';
$headers = "From: $email\r\nReply-To: $email\r\n";

if (mail($to, $subject, $message, $headers)) {
  echo 'success';
} else {
  echo 'error';
}

?>
