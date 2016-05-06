<?php
include("../res/x5engine.php");
$nameList = array("c5g","3lz","szg","zvz","m32","e6l","8e7","k75","yer","5ja");
$charList = array("P","N","7","T","K","2","T","5","G","N");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
