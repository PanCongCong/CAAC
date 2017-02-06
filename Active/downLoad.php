<?php
$filename=$_GET["fname"];
header('content-disposition: attachment; filename='.$filename);
header('content-length: '.filesize($filename));
readfile($filename);
// exit();
?>