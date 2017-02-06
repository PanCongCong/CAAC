<?php
//数据库操作管理类
class Db{
    function conser(){
        try{
            $db = new PDO("sqlsrv:Server=127.0.0.1,1433;Database=AQBZ","chenxi","chenxi");
        }catch(PDOException $e){
            echo "ERROR:".$e->getMessage();
        }
        if($db)
        {
            return $db;
        }
    }

    //数据库联接
    var $con;
    //初始化
    function Db(){

    }
    //执行数据查询语句
    function &query2($sql){
        $connection=$this->conser();
        $query=$connection->query($sql);
        $result='[';
        while($row = $query->fetch())
        {
            $result=$result.'{';
            foreach($row as $x=>$x_value)
            {
                //结果集中，会采用数字下标与字符下标两种方式体现数据，只需处理字符
                if(gettype($x)=="string")
                {
                    //坑，sqlserver返回的时间格式为DateTime对象，不确定有哪些属性
                    if(gettype($x_value)=="object")
                    {
                        $result=$result.'"'.$x.'":"';
                        //大坑，不转换直接访问对象属性会报错
                        var_export($x_value,true);
                        $result=$result.$x_value->date;
                    }
                    else
                    {
                        $result=$result.'"'.$x.'":"';
                        $result=$result.$x_value;
                    }
                    $result=$result.'",';
                }
            }
            $result= rtrim($result, ',');
            $result=$result.'},';
        }
        $result=rtrim($result, ',');
        $result=$result.']';
        return $result;
    }
    //执行数据查询语句
    function &query($sql){
        $connection=$this->conser();
        $query=$connection->query($sql);
        $result=array();
        
        while($row = $query->fetch())
        {
            // $one=object();
            // $str="{";
            $str=array();
            foreach($row as $x=>$x_value)
            {
                //结果集中，会采用数字下标与字符下标两种方式体现数据，只需处理字符
                if(gettype($x)=="string")
                {
                    //坑，sqlserver返回的时间格式为DateTime对象，不确定有哪些属性
                    if(gettype($x_value)=="object")
                    {
                        //大坑，不转换直接访问对象属性会报错
                        var_export($x_value,true);
                        // $one->$x=$x_value->date;
                        // $str=$str.'"'.$x.'":"'.$x_value->date.'",';
                        $str[$x]=$x_value->date;
                    }
                    else
                    {
                        // $one->$x=$x_value;
                        //  $str=$str.'"'.$x.'":"'.$x_value.'",';
                         $str[$x]=$x_value;
                    }
                }
            }
            // $str=rtrim($str, ',');
            // $str=$str."}";
            array_push($result,$str);
        }
        return $result;
    }
    function getQuery($sql)
    {
        $connection=$this->conser();
        $query=$connection->query($sql);
        return $query;
    }
    function &queryCount($sql){
        $connection=$this->conser();
        $query=$connection->query($sql);
        return $query->rowCount();
    }
    //获取一条数查询结果
    function getOne($sql){
        $connection=$this->conser();
        $result=$connection->query($sql);
        // sqlsrv_close( $conn);
        return $result[0];
    }
    //执行数据库更新/添加/删除语句
    function execute($sql){
        $connection=$this->conser();
        $result=$connection->exec($sql);
        // sqlsrv_close( $conn);
        return $result;
    }
}
?>