define(['controllers/controllers'],  
	function (controllers) {  
		controllers.controller('conPageConfig',function($scope,$http){
        //post请求地址
        $scope.BaseUrl="http://1.pandemo.applinzi.com/YiXiu_Manager/";
        var urlSub=$scope.BaseUrl+"Active/SubmitModel.php";

        //加载界面数据****
        $scope.loadCourses=function(){
            //$scope.ActUrl=$scope.BaseUrl+"Active/Query.php?currentPage="+$scope.paginationConf.currentPage+"&itemsPerPage="+$scope.paginationConf.itemsPerPage+"&ZhuangTai="+$scope.cx_zt==undefined?"":$scope.cx_zt+"&jdr="+$scope.cx_jdr==undefined?"":$scope.cx_jdr+"&bianhao="+$scope.cx_bianhao==undefined?"":$scope.cx_jdr;
            $scope.ActUrl=$scope.BaseUrl+"Active/Query.php?pages=Ask";
            $http.get($scope.ActUrl).success(function(response){
                $scope.Ask=response.TableList;
            });
        }

        $scope.loadCourses();
        //加载界面数据完毕****

        //展示订单详情
        $scope.showAsk=function(obj,index){
        	$scope.dd=angular.copy(obj);
            // $scope.dd=obj;
        	$scope.edit=false;
            //给选中行赋予样式
            $scope.bg = [];
            $scope.bg[index]="active";
        };
        //启用修改
        $scope.editAsk=function(){
        	$scope.edit=true;
        	$scope.pMode="editAsk";
        };
        //启用新增
        $scope.addAsk=function(){
        	$scope.edit=true;
        	$scope.pMode="addAsk";
        	$scope.dd=null;
        };
        //删除订单
        $scope.delAsk=function(){
        	if(confirm("确定删除？"))
        	{
        		$scope.pMode="delAsk";
        		$scope.dd.pMode= $scope.pMode;
        		$http({
        			method  : 'POST',
        			url     : urlSub,
                    data    : $.param($scope.dd),  // pass in data as strings  {pMode:"delAskPL",Question:"pancong"}
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
        		.success(function(response) {
        			console.log(response);
        			if(response=="1")
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
    })
    })