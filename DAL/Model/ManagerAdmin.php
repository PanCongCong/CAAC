<?php
// define("ROOT", $_SERVER['DOCUMENT_ROOT']."/AQBZ");
require_once '../DAL/Model/ModelQiYe.php';
// require_once 'PHPWord_0.6.2_Beta/PHPWord.php';
// include_once ('PHPWord_0.6.2_Beta/PHPWord.php');  
// use PhpOffice\PhpWord\Autoloader;  
// use PhpOffice\PhpWord\Settings;  
// use PhpOffice\PhpWord\IOFactory;  
  
// include_once ('PHPWord_0.6.2_Beta/PhpWord/Autoloader.php');  
// Autoloader::register();  
// Settings::loadConfig();  

//学生信息实体的管理类
class ManagerAdmin extends Manager{
    //初始化
    function ManagerAdmin(){
        parent::Manager();
    }
    //检测用户是否登录
    //第一个参数为当前所在页
    //第二个参数为每页显示多少数据
    function checkLogin($model){
        $sql="select * from T_Admin Where NAME='".$model->get("NAME")."' and PWD='".$model->get("PWD")."' and LX='".$model->get("LX")."'";
        $count= $this->db->queryCount($sql);//登录成功，可能是-1，也可能是1，登录失败，一定是0，坑！
        if($count==0)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    function getQiYeTB($NAME)
    {
        $sqlNAME="select * from T_Admin where NAME='$NAME'";
        $queryQY= $this->db->getQuery($sqlNAME);
        if($queryQY->rowCount()!=0)
        {
            while($row= $queryQY->fetch())
            {
                $TBZT1=$row["TBZT1"];
                $QYLX=$row["QYLX"];
            }
        }
        else
        {
            return "err";
        }

        $sql="select * from T_QiYe where pID='$NAME'";
        $dataCount= $this->db->queryCount($sql);
       
        //如果用户已经填报，那么返回填报信息
        if($dataCount!=0)
        {
           $data=$this->db->query($sql);
           $data=json_encode($data);
           return '{"TableList":'.$data.',"pMode":"'.$TBZT1.'"}';
        }
        else
        {
            //如果用户未填报，则初始化填报信息
            $sql2="select * from T_ZB where QYLX='$QYLX'";
            $dataZB=$this->db->getQuery($sql2);
            while($row=$dataZB->fetch())
            {
                $model=new ModelQiYe();
                $model->set("pID",$NAME);
                $model->set("TKBH",$row["TKBH"]);
                $model->set("YJZBXH",$row["YJZBXH"]);
                $model->set("YJZB",$row["YJZB"]);
                $model->set("EJZBXH",$row["EJZBXH"]);
                $model->set("EJZB",$row["EJZB"]);
                $model->set("TK",$row["TK"]);
                $model->set("ISJCY",$row["ISJCY"]);
                $model->set("ISWJ",$row["ISWJ"]);
                $model->set("ISYZ",$row["ISYZ"]);
                $model->set("TBSL",$row["TBSL"]);
                $this->insert($model);
            }
            $data4=$this->db->query($sql);
            $data4=json_encode($data4);
            return '{"TableList":'.$data4.',"pMode":"'.$TBZT1.'"}';
        }
        return $QYLX;
    }
    function getQiYeMX($NAME,$TB)
    {
        $sqlNAME="select * from T_Admin where NAME='$NAME'";
        $queryQY= $this->db->getQuery($sqlNAME);
        if($queryQY->rowCount()!=0)
        {
            while($row= $queryQY->fetch())
            {
                $TBZT=$row["TBZT".$TB];
            }
        }
        else
        {
            return "err";
        }

        $sql="select * from T_QiYe where pID='$NAME'";
        $dataCount= $this->db->queryCount($sql);
        //如果用户已经填报，那么返回填报信息
        if($dataCount!=0)
        {
           $data=$this->db->query($sql);
           $data=json_encode($data);

            $sql2="select * from T_QiYe_ZB where pID in(select ID from T_QiYe where pID='$NAME')";
            $data2=$this->db->query($sql2);
            $data2=json_encode($data2);

           return '{"TableList":'.$data.',"TableList2":'.$data2.',"pMode":"'.$TBZT.'"}';
        }
        else
        {
            return "err";
        }
    }
    function getJCPGList($NAME,$zt)
    {
        switch ($zt) {
            case '0':
            {
                $sql="select * from T_Admin where DZ in(select FZCS from T_Admin where NAME='$NAME') and LX='6' and TBZT1='9' and TBZT2!='9'";
                break;
            }
            case '1':
            {
                $sql="select * from T_Admin where DZ in(select FZCS from T_Admin where NAME='$NAME') and LX='6' and TBZT1='9' and TBZT2='9'";
                break;
            }
            default:
            {
                $sql="select * from T_Admin where DZ in(select FZCS from T_Admin where NAME='$NAME') and LX='6' and TBZT1='9'";
                break;
            }
        }
        $data= $this->db->query($sql);
        $data=json_encode($data);
        return '{"TableList":'.$data.'}';
    }
    function getWJPGList($NAME,$zt)
    {
        switch ($zt) {
            case '0':
            {
                // $sql="select * from T_Admin where NAME in(select pID from T_QiYe where WJZJID='$NAME') and LX='6' and TBZT1='9' and TBZT3!='9'";
                $sql="select * from T_Admin where LX='6' and TBZT1='9' and TBZT3!='9'";
                break;
            }
            case '1':
            {
                // $sql="select * from T_Admin where NAME in(select pID from T_QiYe where WJZJID='$NAME') and LX='6' and TBZT1='9' and TBZT3='9'";
                $sql="select * from T_Admin where  LX='6' and TBZT1='9' and TBZT3='9'";
                break;
            }
            default:
            {
                // $sql="select * from T_Admin where NAME in(select pID from T_QiYe where WJZJID='$NAME') and LX='6' and TBZT1='9'";
                $sql="select * from T_Admin where  LX='6' and TBZT1='9'";
                break;
            }
        }
        $data= $this->db->query($sql);
        $data=json_encode($data);
        return '{"TableList":'.$data.'}';
    }
    function getXCPGList($NAME,$zt)
    {
        switch ($zt) {
            case '0':
            {
                // $sql="select * from T_Admin where NAME in(select pID from T_QiYe where XCZJID='$NAME') and LX='6' and TBZT1='9' and TBZT3='9' and TBZT4!='9'";
                $sql="select * from T_Admin where LX='6' and TBZT1='9' and TBZT3='9' and TBZT4!='9'";
                break;
            }
            case '1':
            {
                // $sql="select * from T_Admin where NAME in(select pID from T_QiYe where XCZJID='$NAME') and LX='6' and TBZT1='9' and TBZT3='9' and TBZT4='9'";
                $sql="select * from T_Admin where LX='6' and TBZT1='9' and TBZT3='9' and TBZT4='9'";
                break;
            }
            default:
            {
                // $sql="select * from T_Admin where NAME in(select pID from T_QiYe where XCZJID='$NAME') and LX='6' and TBZT1='9' and TBZT3='9'";
                $sql="select * from T_Admin where LX='6' and TBZT1='9' and TBZT3='9'";
                break;
            }
        }
        $data= $this->db->query($sql);
        $data=json_encode($data);
        return '{"TableList":'.$data.'}';
    }
    function getPGQRList($NAME,$zt)
    {
        switch ($zt) {
            case '0':
            {
                // $sql="select * from T_Admin where NAME in(select pID from T_QiYe where XCZJID='$NAME') and LX='6' and TBZT1='9' and TBZT3='9' and TBZT4!='9'";
                $sql="select * from T_Admin where LX='6' and TBZT1='9' and TBZT2='9' and TBZT3='9' and TBZT4='9' and TBZT5!='9'";
                break;
            }
            case '1':
            {
                // $sql="select * from T_Admin where NAME in(select pID from T_QiYe where XCZJID='$NAME') and LX='6' and TBZT1='9' and TBZT3='9' and TBZT4='9'";
                $sql="select * from T_Admin where LX='6' and TBZT1='9' and TBZT2='9' and TBZT3='9' and TBZT4='9' and TBZT5='9'";
                break;
            }
            default:
            {
                // $sql="select * from T_Admin where NAME in(select pID from T_QiYe where XCZJID='$NAME') and LX='6' and TBZT1='9' and TBZT3='9'";
                $sql="select * from T_Admin where LX='6' and TBZT1='9' and TBZT2='9' and TBZT3='9' and TBZT4='9'";
                break;
            }
        }
        $data= $this->db->query($sql);
        $data=json_encode($data);
        return '{"TableList":'.$data.'}';
    }
    function getTemp($userid)
    {
        $PHPWord = new \PhpOffice\PhpWord\PHPWord();  
        $templateProcessor = new \PhpOffice\PhpWord\TemplateProcessor('../../Active/upload/temp.docx');  
        $templateProcessor->setValue('Value1', 'Sun');
        $templateProcessor->saveAs('test.docx'); 
         return "aaa";
    }
}
?>