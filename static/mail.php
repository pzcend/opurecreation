<?php  
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent = "From: $name \n Message: $message";
$recipient = "contact@opurecreation.com";
$subject = "Formulaire de contact new site";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");

?>
<html>
<head>
	<title>Confirmation de la reception de votre message</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="jumbotron">
  <h1 class="display-4">Confirmation de la reception de votre message</h1>
  <p class="lead">Merci pour votre message, nous vous recontacterons dans les meilleurs délais.</p>
  <hr class="my-4">
 
  <a class="btn btn-primary btn-lg" href="/" role="button">Retour à l'accueil</a>
</div>
			</div>
		</div>
	</div>
</body>
</html>