<?php
$myServer = "localhost"; //this is localhost almost always
$myUser = "growthbeansadmin";
$myPass = "Nus_8355030";
$myDB = "growthbeans";

//connection to the database
$link = mysql_connect( $myServer, $myUser, $myPass )
  or die("Couldn't connect to SQL Server on $myServer"); 

//select a database to work with
$selected = mysql_select_db( $myDB, $link )
  or die( "Couldn't open database $myDB" );