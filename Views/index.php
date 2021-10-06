<!DOCTYPE html>
<html lang="es">

<?php
	
	if (isset($_SESSION['loggedin'])) {
		
		echo "<h1 style='color: white;'>DEBUG 1</h1>";

		if ($_SESSION['loggedin']) {

			echo "<h1 style='color: white;'>DEBUG 2</h1>";

		}

	}


	include ("../partials/head.php");
?>

<body>

<?php
	include ("../partials/header.php");
?>

 

<?php
	include ("../partials/footer.php");
?>

</html>