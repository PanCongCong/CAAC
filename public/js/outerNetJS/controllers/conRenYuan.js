define(['controllers/controllers'],  
	function (controllers) {  
		controllers.controller('conRenYuan',function($scope,$http){
        //post请求地址
        $scope.BaseUrl="http://1.pandemo.applinzi.com/YiXiu_Manager/";
        var urlSub=$scope.BaseUrl+"Active/SubmitModel.php";
        //加载界面数据
        $scope.loadCourses=function(){
            //获取人员信息列表
            $scope.ActUrl=$scope.BaseUrl+"Active/Query.php?&pages=RenYuan&currentPage="+$scope.paginationConf.currentPage+"&itemsPerPage="+$scope.paginationConf.itemsPerPage;
            $http.get($scope.ActUrl).success(function(response){$scope.dataList=response.TableList;$scope.paginationConf.totalItems=response.pagesize});
            //获取校园信息列表，用于绑定下拉选择
            $scope.ActUrl=$scope.BaseUrl+"Active/Query.php?&pages=XiaoYuan";
            $http.get($scope.ActUrl).success(function(response){$scope.schools=response.TableList;console.log($scope.schools)});
            //获取城市信息列表，用于绑定下拉选择
            $scope.ActUrl=$scope.BaseUrl+"Active/lib/division.php";
            $http.get($scope.ActUrl).success(function(response){$scope.division=response});
        };
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
    })