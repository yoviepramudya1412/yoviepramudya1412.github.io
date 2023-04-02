<?php
	$servername = "localhost2";
	$db = "gis_dishub3";
	$username = "server";
	$password = "admin123$";

	try {
	    $conn = new PDO("pgsql:host=$servername;dbname=$db", $username, $password);
	    // set the PDO error mode to exception
	    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	    // echo "Connected successfully"; 
	} catch(PDOException $e){
	    echo "Connection failed: " . $e->getMessage();
	}
?>
