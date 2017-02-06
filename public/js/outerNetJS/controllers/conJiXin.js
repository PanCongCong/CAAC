define(['controllers/controllers'],  
	function (controllers) {  
		controllers.controller('conJiXin',function($scope,$http){
			$scope.ShowSJPP=false;
			$scope.ShowSJXH=false;
			$scope.Edit=false;
			$scope.btn_mode="编辑";
        //post请求地址
        $scope.BaseUrl="http://1.pandemo.applinzi.com/YiXiu_Manager/";
        var urlSub=$scope.BaseUrl+"Active/SubmitModel.php";
        //加载界面数据
        $scope.loadCourses=function(){
            //$scope.ActUrl=$scope.BaseUrl+"Active/Query.php?currentPage="+$scope.paginationConf.currentPage+"&itemsPerPage="+$scope.paginationConf.itemsPerPage+"&ZhuangTai="+$scope.cx_zt==undefined?"":$scope.cx_zt+"&jdr="+$scope.cx_jdr==undefined?"":$scope.cx_jdr+"&bianhao="+$scope.cx_bianhao==undefined?"":$scope.cx_jdr;
            $scope.ActUrl=$scope.BaseUrl+"Active/Query.php?&pages=JiXin";
            $http.get($scope.ActUrl).success(
            	function(response){
            		$scope.SJXH=response.TableList2;
            		$scope.SJPP=response.TableList;
            	}
            	);
        };
        //加载数据，此处有bug，若直接使用$scope.$appply(loadCourses)方式不会出现正确效果，待研究。
        $scope.ActUrl=$scope.BaseUrl+"Active/Query.php?&pages=JiXin";
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
})