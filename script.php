<?php
$name = $_POST['name'];

mail($to_email_address,$subject,$message,[$headers],[$parameters]);


?>