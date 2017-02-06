define(['controllers/controllers'],
    function (controllers) {
        controllers.controller('pingguCon',function ($scope,$http, $location) {
            console.log("pingguCon");
            var lxEnum = {
                1: '经营人',
                2: '地面服务代理人',
                3: '货运销售代理人',
                4: '托运人代理人',
                'default':'未定企业类别'
            }
            var statusEnum = {
                0: '未评估',
                1: '评估中',
                9: '评估完成',
                'default':'未评估'
            }
            $scope.translateLx = function(status){
                return lxEnum[status]?lxEnum[status]:lxEnum.default
            }
            $scope.translateStatus = function(status){
                return statusEnum[status]?statusEnum[status]:statusEnum.default
            }
            var baseURL = "http://211.149.149.65:8080/AQBZ/";
            $scope.pData = Object;//请求参数
            $scope.data=Object;
            $scope.init = function () {
                $scope.pData.pMode = "getJCPGList";
                $scope.pData.NAME = getCookie("userJ");
                $scope.pData.zt="";//0代表未评估完毕
                $http({
                    method: "GET",
                    url: baseURL + "Active/Query.php",
                    params: $scope.pData,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).success(function (data) {
                    console.log(data);
                    $scope.data = data.TableList;
                });
            }
            $scope.init();

            //$scope.goDetail=function(id){
            //    console.log(id);
            //    //$state.go('',{ID:id});
            //    $location.path('/shuoming/{ID:id}');
            //}
        });
    });
