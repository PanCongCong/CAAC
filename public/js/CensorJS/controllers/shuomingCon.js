define(['controllers/controllers'],
    function (controllers) {
        controllers.controller('shuomingCon', function ($scope, $http, $location, $sce) {
            console.log("shuomingCon");
            $scope.ind = 0;
            var baseURL = "http://211.149.149.65:8080/AQBZ/";
            //进入界面，首先进行初始化
            $scope.pData = Object;//请求参数
            $scope.pData.NAME = $location.search()['ID'];
            $scope.init = function () {
                $scope.pData.pMode = "getQiYeMX";
                $scope.pData.TB = "2";
                //$scope.pData.NAME = getCookie("userJ");
                // $scope.pData.NAME = "qy1";
                $http({
                    method: "POST",
                    url: baseURL + "Active/SubmitModel.php",
                    data: $.param($scope.pData),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).success(function (data) {
                    console.log(data);
                    $scope.data = data.TableList;
                    if (data.pMode == "1") {
                        $scope.tbzt = "填报中";
                        $scope.tbztFlag = false;
                    }
                    else if (data.pMode == "9") {
                        $scope.tbzt = "填报完毕";
                        $scope.tbztFlag = true;
                    }
                    else {
                        $scope.tbzt = "未填报";
                        $scope.tbztFlag = false;
                    }
                    console.log($scope.data);
                    for (var i = 0; i < $scope.data.length; i++) {
                        $scope.data[i].ind = i;
                        $scope.data[i].TK2 = $sce.trustAsHtml($scope.data[i].TK);
                    }
                    $scope.YJTK = getGroup($scope.data, "YJZB");
                    console.log($scope.YJTK);
                    $scope.EJTK = getGroup($scope.data, "EJZB");
                    console.log($scope.EJTK);
                });
            }
            $scope.init();

            $scope.btnSave1 = function () {
                console.log($scope.data);
                $scope.pData.pMode = "updateQiYeList";
                $scope.pData.data = $scope.data;
                // $scope.pData.NAME = getCookie("userJ");
                $scope.pData.TBZT = "TBZT2";
                $http({
                    method: "POST",
                    url: baseURL + "Active/SubmitModel.php",
                    data: $.param($scope.pData),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).success(function (data) {
                    console.log(data);
                    if (data == "1") {
                        alert("暂存成功。");
                    }
                })
            }
            $scope.btnSave2 = function () {
                console.log($scope.data);
                $scope.pData.pMode = "updateQiYeList2";
                $scope.pData.data = $scope.data;
                // $scope.pData.NAME = getCookie("userJ");
                $scope.pData.TBZT = "TBZT2";
                $http({
                    method: "POST",
                    url: baseURL + "Active/SubmitModel.php",
                    data: $.param($scope.pData),
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).success(function (data) {
                    console.log(data);
                    if (data == "1") {
                        alert("提交成功。");
                        $scope.tbztFlag = true;
                    }
                })
            }
        })
    })