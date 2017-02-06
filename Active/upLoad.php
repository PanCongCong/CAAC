<?php
header("Content-Type:text/html;charset=utf-8");
header('Access-Control-Allow-Origin:*');
// define("ROOT", $_SERVER['DOCUMENT_ROOT']."/AQBZ");
require_once '../DAL/Db.php';

// echo "file : ".$_FILES." post: ".$_POST." get: ".$_GET;
    foreach($_FILES as $key => $value){
        $a[]=$key;
    }
    $pics = explode('.' , $_FILES[$a[0]]["name"]);
    $filename=$a[0].".".end($pics);
    if ($_FILES[$a[0]]["error"] > 0)
    {
        echo "Return Code: " . $_FILES[$a[0]]["error"] . "<br />";
    }
    else
    {
        // echo "Upload: " . $_FILES[$a[0]]["name"] . "<br />";
        // echo "Type: " . $_FILES[$a[0]]["type"] . "<br />";
        // echo "Size: " . ($_FILES[$a[0]]["size"] / 1024) . " Kb<br />";
        // echo "Temp file: " . $_FILES[$a[0]]["tmp_name"] . "<br />";

        if (file_exists("upload/" . $_FILES[$a[0]]["name"]))
        {
            echo $_FILES[$a[0]]["name"] . " already exists. ";
        }
        else
        {
            move_uploaded_file($_FILES[$a[0]]["tmp_name"],
            "upload/" . $filename);
            $sql="update T_QiYe set ZL='upload/".$filename."' where ID=".$a[0];
            $db=new Db();
            echo $db->execute($sql);
            // echo "Stored in: " . "upload/" . $_FILES[$a[0]]["name"];
        }
    }
?>