define(['controllers/controllers'],  
	function (controllers) {  
		controllers.controller('conDingDan',function($scope,$http){
    // $scope.arrColor={"提交订单":"bg-danger",""};
    $scope.flag=false;
    $scope.cx_zt="";
    $scope.cx_jdr="";
    $scope.cx_bianhao="";
    $scope.BaseUrl="http://1.pandemo.applinzi.com/YiXiu_Manager/";
        //获取城市信息列表，用于绑定下拉选择
        $scope.loadCity=function(){
            $scope.ActUrl=$scope.BaseUrl+"Active/lib/division.php";
            $http.get($scope.ActUrl).success(function(response){$scope.division=response;console.log("111");});
        }
        $scope.loadCity();

        //获取人员信息列表，用于绑定下拉选择
        $scope.loadRenYuan=function(){
            $scope.ActUrl=$scope.BaseUrl+"Active/Query.php?&pages=WeiXiuYuan";
            $http.get($scope.ActUrl).success(function(response){$scope.jdrData=response.TableList;});
        }
        $scope.loadRenYuan();


        //post请求地址
        var urlSub=$scope.BaseUrl+"Active/SubmitModel.php";
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
             $scope.ActUrl=$scope.BaseUrl+"Active/Query.php?&pages=DingDan&currentPage="+$scope.paginationConf.currentPage+"&itemsPerPage="+$scope.paginationConf.itemsPerPage;
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
        };

        //分配订单
        $scope.closeFP=function(){
            $scope.showFP=false;
        };
        $scope.FPDingDan=function(){
            $scope.pMode="FenPeiDingDan";
            $scope.dd.pMode= $scope.pMode;

            $scope.j=eval("("+$scope.jdrObj+")");

            $scope.dd.jdr=$scope.j.uname;
            $scope.dd.jdr_id=$scope.j.admin_id;
            $scope.dd.jdrsjh=$scope.j.sjh;
            $scope.dd.smsj = $scope.formatDate($scope.dd.smsj);
            $http({
                method  : 'POST',
                url     : urlSub,
                    data    : $.param($scope.dd),  // pass in data as strings
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
                })
            .success(function(data) {
                console.log(data);
                alert("操作成功");
                $scope.$apply($scope.loadCourses());
            });
        };

        //确认出发
        $scope.chuFa=function(){
            $scope.pMode="ChuFa";
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
                alert("操作成功");
                $scope.$apply($scope.loadCourses());
            });

        };
        //关闭订单
        $scope.CloseDingDan=function(){
            $scope.pMode="CloseDingDan";
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
                alert("操作成功");
                $scope.$apply($scope.loadCourses());
            });

        }
        //展示订单详情
        $scope.showDingDan=function(obj,index){
            $scope.dd=angular.copy(obj);

            $scope.edit=false;
            //给选中行赋予样式
            $scope.bg = [];
            $scope.bg[index]="active";
            $scope.dd.smsj= new Date($scope.dd.smsj.substr(0,10));
            if($scope.dd!=null)
            {
                $scope.showGo=$scope.dd.ZhuangTai=="已接单"?true:false;
                $scope.showClose=$scope.dd.ZhuangTai=="上门中"?true:false;
                $scope.showFenPei=$scope.dd.ZhuangTai!="已完成"?true:false;
            }
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
})
