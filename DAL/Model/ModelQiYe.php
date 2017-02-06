<?php
//用来包装班级信息的实体类
class ModelQiYe extends Model{

    var $data = array();
    //$match中，
    //type用来表示数据的类型（I表示整数， C表示是字符串）
    //name用来表示在数据库表中的字段名
    //null表示该字段的值是否准许为空
    //（数组中有"null"=>true表示是准许为空，否则不能为空）
    var $match = array("ID" => array("name"=>"ID", "type"=>"I", "null"=>true),
        "pID" => array("name"=>"pID", "type"=>"C"),
        "TKBH" => array("name"=>"TKBH", "type"=>"C", "null"=>true),
        "ZL" => array("name"=>"ZL", "type"=>"C", "null"=>false),
        "SY" => array("name"=>"SY", "type"=>"C", "null"=>true),
        "YJZBXH" => array("name"=>"YJZBXH", "type"=>"I", "null"=>true),
        "YJZB" => array("name"=>"YJZB", "type"=>"C", "null"=>true),
        "EJZBXH" => array("name"=>"EJZBXH", "type"=>"I", "null"=>true),
        "EJZB" => array("name"=>"EJZB", "type"=>"C", "null"=>true),
        "TK" => array("name"=>"TK", "type"=>"C", "null"=>true),
        "BZ" => array("name"=>"BZ", "type"=>"C", "null"=>true),
        "TBSL" => array("name"=>"TBSL", "type"=>"C", "null"=>true),
        "ISJCY" => array("name"=>"ISJCY", "type"=>"I", "null"=>true),
        "ISWJ" => array("name"=>"ISWJ", "type"=>"I", "null"=>true),
        "ISYZ" => array("name"=>"ISYZ", "type"=>"I", "null"=>true),
        "JCYID" => array("name"=>"JCYID", "type"=>"C", "null"=>true),
        "JCYPF" => array("name"=>"JCYPF", "type"=>"C", "null"=>true),
        "WJZJID" => array("name"=>"WJZJID", "type"=>"I", "null"=>true),
        "WJSHPD" => array("name"=>"WJSHPD", "type"=>"C", "null"=>true),
        "WJSHDF" => array("name"=>"WJSHDF", "type"=>"I", "null"=>true),
        "XCZJID" => array("name"=>"XCZJID", "type"=>"I", "null"=>true),
        "XCYZJL" => array("name"=>"XCYZJL", "type"=>"C", "null"=>true),
        "XCYZDF" => array("name"=>"XCYZDF", "type"=>"I", "null"=>true),
        "PGPY" => array("name"=>"PGPY", "type"=>"C", "null"=>true)
    );

    var $table = "T_QiYe";
    var $primary = "ID";

    //初始化
    function ModelQiYe(&$data){
        parent::Model($data);
    }
}
?>