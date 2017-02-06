define(['controllers/controllers'],
    function (controllers) {
        controllers.controller('conPingGu', function ($scope, $http) {
            console.log("conPingGu");
            var baseURL = "http://211.149.149.65:8080/AQBZ/";
            var lxEnum = {
                1: '经营人',
                2: '地面服务代理人',
                3: '货运销售代理人',
                4: '托运人代理人',
                'default':'未定企业类别'
            }
            $scope.translateLx = function(status){
                return lxEnum[status]?lxEnum[status]:lxEnum.default
            }
            $scope.pData = Object;//请求参数
            $scope.data = Object;
            $scope.edit=false;
            $scope.init = function () {
                $scope.pData.pMode = "getPGQRList";
                $scope.pData.NAME = getCookie("userZ");
                $scope.pData.zt = "";//0代表未评估完毕
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
            $scope.showPG=function(x){
                $scope.dd=x;
                $scope.edit=true;
            }
            $scope.savePG=function(){
                // $scope.pData.data=$scope.dd;
                // $scope.pData.pMode = "savePG";
                // $http({
                //     method: "POST",
                //     url: baseURL + "Active/SubmitModel.php",
                //     data: $.param($scope.pData),
                //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                // }).success(function (data) {
                //     console.log(data);
                //     if (data == "1") {
                //         alert("保存成功");
                //     }
                // })
            }
        })
    })