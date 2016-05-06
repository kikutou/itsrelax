<?php
include("../res/x5engine.php");
$nameList = array("n4v","cna","duu","dmh","yj4","svn","mat","e3y","jph","rnu");
$charList = array("V","8","3","W","6","G","H","G","X","D");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
