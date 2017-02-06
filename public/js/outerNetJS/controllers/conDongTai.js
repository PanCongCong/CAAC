define(['controllers/controllers'],  
	function (controllers) {  
		controllers.controller('conDongTai',function($scope,$http){
			$scope.strFL=["关于我们","热门评论","服务条款","售后政策","常见问题","逸修动态","热门资讯","手机知识"];
			$scope.edit=false;
			$scope.content="111";
        //post请求地址
        $scope.BaseUrl="http://1.pandemo.applinzi.com/YiXiu_Manager/";
        var urlSub=$scope.BaseUrl+"Active/SubmitModel.php";
        //加载界面数据
        $scope.loadCourses=function(){
            //$scope.ActUrl=$scope.BaseUrl+"Active/Query.php?currentPage="+$scope.paginationConf.currentPage+"&itemsPerPage="+$scope.paginationConf.itemsPerPage+"&ZhuangTai="+$scope.cx_zt==undefined?"":$scope.cx_zt+"&jdr="+$scope.cx_jdr==undefined?"":$scope.cx_jdr+"&bianhao="+$scope.cx_bianhao==undefined?"":$scope.cx_jdr;
            $scope.ActUrl=$scope.BaseUrl+"Active/Query.php?&pages=DongTai&currentPage="+$scope.paginationConf.currentPage+"&itemsPerPage="+$scope.paginationConf.itemsPerPage;
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
    })