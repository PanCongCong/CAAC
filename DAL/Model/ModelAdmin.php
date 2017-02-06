<?php
//用来包装班级信息的实体类
class ModelAdmin extends Model{

    var $data = array();
    //$match中，
    //type用来表示数据的类型（I表示整数， C表示是字符串）
    //name用来表示在数据库表中的字段名
    //null表示该字段的值是否准许为空
    //（数组中有"null"=>true表示是准许为空，否则不能为空）
    var $match = array("ID" => array("name"=>"ID", "type"=>"I", "null"=>true),
        "NAME" => array("name"=>"NAME", "type"=>"C"),
        "PWD" => array("name"=>"PWD", "type"=>"C", "null"=>true),
        "SFDL" => array("name"=>"SFDL", "type"=>"C", "null"=>true),
        "LX" => array("name"=>"LX", "type"=>"C", "null"=>true),
        "MC" => array("name"=>"MC", "type"=>"C", "null"=>true),
        "DZ" => array("name"=>"DZ", "type"=>"C", "null"=>true),
        "YJ" => array("name"=>"YJ", "type"=>"C", "null"=>true),
        "DH" => array("name"=>"DH", "type"=>"C", "null"=>true),
        "SFZZ" => array("name"=>"SFZZ", "type"=>"C", "null"=>true),
        "CSNY" => array("name"=>"CSNY", "type"=>"C", "null"=>true),
        "XB" => array("name"=>"XB", "type"=>"C", "null"=>true),
        "XL" => array("name"=>"XL", "type"=>"C", "null"=>true),
        "ZY" => array("name"=>"ZY", "type"=>"C", "null"=>true),
        "YWLY" => array("name"=>"YWLY", "type"=>"C", "null"=>true),
        "ZC" => array("name"=>"ZC", "type"=>"C", "null"=>true),
        "ZW" => array("name"=>"ZW", "type"=>"C", "null"=>true),
        "DW" => array("name"=>"DW", "type"=>"C", "null"=>true),
        "JL" => array("name"=>"JL", "type"=>"C", "null"=>true),
        "QYLX" => array("name"=>"QYLX", "type"=>"C", "null"=>true),
        "LXR" => array("name"=>"LXR", "type"=>"C", "null"=>true),
        "TBZT1" => array("name"=>"TBZT1", "type"=>"I", "null"=>true),
        "TBZT2" => array("name"=>"TBZT2", "type"=>"I", "null"=>true),
        "TBZT3" => array("name"=>"TBZT3", "type"=>"I", "null"=>true),
        "TBZT4" => array("name"=>"TBZT4", "type"=>"I", "null"=>true),
        "TBZT5" => array("name"=>"TBZT5", "type"=>"I", "null"=>true),
        "FZCS" => array("name"=>"FZCS", "type"=>"C", "null"=>true)
    );

    var $table = "T_Admin";
    var $primary = "ID";

    //初始化
    function ModelAdmin(&$data){
        parent::Model($data);
    }
}
?>