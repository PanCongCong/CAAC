<?php
//用来包装班级信息的实体类
class ModelQiYe_ZB extends Model{
    var $data = array();
    //$match中，
    //type用来表示数据的类型（I表示整数， C表示是字符串）
    //name用来表示在数据库表中的字段名
    //null表示该字段的值是否准许为空
    //（数组中有"null"=>true表示是准许为空，否则不能为空）
    var $match = array("ID" => array("name"=>"ID", "type"=>"I", "null"=>true),
        "pID" => array("name"=>"pID", "type"=>"C"),
        "FL" => array("name"=>"FL", "type"=>"C", "null"=>true),
        "PGPY" => array("name"=>"PGPY", "type"=>"C", "null"=>true)
    );

    var $table = "T_QiYe_ZB";
    var $primary = "ID";

    //初始化
    function ModelQiYe_ZB(&$data){
        parent::Model($data);
    }
}
?>