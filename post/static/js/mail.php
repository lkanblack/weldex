<?php
$recepient = "info@weldex.ee";
$siteName = "Weldex Group";

$name = trim($_POST["name"]);
$mail = trim($_POST["mail"]);
$message = trim($_POST["message"]);

$content = "Name: $name \nEmail: $mail \nMessage: $message";

$pagetitle = "Message from \"$siteName\"";
mail($recepient, $pagetitle, $content, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>