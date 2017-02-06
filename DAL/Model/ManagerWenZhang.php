<?php
//学生信息实体的管理类
class ManagerWenZhang extends Manager{
    //初始化
    function ManagerWenZhang(){
        parent::Manager();
    }
    //获取订单列表
    //第一个参数为当前所在页
    //第二个参数为每页显示多少数据
    function &getTZGGList($size,$lx){
        
        if(is_numeric($size) && is_int($size+0))
        {
            $sql="select top $size * from T_WenZhang where LX='$lx' order by cjsj desc ";
        }
        else
        {
            $sql="select * from T_WenZhang where LX='$lx' order by cjsj desc ";
        }
        $data=$this->db->query($sql);
        $data=json_encode($data);
        $result='{"TableList":'.$data.'}';
       return $result;
    }
}
?>