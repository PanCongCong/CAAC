define(['controllers/controllers'],
    function (controllers) {
        controllers.controller('conPingGu_XQ', function ($scope, $http, $location) {
            console.log("conPingGu_XQ");
            $scope.ind = 0;
            var baseURL = "http://211.149.149.65:8080/AQBZ/";
            //进入界面，首先进行初始化
            $scope.pData = Object;//请求参数
            $scope.pData.NAME = $location.search()['ID'];
            $scope.init = function () {
                $scope.pData.pMode = "getQiYeMX";
                $scope.pData.TB = "5";
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
                    $scope.TableList2 = data.TableList2;
                    console.log($scope.TableList2);
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
                    }
                    $scope.YJTK = getGroup($scope.data, "YJZB");
                    // console.log($scope.YJTK);
                });
            }
            $scope.init();

            $scope.btnSave1 = function () {
                console.log($scope.data);
                $scope.pData.pMode = "updateQiYeList";
                $scope.pData.data = $scope.data;
                $scope.pData.dataZB = $scope.TableList2;
                $scope.pData.TBZT = "TBZT5";
                console.log($scope.TableList2);
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
                $scope.pData.dataZB = $scope.TableList2;
                // $scope.pData.NAME = getCookie("userJ");
                $scope.pData.TBZT = "TBZT5";
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
            $scope.addPJ = function (x, fl) {
                console.log();
                var hp = {
                    FL: fl,
                    pID: x.ID,
                    PGPY: ""
                };
                // $scope.TableList2[0]=hp;
                $scope.TableList2.push(hp);
                console.log($scope.TableList2);
            }
            $scope.delPJ = function (y) {
                for(i=0;i<$scope.TableList2.length;i++)
                {
                    if(y==$scope.TableList2[i])
                    {
                        $scope.TableList2.splice(i,1);
                        return;
                    }
                }
            }
        })
    })