<?php
//用来包装信息实体的基础类
class Model{
    //这个实体类的数据，
    //example: array("id"=>1, "name"=>"this is name");
    var $data;
    //这个实体类的数据约束信息，用来判断加入的$data数据的准确性
    //see: ClassModel
    var $match;
    //与该实体对应的数据库中表的名称
    var $table;
    //与该实体对应的数据库中表的主键
    var $primary;
    //初始化
    function Model(&$data){
        $this->data = &$data;
    }
    //设置该实体的某个数据是值
    function set($key, $value){
        $this->data[$key] = $value;
    }
    //获取该实体的某个数据
    function get($key){
        return $this->data[$key];
    }
    //获取该实体的全部数据
    function getData(){
        return $this->data;
    }
    //获取该实体的约束信息
    function getMatch(){
        return $this->match;
    }
    //验证实体数据的准确性和完整性
    function isValid(){
        // foreach($this->match as $key=>$value){
        //     if(!isset($value["null"]) && !isset($this->data[$key])) die("$key 的数值不能为空");
        //     //.....可以在加其他的判断，例如是否超过如许的最大数值，或长度过长.....
        // }
    }
}
?>