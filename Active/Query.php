<?php
header("Content-Type:text/html;charset=utf-8");
header('Access-Control-Allow-Origin:*'); 
// define("ROOT", $_SERVER['DOCUMENT_ROOT']."/AQBZ");
require_once '../DAL/Manager.php';
require_once '../DAL/Db.php';
require_once '../DAL/Model.php';

require_once '../DAL/Model/ManagerWenZhang.php';
require_once '../DAL/Model/ModelWenZhang.php';
require_once '../DAL/Model/ManagerAdmin.php';
require_once '../DAL/Model/ModelAdmin.php';
require_once '../DAL/Model/ManagerFuJian.php';
require_once '../DAL/Model/ModelFuJian.php';
require_once '../DAL/Model/ManagerPYK.php';
require_once '../DAL/Model/ModelPYK.php';
require_once '../DAL/Model/ManagerQiYe.php';
require_once '../DAL/Model/ModelQiYe.php';
require_once '../DAL/Model/ModelQiYe_ZB.php';

$pages=$_GET['pMode'];

switch($pages){
    //获取信息发布列表
    case "getTZGG":{
        $size=$_GET['size'];
        $manager=new ManagerWenZhang();
        $model=$manager->getTZGGList($size,"1");
        echo $model;
        return;
    }
    //获取信息发布明细
    case "getTZGGMX":{
        $ID=$_GET['ID'];
        $manager=new ManagerWenZhang();
        $trem=array(array("key"=>"ID","val"=>"$ID"));
        $model=$manager->getList("T_WenZhang",$trem);
        echo $model;
        return;
    }
    case "getXWDT":{
        $size=$_GET['size'];
        $manager=new ManagerWenZhang();
        $model=$manager->getTZGGList($size,"2");
        echo $model;
        return;
    }
    //获取检察员评估列表
    case "getJCPGList":{
        $NAME=$_GET['NAME'];
        $zt=$_GET['zt'];
        $manager=new ManagerAdmin();
        $model=$manager->getJCPGList($NAME,$zt);
        echo $model;
        return;
    }
    //获取文件评估列表
    case "getWJPGList":{
        $NAME=$_GET['NAME'];
        $zt=$_GET['zt'];
        $manager=new ManagerAdmin();
        $model=$manager->getWJPGList($NAME,$zt);
        echo $model;
        return;
    }
    //获取现场评估列表
    case "getXCPGList":{
        $NAME=$_GET['NAME'];
        $zt=$_GET['zt'];
        $manager=new ManagerAdmin();
        $model=$manager->getXCPGList($NAME,$zt);
        echo $model;
        return;
    }
     //获取评估确认列表
    case "getPGQRList":{
        $NAME=$_GET['NAME'];
        $zt=$_GET['zt'];
        $manager=new ManagerAdmin();
        $model=$manager->getPGQRList($NAME,$zt);
        echo $model;
        return;
    }
    case "getTemp":{
        $ManagerAdmin=new ManagerAdmin();
        // $userid=$_POST["userid"];
        $userid="1";
        echo $ManagerAdmin->getTemp($userid);
    }
}
