<?php
//对实体信息进行管理的基础类
class Manager{
    //数据库管理类对象
    var $db;
    //初始化
    function Manager(){
        $this->db = new Db();
    }
    //用来向数据库中插入实体信息
    function insert($model){
        $model->isvalid();
        //表名
        $table = $model->table;
        //表中的所有字段
        $match = $model->getMatch();
        //实体中的数据
        $data = $model->getData();
        //表中的主键（自增长，不用赋值）
        $primary=$model->primary;

        $str1 = $str2 = array();
        foreach($match as $key=>$value){
            if(isset($data[$key])&&$key!=$primary){
                $str1[] = $key;
                $str2[] = "'". $data[$key]."'";
               // $str2[] = ($value["type"]=="C")? "/".$data[$key]."/": $data[$key];
            }
        }
       $sql = "INSERT INTO $table (".implode(",", $str1).") VALUES(".implode(",", $str2).")";
       return $this->db->execute($sql);
    }
    //更新实体
    function update($model){

        $model->isvalid();
        $table = $model->table;
        $primary=$model->primary;
        $primaryValue=$model->get($primary);
        $match = $model->getMatch();
        $data = $model->getData();
        $str="";
        foreach($match as $key=>$value){
            if(($data[$key]==""||$data[$key]==null)&&$match[$key]["null"]==false)
            {
                continue;
            }
            if(isset($data[$key])&&$key!=$primary){
                $str=$str." $key='$data[$key]',";
            }
        }
        $str=rtrim($str, ",");
        $sql = "update $table set $str where $primary=$primaryValue";
        // return $sql;
        return $this->db->execute($sql);
    }
    //更新实体
    function del($model){
        $table = $model->table;
        $primary=$model->primary;
        $primaryValue=$model->get($primary);

        $sql = "delete from $table where $primary=$primaryValue";
        return $this->db->execute($sql);
    }
    //查询实体数据
    function getList($table,$term){
        $sql = "SELECT * FROM $table ";
        $flag=false;
        $where=" where ";
        for($i=0;$i<count($term);$i++)
        {
            if($term[$i]["val"]!="")
            {
                if($flag)
                {
                    $where=$where." and ".$term[$i]["key"]."='".$term[$i]["val"]."'";
                }
                else
                {
                    $where=$where." ".$term[$i]["key"]."='".$term[$i]["val"]."'";
                }
                $flag=true;
            }
        }
        if($flag){
            $sql=$sql.$where;
        }
        $data= $this->db->query($sql);
        $data=json_encode($data);
        $result='{"TableList":'.$data.'}';
        return $result;
    }
}
?>