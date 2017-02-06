define(['controllers/controllers'],  
    function (controllers) {  
        controllers.controller('homeController', ['$scope', 'homeService',  
         function ($scope, homeService) {  
          
             $scope.resultValue = homeService.Post(  
                 [{  
                     "QuoteNo": "11111",  
                     "OrgZ": "洲",  
                     "OrgG": "国",  
                     "Sales": "admin",  
                     "ContractNo": "20140805000",  
                     "FeeNos": "11|22|33|44"  
                 }], function () {  
                     alert($scope.resultValue.Msg);  
                 }  
                 );  
         }  
         ]);  
    });  



/**
 * Created by admin on 2016/7/28.
 */
/*
 angular.module('homeApp',['ngRoute','tm.pagination','ngKeditor'])
 .controller('dingdanCon',function($scope,$http){
    // $scope.arrColor={"提交订单":"bg-danger",""};
    $scope.flag=false;
    $scope.cx_zt="";
    $scope.cx_jdr="";
    $scope.cx_bianhao="";
        //post请求地址
        var urlSub="http://1.pandemo.applinzi.com/Active/SubmitModel.php";
        $scope.$watch("cx_zt",function(){
            if($scope.cx_zt!="")
            {
                $scope.flag=true;
            }
            if($scope.flag)
            {
                $scope.$apply($scope.loadCourses());
            }

        });
        $scope.$watch("cx_jdr",function(){
            if($scope.cx_jdr!="")
            {
                $scope.flag=true;
            }
            if($scope.flag)
            {
                $scope.$apply($scope.loadCourses());
            }

        });
        $scope.$watch("cx_bianhao",function(){
            if($scope.cx_bianhao!="")
            {
                $scope.flag=true;
            }
            if($scope.flag)
            {
                $scope.$apply($scope.loadCourses());
            }
        });
        //加载界面数据
        $scope.loadCourses=function(){
             //$scope.ActUrl="http://1.pandemo.applinzi.com/Active/Query.php?currentPage="+$scope.paginationConf.currentPage+"&itemsPerPage="+$scope.paginationConf.itemsPerPage+"&ZhuangTai="+$scope.cx_zt==undefined?"":$scope.cx_zt+"&jdr="+$scope.cx_jdr==undefined?"":$scope.cx_jdr+"&bianhao="+$scope.cx_bianhao==undefined?"":$scope.cx_jdr;
             $scope.ActUrl="http://1.pandemo.applinzi.com/Active/Query.php?&pages=DingDan&currentPage="+$scope.paginationConf.currentPage+"&itemsPerPage="+$scope.paginationConf.itemsPerPage;
             if($scope.cx_zt!="全部"&&$scope.cx_zt!="")
             {
                $scope.ActUrl=$scope.ActUrl+"&ZhuangTai="+$scope.cx_zt;
            }
            if($scope.cx_jdr!="")
            {
                $scope.ActUrl=$scope.ActUrl+"&jdr="+$scope.cx_jdr;
            }
            if($scope.cx_bianhao!="")
            {
                $scope.ActUrl=$scope.ActUrl+"&bianhao="+$scope.cx_bianhao;
            }
            $http.get($scope.ActUrl).success(function(response){$scope.dingdan=response.TableList;$scope.paginationConf.totalItems=response.pagesize});
        }
        $scope.ChaXun=function(){
            $scope.$apply($scope.loadCourses());
        }
        //展示订单详情
        $scope.showDingDan=function(obj,index){
            $scope.dd=angular.copy(obj);

            $scope.edit=false;
            //给选中行赋予样式
            $scope.bg = [];
            $scope.bg[index]="active"
            $scope.dd.smsj=$scope.dd.smsj.substr(0,10);
        };
        //启用修改
        $scope.editDingDan=function(){
            $scope.edit=true;
            $scope.pMode="editDingDan";
        };
        //启用新增
        $scope.addDingDan=function(){
            $scope.edit=true;
            $scope.pMode="addDingDan";
            $scope.dd=null;
        };
        //删除订单
        $scope.delDingDan=function(){
            if(confirm("确定删除？"))
            {
                $scope.pMode="delDingDan";
                $scope.dd.pMode= $scope.pMode;
                $http({
                    method  : 'POST',
                    url     : urlSub,
                    data    : $.param($scope.dd),  // pass in data as strings
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
                })
                .success(function(data) {
                    console.log(data);
                    if(data=="1")
                    {
                        $scope.edit=false;
                        alert("删除成功");
                        $scope.$apply($scope.loadCourses());

                    }
                });
            }
            
        };
        $scope.formatDate=function (date) {  
            var y = date.getFullYear();  
            var m = date.getMonth() + 1;  
            m = m < 10 ? '0' + m : m;  
            var d = date.getDate();  
            d = d < 10 ? ('0' + d) : d;  
            return y + '-' + m + '-' + d;  
        };  
        //保存修改、新增
        $scope.submit_save=function(){
            $scope.dd.pMode= $scope.pMode;

            $scope.dd.smsj = $scope.formatDate($scope.dd.smsj);

            $http({
                method  : 'POST',
                url     : urlSub,
                data    : $.param($scope.dd),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
            .success(function(data) {
                console.log(data);
                if(data=="1")
                {
                    $scope.edit=false;
                    alert("修改成功");
                    $scope.$apply($scope.loadCourses());
                }
            });

        };
        $scope.paginationConf = {
            currentPage: 1,
            totalItems:100 ,
            itemsPerPage: 10,
            pagesLength: 10,
            perPageOptions: [10, 20, 30, 40, 50],
            rememberPerPage: 'perPageItems',
            onChange: function(){
                $scope.loadCourses();
            }
        };
    })
.controller('xiaoyuanCon',function($scope,$http){
        //post请求地址
        var urlSub="http://1.pandemo.applinzi.com/Active/SubmitModel.php";
        //加载界面数据
        $scope.loadCourses=function(){
            //$scope.ActUrl="http://1.pandemo.applinzi.com/Active/Query.php?currentPage="+$scope.paginationConf.currentPage+"&itemsPerPage="+$scope.paginationConf.itemsPerPage+"&ZhuangTai="+$scope.cx_zt==undefined?"":$scope.cx_zt+"&jdr="+$scope.cx_jdr==undefined?"":$scope.cx_jdr+"&bianhao="+$scope.cx_bianhao==undefined?"":$scope.cx_jdr;
            $scope.ActUrl="http://1.pandemo.applinzi.com/Active/Query.php?&pages=XiaoYuan&currentPage="+$scope.paginationConf.currentPage+"&itemsPerPage="+$scope.paginationConf.itemsPerPage;
            $http.get($scope.ActUrl).success(function(response){$scope.xiaoyuan=response.TableList;$scope.paginationConf.totalItems=response.pagesize});
        }
        //展示订单详情
        $scope.showXiaoYuan=function(obj,index){
            $scope.dd=angular.copy(obj);;
            $scope.edit=false;
            //给选中行赋予样式
            $scope.bg = [];
            $scope.bg[index]="active"
        };
        //启用修改
        $scope.editXiaoYuan=function(){
            $scope.edit=true;
            $scope.pMode="editXiaoYuan";
        };
        //启用新增
        $scope.addXiaoYuan=function(){
            $scope.edit=true;
            $scope.pMode="addXiaoYuan";
            $scope.dd=null;
        };
        //删除订单
        $scope.delXiaoYuan=function(){
            if(confirm("确定删除？"))
            {
                $scope.pMode="delXiaoYuan";
                $scope.dd.pMode= $scope.pMode;
                $http({
                    method  : 'POST',
                    url     : urlSub,
                data    : $.param($scope.dd),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
                .success(function(data) {
                    console.log(data);
                    if(data=="1")
                    {
                        $scope.edit=false;
                        alert("删除成功");
                        $scope.$apply($scope.loadCourses());

                    }
                });
            }
        };
        //保存修改、新增
        $scope.submit_save=function(){
            $scope.dd.pMode= $scope.pMode;
            $http({
                method  : 'POST',
                url     : urlSub,
                data    : $.param($scope.dd),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
            .success(function(data) {
                console.log(data);
                if(data=="1")
                {
                    $scope.edit=false;
                    alert("修改成功");
                    $scope.$apply($scope.loadCourses());
                }
            });

        };
        $scope.paginationConf = {
            currentPage: 1,
            totalItems:100 ,
            itemsPerPage: 10,
            pagesLength: 10,
            perPageOptions: [10, 20, 30, 40, 50],
            rememberPerPage: 'perPageItems',
            onChange: function(){
                $scope.loadCourses();
            }
        };
    })
.controller('jixinCon',function($scope,$http){
    $scope.ShowSJPP=false;
    $scope.ShowSJXH=false;
    $scope.Edit=false;
    $scope.btn_mode="编辑";
        //post请求地址
        var urlSub="http://1.pandemo.applinzi.com/Active/SubmitModel.php";
        //加载界面数据
        $scope.loadCourses=function(){
            //$scope.ActUrl="http://1.pandemo.applinzi.com/Active/Query.php?currentPage="+$scope.paginationConf.currentPage+"&itemsPerPage="+$scope.paginationConf.itemsPerPage+"&ZhuangTai="+$scope.cx_zt==undefined?"":$scope.cx_zt+"&jdr="+$scope.cx_jdr==undefined?"":$scope.cx_jdr+"&bianhao="+$scope.cx_bianhao==undefined?"":$scope.cx_jdr;
            $scope.ActUrl="http://1.pandemo.applinzi.com/Active/Query.php?&pages=JiXin";
            $http.get($scope.ActUrl).success(
                function(response){
                    $scope.SJXH=response.TableList2;
                    $scope.SJPP=response.TableList;
                }
                );
        };
        //加载数据，此处有bug，若直接使用$scope.$appply(loadCourses)方式不会出现正确效果，待研究。
        $scope.ActUrl="http://1.pandemo.applinzi.com/Active/Query.php?&pages=JiXin";
        $http.get($scope.ActUrl).success(
            function(response){
                $scope.SJXH=response.TableList2;
                $scope.SJPP=response.TableList;
            }
            );
        //控制界面是否启用编辑
        $scope.showEdit=function() {
            if($scope.Edit==false)
            {
                $scope.Edit=true;
                $scope.btn_mode="退出编辑"; 
            }
            else
            {
                $scope.Edit=false;
                $scope.btn_mode="编辑"; 
            }
        }
        //*************手机品牌操作相关
        $scope.showAddSJPP=function() {
            $scope.ShowSJPP=true;
            $scope.pMode="addSJPP";
        };
        $scope.showEditSJPP=function(SJPP) {
            $scope.ShowSJPP=true;
            $scope.sjpp=angular.copy(SJPP);
            $scope.pMode="editSJPP";
        }
        $scope.closeSJPP=function() {
            $scope.ShowSJPP=false;
        }
        $scope.saveSJPP=function() {
            $scope.sjpp.pMode=$scope.pMode;
            console.log($scope.sjpp);
            $http({
                method  : 'POST',
                url     : urlSub,
                data    : $.param($scope.sjpp),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
            .success(function(data) {
                console.log(data);
                if(data=="1")
                {
                    $scope.edit=false;
                    $scope.ShowSJPP=true;
                    alert("保存成功");
                    $scope.$apply($scope.loadCourses());

                }
            });
        }
        $scope.delSJPP=function(SJPP) {
            if(confirm("确定删除？"))
            {
               SJPP.pMode="delSJPP";
               $http({
                method  : 'POST',
                url     : urlSub,
                data    : $.param(SJPP),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
               .success(function(data) {
                console.log(data);
                if(data=="1")
                {
                    alert("删除成功");
                    $scope.$apply($scope.loadCourses());
                }
            });
           }

       }
        //*************手机型号操作相关
        $scope.showAddSJXH=function(SJPP) {
            $scope.ShowSJXH=true;
            $scope.pMode="addSJXH";
            $scope.sjxh={};
            $scope.sjxh.sjpp=SJPP.sjpp_name;
            $scope.sjxh.sjpp_id=SJPP.dd_id;
        };
        $scope.showEditSJXH=function(SJXH,SJPP) {
            $scope.ShowSJXH=true;
            $scope.sjxh=angular.copy(SJXH);
            $scope.sjxh.sjpp=SJPP.sjpp_name;
            $scope.sjxh.sjpp_id=SJPP.dd_id;
            $scope.pMode="editSJXH";
        }
        $scope.closeSJXH=function() {
            $scope.ShowSJXH=false;
        }
        $scope.saveSJXH=function() {
            $scope.sjxh.pMode=$scope.pMode;
            console.log($scope.sjxh);
            $http({
                method  : 'POST',
                url     : urlSub,
                data    : $.param($scope.sjxh),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
            .success(function(data) {
                console.log(data);
                if(data=="1")
                {
                    $scope.edit=false;
                    $scope.ShowSJXH=false;
                    alert("保存成功");
                    $scope.$apply($scope.loadCourses());
                    $scope.ShowSJXH=false;
                }
            });
        }
        $scope.delSJXH=function(SJXH) {
            if(confirm("确定删除？"))
            {
                SJXH.pMode="delSJXH";
                $http({
                    method  : 'POST',
                    url     : urlSub,
                data    : $.param(SJXH),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
                .success(function(data) {
                    console.log(data);
                    if(data=="1")
                    {
                        alert("删除成功");
                        $scope.$apply($scope.loadCourses());

                    }
                });
            }
            
        }
    })
.controller('gonggaoCon',function($scope,$http){
        //post请求地址
        var urlSub="http://1.pandemo.applinzi.com/Active/SubmitModel.php";
        //加载界面数据
        $scope.loadCourses=function(){
            //$scope.ActUrl="http://1.pandemo.applinzi.com/Active/Query.php?currentPage="+$scope.paginationConf.currentPage+"&itemsPerPage="+$scope.paginationConf.itemsPerPage+"&ZhuangTai="+$scope.cx_zt==undefined?"":$scope.cx_zt+"&jdr="+$scope.cx_jdr==undefined?"":$scope.cx_jdr+"&bianhao="+$scope.cx_bianhao==undefined?"":$scope.cx_jdr;
            $scope.ActUrl="http://1.pandemo.applinzi.com/Active/Query.php?&pages=GongGao";
            $http.get($scope.ActUrl).success(function(response){$scope.dd=response.TableList[0]});
        }
        $scope.ActUrl="http://1.pandemo.applinzi.com/Active/Query.php?&pages=GongGao";
        $http.get($scope.ActUrl).success(function(response){$scope.dd=response.TableList[0];console.log($scope.dd)});

        //保存修改、新增
        $scope.submit_save=function(){
            $scope.dd.pMode= "editGongGao";
            $http({
                method  : 'POST',
                url     : urlSub,
                data    : $.param($scope.dd),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
            .success(function(data) {
                console.log(data);
                if(data=="1")
                {
                    $scope.edit=false;
                    alert("修改成功");
                    $scope.$apply($scope.loadCourses());
                }
            });

        };
    })
.controller('renyuanCon',function($scope,$http){
        //post请求地址
        var urlSub="http://1.pandemo.applinzi.com/Active/SubmitModel.php";
        //加载界面数据
        $scope.loadCourses=function(){
            //$scope.ActUrl="http://1.pandemo.applinzi.com/Active/Query.php?currentPage="+$scope.paginationConf.currentPage+"&itemsPerPage="+$scope.paginationConf.itemsPerPage+"&ZhuangTai="+$scope.cx_zt==undefined?"":$scope.cx_zt+"&jdr="+$scope.cx_jdr==undefined?"":$scope.cx_jdr+"&bianhao="+$scope.cx_bianhao==undefined?"":$scope.cx_jdr;
            $scope.ActUrl="http://1.pandemo.applinzi.com/Active/Query.php?&pages=RenYuan&currentPage="+$scope.paginationConf.currentPage+"&itemsPerPage="+$scope.paginationConf.itemsPerPage;
            $http.get($scope.ActUrl).success(function(response){$scope.dataList=response.TableList;$scope.paginationConf.totalItems=response.pagesize});

            $scope.ActUrl="http://1.pandemo.applinzi.com/Active/Query.php?&pages=XiaoYuan";
            $http.get($scope.ActUrl).success(function(response){$scope.schools=response.TableList;console.log($scope.schools)});
        }
        //展示订单详情
        $scope.showRenYuan=function(obj,index){
            $scope.dd=angular.copy(obj);;
            $scope.edit=false;
            //给选中行赋予样式
            $scope.bg = [];
            $scope.bg[index]="active"
        };
        //启用修改
        $scope.editRenYuan=function(){
            $scope.edit=true;
            $scope.pMode="editRenYuan";
        };
        //启用新增
        $scope.addRenYuan=function(){
            $scope.edit=true;
            $scope.pMode="addRenYuan";
            $scope.dd=null;
        };
        //删除订单
        $scope.delRenYuan=function(){
            if(confirm("确定删除？"))
            {
                $scope.pMode="delRenYuan";
                $scope.dd.pMode= $scope.pMode;
                $http({
                    method  : 'POST',
                    url     : urlSub,
                data    : $.param($scope.dd),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
                .success(function(data) {
                    console.log(data);
                    if(data=="1")
                    {
                        $scope.edit=false;
                        alert("删除成功");
                        $scope.$apply($scope.loadCourses());

                    }
                });
            }
        };
        //保存修改、新增
        $scope.submit_save=function(){
            $scope.dd.pMode= $scope.pMode;
            $http({
                method  : 'POST',
                url     : urlSub,
                data    : $.param($scope.dd),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
            .success(function(data) {
                console.log(data);
                if(data=="1")
                {
                    $scope.edit=false;
                    alert("修改成功");
                    $scope.$apply($scope.loadCourses());
                }
            });

        };
        $scope.paginationConf = {
            currentPage: 1,
            totalItems:100 ,
            itemsPerPage: 10,
            pagesLength: 10,
            perPageOptions: [10, 20, 30, 40, 50],
            rememberPerPage: 'perPageItems',
            onChange: function(){
                $scope.loadCourses();
            }
        };
    })
.controller('dongtaiCon',function($scope,$http){
    $scope.strFL=["关于我们","热门评论","服务条款","售后政策","常见问题","逸修动态","热门资讯","手机知识"];
    $scope.edit=false;
    $scope.content="111";
        //post请求地址
        var urlSub="http://1.pandemo.applinzi.com/Active/SubmitModel.php";
        //加载界面数据
        $scope.loadCourses=function(){
            //$scope.ActUrl="http://1.pandemo.applinzi.com/Active/Query.php?currentPage="+$scope.paginationConf.currentPage+"&itemsPerPage="+$scope.paginationConf.itemsPerPage+"&ZhuangTai="+$scope.cx_zt==undefined?"":$scope.cx_zt+"&jdr="+$scope.cx_jdr==undefined?"":$scope.cx_jdr+"&bianhao="+$scope.cx_bianhao==undefined?"":$scope.cx_jdr;
            $scope.ActUrl="http://1.pandemo.applinzi.com/Active/Query.php?&pages=DongTai&currentPage="+$scope.paginationConf.currentPage+"&itemsPerPage="+$scope.paginationConf.itemsPerPage;
            $http.get($scope.ActUrl).success(function(response){$scope.dataList=response.TableList;$scope.paginationConf.totalItems=response.pagesize});
        }
        //展示订单详情
        $scope.showDongTai=function(obj,index){
            $scope.dd=angular.copy(obj);;
            $scope.edit=false;
            //给选中行赋予样式
            $scope.bg = [];
            $scope.bg[index]="active"
        };
        //启用修改
        $scope.editDongTai=function(){
            $scope.edit=true;
            $scope.pMode="editDongTai";
        };
        //启用新增
        $scope.addDongTai=function(){
            $scope.edit=true;
            $scope.pMode="addDongTai";
            $scope.dd=null;
        };
        //删除订单
        $scope.delDongTai=function(){
         if(confirm("确定删除？"))
         {
            $scope.pMode="delDongTai";
            $scope.dd.pMode= $scope.pMode;
            $http({
                method  : 'POST',
                url     : urlSub,
                data    : $.param($scope.dd),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
            .success(function(data) {
                console.log(data);
                if(data=="1")
                {
                    $scope.edit=false;
                    alert("删除成功");
                    $scope.$apply($scope.loadCourses());

                }
            });
        }

    };
        //保存修改、新增
        $scope.submit_save=function(){
            $scope.dd.pMode= $scope.pMode;
            $http({
                method  : 'POST',
                url     : urlSub,
                data    : $.param($scope.dd),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
            .success(function(data) {
                console.log(data);
                if(data=="1")
                {
                    $scope.edit=false;
                    alert("修改成功");
                    $scope.$apply($scope.loadCourses());
                }
            });

        };
        $scope.paginationConf = {
            currentPage: 1,
            totalItems:100 ,
            itemsPerPage: 10,
            pagesLength: 10,
            perPageOptions: [10, 20, 30, 40, 50],
            rememberPerPage: 'perPageItems',
            onChange: function(){
                $scope.loadCourses();
            }
        };
    })
.config(function($routeProvider){
    $routeProvider.when(
        '/dingdan',{
            templateUrl:"dingdan.html",
            controller:"dingdanCon"
        }
        ).when(
        '/jixin',{
            templateUrl:"jixin.html",
            controller:"jixinCon"
        }
        ).when(
        '/xiaoyuan',{
            templateUrl:"xiaoyuan.html",
            controller:"xiaoyuanCon"
        }
        ).when(
        '/gonggao',{
            templateUrl:"gonggao.html",
            controller:"gonggaoCon"
        }
        ).when(
        '/renyuan',{
            templateUrl:"renyuan.html",
            controller:"renyuanCon"
        }
        ).when(
        '/dongtai',{
            templateUrl:"dongtai.html",
            controller:"dongtaiCon"
        }
        )
        // .when(
        //     '/pageConfig',{
        //         templateUrl:"pageConfig.html",
        //         controller:"pageConfigCon"
        //     }
        // )
    });
    */
