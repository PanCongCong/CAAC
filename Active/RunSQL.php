<?php
header("Content-Type:text/html;charset=utf-8");
class RunSQL
{
    

    // public function ConnetSAE()
    // {
    //     $SAE_MYSQL_HOST_M="w.rdc.sae.sina.com.cn";
    //     $SAE_MYSQL_PORT="3307";
    //     $SAE_MYSQL_USER="nl545mwloy";
    //     $SAE_MYSQL_PASS="xiiwhjwlzm3m1xwl4z54k4kxh4ywi4zxzkix210x";
    //     $SAE_MYSQL_DB="app_pandemo";
    //     $db = mysql_connect($SAE_MYSQL_HOST_M.':'.$SAE_MYSQL_PORT,$SAE_MYSQL_USER,$SAE_MYSQL_PASS);
    //     if ($db) {
    //         mysql_select_db($SAE_MYSQL_DB, $db);
    //     }
    // }

    public function DeleteTable($TableName)
    {
        $sql = "drop table " . $TableName;
        $mysql = new SaeMysql(); //new一个mysql操作数据库类
        $mysql->runSql($sql);
        $mysql->closeDb(); //关闭连接。
    }
    public function GetDataSQL($sql)
    {
        $mysql = new SaeMysql(); //new一个mysql操作数据库类
        $data = $mysql->getData($sql);
        return $data;
    }

    public function GoSql($sql)
    {
        $mysql = new SaeMysql(); //new一个mysql操作数据库类
        $result = $mysql->runSql($sql);
        return $result;
    }

    public function GetData($tablename, $where, $value)
    {
        $mysql = new SaeMysql(); //new一个mysql操作数据库类
        $sql = "select * from " . $tablename;
        if ($where !== "null") {
            $sql = $sql . " where " . $where . '="' . $value . '"';
        }
        $data = $mysql->getData($sql);
        return $data;
    }

    public function GetDingDan($maxSize,$appendSize)
    {   
        $mysql=new SaeMysql();
        //如果最大页数为空，则计算出目前有多少数据
        if($maxSize=="null")
        {
             $sql="select * from DingDan";
             $allData = $mysql->getData($sql);
             $maxSize = count($allData);
        }
        $minSize= $maxSize-$appendSize;
        //如果当前查出来的数据已经是所有数据
        if($minSize<=0)
        {
            $appendSize=$appendSize+$minSize;
            $minSize=0;
            $ismin=1;
        }
        else
        {
            $ismin=0;
        }
        $sql="select * from DingDan order by cjsj asc limit $minSize,$appendSize";
        $data = $mysql->getData($sql);
        
         $result ='{"data":'.json_encode($data).',"maxSize":'.$maxSize.',"minSize":'.$minSize.',"isall":'.$ismin.'}';
         return $result;
    }
    public function CheckNewDingDan($maxSize){
        if($maxSize!="null")
        {
            $mysql=new SaeMysql();
            $sql="select * from DingDan";
            $allData = $mysql->getData($sql);
            $NewMaxSize = count($allData);
            if($NewMaxSize>$maxSize)
            {
                return '1';    
            }
            else{
                return '0';
            }
        }
        return '0';
    }
    public function loginCheck($uname,$upass){
        $mysql=new SaeMysql();
        $sql=" select * from Admin_HT where uname='$uname' and upass='$upass' ";
        $data=$mysql->GetData($sql);
        return $data;
    }
    public  function CheckLogin($uname,$upass)
    {
        $mysql=new SaeMysql();
        $sql = "select * from Admin_HT WHERE uname = '".$uname."' AND upass = '".$upass."'" ;
        $data = $mysql->getData($sql);
        return $data;
    }
    public function confirmGo($dd_id){
        $mysql=new SaeMysql();
        $sql="update DingDan set ZhuangTai='上门中' where dd_id='$dd_id'";
        $data=$mysql->runSql($sql);
        return $data;
    }
    public function pay($dd_id){
        $mysql=new SaeMysql();
        $sql="update DingDan set isfukuan='1' where dd_id='$dd_id'";
        $data=$mysql->runSql($sql);
        return $data;
    }
}