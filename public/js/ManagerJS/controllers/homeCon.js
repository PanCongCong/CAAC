define(['controllers/controllers'],
    function (controllers) {
        controllers.controller('homeCon',function ($scope,$http) {
            $scope.edit=false;
            $scope.bg = [];
            $scope.pMode;
            $scope.loadCourses= function () {
                $http.get("http://211.149.149.65:8080/AQBZ/Active/Query.php?pMode=getTZGG")
                    .success(function (res) {
                        $scope.lists = res.TableList;
                    });
            };
            $scope.loadCourses();

            $scope.formatDate=function (date) {
                var y = date.getFullYear();
                var m = date.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                var d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                return y + '-' + m + '-' + d;
            };

            $scope.add=function(){
                $scope.edit=true;
                $scope.pMode="addTZGGMX";
                $scope.dd=null;
                $scope.bg[index]="";
            };
            $scope.submit=function(){
                $scope.dd.pMode= $scope.pMode;
                $scope.dd.LX="1";
                $scope.dd.CJSJ=$scope.formatDate(new Date());

                $http({
                    method  : 'POST',
                    url     : 'http://211.149.149.65:8080/AQBZ/Active/SubmitModel.php',
                    data    : $.param($scope.dd),  // pass in data as strings
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
                })
                    .success(function(data) {
                        console.log(data);
                        if(data=="1"||data=="-1")
                        {
                            //$scope.lists.push($scope.dd);
                            //console.log($scope.lists);
                            $scope.edit=false;
                            alert("新增成功");
                            //$scope.$apply();
                            $scope.loadCourses();
                            $scope.dd=null;
                        }
                    });
            };

            $scope.showList=function(x,index){
                $scope.dd=angular.copy(x);

                $scope.bg[index]="active";
                console.log($scope.dd);
                $scope.edit=true;
                $scope.dd.CJSJ=$scope.formatDate(new Date());

            };

            $scope.editList=function(){
                $scope.edit=true;
                $scope.pMode="updateTZGGMX";

            };
            $scope.delete=function(){
                if($scope.dd==null){
                    alert("请选中行");
                };
                $scope.pMode="delTZGGMX";
                $scope.dd.pMode=$scope.pMode;
                $http({
                    method  : 'POST',
                    url     : 'http://211.149.149.65:8080/AQBZ/Active/SubmitModel.php',
                    data    : $.param($scope.dd),  // pass in data as strings
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
                })
                .success(function(data) {
                    console.log(data);
                    if(data=="1"||data=="-1")
                    {
                        //$scope.lists.push($scope.dd);
                        //console.log($scope.lists);
                        $scope.edit=false;
                        alert("删除成功");
                        //$scope.$apply();
                        $scope.loadCourses();
                        $scope.dd=null;
                    }
                });
            };

        });
    });
