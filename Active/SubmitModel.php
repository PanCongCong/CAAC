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
$errors= array();      // array to hold validation errors
$data= array();         // array to pass back data
// session_start();
// validate the variables ======================================================
if (empty($_POST['pMode']))
    $errors['name'] = 'pMode为空';
switch ($_POST["pMode"]){
    //检测登录是否成功
    case "CheckLoginB":{
        $ManagerAdmin=new ManagerAdmin();
        $model=new ModelAdmin($_POST);
        if($ManagerAdmin->checkLogin($model)){
            echo "1";
        }
        else
        {
            echo "0";
        }
        break;
    }
    //获取用户信息
    case "getUser":{
        $ManagerAdmin=new ManagerAdmin();
        $NAME=$_POST["NAME"];
        $trem=array(array("key"=>"NAME","val"=>"$NAME"));
        echo $ManagerAdmin->getList("T_Admin",$trem);
        break;
    }
    //更新用户信息
    case "updateAdmin":{
        $ManagerAdmin=new ManagerAdmin();
        $model=new ModelAdmin($_POST);
        echo $ManagerAdmin->update($model);
        break;
    }
    //更新信息发布明细
    case "updateTZGGMX":{
        $ManagerAdmin=new ManagerWenZhang();
        $model=new ModelWenZhang($_POST);
        echo $ManagerAdmin->update($model);
        break;
    }
    //新增信息发布
    case "addTZGGMX":{
        $ManagerAdmin=new ManagerWenZhang();
        $model=new ModelWenZhang($_POST);
        echo $ManagerAdmin->insert($model);
        break;
    }
    //删除信息发布
    case "delTZGGMX":{
        $ManagerAdmin=new ManagerWenZhang();
        $model=new ModelWenZhang($_POST);
        echo $ManagerAdmin->del($model);
        break;
    }
    //获取企业填报信息
    case "getQiYe":{
        $ManagerAdmin=new ManagerAdmin();
        $NAME=$_POST["NAME"];
        echo $ManagerAdmin->getQiYeTB($NAME);
        break;
    }
    //获取企业填报信息（检察员、专家）
    case "getQiYeMX":{
        $ManagerAdmin=new ManagerAdmin();
        $NAME=$_POST["NAME"];
        $TB=$_POST["TB"];
        echo $ManagerAdmin->getQiYeMX($NAME,$TB);
        break;
    }
    //更新企业填报信息 暂存
    case "updateQiYeList":{
        $ManagerAdmin=new ManagerAdmin();
        $NAMEData=$_POST["data"];
        $NAME=$_POST["NAME"];
        $flag=0;
        for($i=0;$i<count($NAMEData);$i++)
        {
            $model=new ModelQiYe($NAMEData[$i]);
            $flag+=$ManagerAdmin->update($model);
        }
        $TBZT=$_POST["TBZT"];
        if($TBZT=="TBZT5")
        {
            $dataZB=$_POST["dataZB"];
            //先删除
            $sqlDel="delete from T_QiYe_ZB where pID in(select ID from T_QiYe where pID='$NAME')";
            $ManagerAdmin->db->execute($sqlDel);
            //再增加
            for($i=0;$i<count($dataZB);$i++)
            {
                $model=new ModelQiYe_ZB($dataZB[$i]);
                $ManagerAdmin->insert($model);
            }
        }

        $sql="update T_Admin set $TBZT=1 where NAME='$NAME'";
        $result = $ManagerAdmin->db->execute($sql);

        echo $result;
        break;
    }
    //更新企业信息 填报完毕
    case "updateQiYeList2":{
        $ManagerAdmin=new ManagerAdmin();
        $NAMEData=$_POST["data"];
        $NAME=$_POST["NAME"];
        $flag=0;
        for($i=0;$i<count($NAMEData);$i++)
        {
            $model=new ModelQiYe($NAMEData[$i]);
            $flag+=$ManagerAdmin->update($model);
        }
        $TBZT=$_POST["TBZT"];

        if($TBZT=="TBZT5")
        {
            $dataZB=$_POST["dataZB"];
            //先删除
            $sqlDel="delete T_QiYe_ZB where pID in(selet ID from T_QiYe where pID='$NAME')";
            $ManagerAdmin->db->execute($sqlDel);
            //再增加
            for($i=0;$i<count($dataZB);$i++)
            {
                $model=new ModelQiYe_ZB($dataZB[$i]);
                $ManagerAdmin->insert($model);
            }
        }

        $sql="update T_Admin set $TBZT=9 where NAME='$NAME'";
        $result = $ManagerAdmin->db->execute($sql);
        echo $result;
        break;
    }
    //保存评估确认结果
    case "updateTZGGMX":{
        $ManagerAdmin=new ManagerWenZhang();
        $model=new ModelWenZhang($_POST);
        echo $ManagerAdmin->update($model);
        break;
    }
    case "saveTKMB1":{
        echo $_POST;
    }
    case "getTemp":{
        $ManagerAdmin=new ManagerAdmin();
        $userid=$_POST["userid"];
        echo $ManagerAdmin->getTemp($userid);
    }
}