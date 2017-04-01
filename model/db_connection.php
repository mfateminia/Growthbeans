<?php
$myServer = "localhost"; //this is localhost almost always
$myUser = "shaneyan";
$myPass = "shane_yan";
$myDB = "growthbeans";

//connection to the database
$conn = mysqli_connect( $myServer, $myUser, $myPass, $myDB)
  or die("Couldn't connect to SQL Server");
