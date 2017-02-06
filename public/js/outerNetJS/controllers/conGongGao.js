define(['controllers/controllers'],  
	function (controllers) {  
		controllers.controller('conGongGao',function($scope,$http){
        //post请求地址
        $scope.BaseUrl="http://1.pandemo.applinzi.com/YiXiu_Manager/";
        var urlSub=$scope.BaseUrl+"Active/SubmitModel.php";
        //加载界面数据
        $scope.loadCourses=function(){
            //$scope.ActUrl=$scope.BaseUrl+"Active/Query.php?currentPage="+$scope.paginationConf.currentPage+"&itemsPerPage="+$scope.paginationConf.itemsPerPage+"&ZhuangTai="+$scope.cx_zt==undefined?"":$scope.cx_zt+"&jdr="+$scope.cx_jdr==undefined?"":$scope.cx_jdr+"&bianhao="+$scope.cx_bianhao==undefined?"":$scope.cx_jdr;
            $scope.ActUrl=$scope.BaseUrl+"Active/Query.php?&pages=GongGao";
            $http.get($scope.ActUrl).success(function(response){$scope.dd=response.TableList[0]});
        }
        $scope.ActUrl=$scope.BaseUrl+"Active/Query.php?&pages=GongGao";
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
    })