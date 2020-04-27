<?php  
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent = "From: $name \n Message: $message";
$recipient = "contact@opurecreation.com";
$subject = "Formulaire de contact new site";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Votre message a bien été envoyé à O Pure Création, Merci";


?>