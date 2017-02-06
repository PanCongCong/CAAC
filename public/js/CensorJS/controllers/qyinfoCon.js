define(['controllers/controllers'],
    function(controllers) {
        controllers.controller('qyinfoCon', function($scope, $http) {
            console.log("qyinfoCon");
            //初始化
            var baseURL = "http://211.149.149.65:8080/AQBZ/";
            $scope.dd = Object;
            $scope.edit = false;//是否处于修改模式
            $scope.editText = "修改";
            $scope.submit = true;//提交按钮是否可用
            $scope.pData = Object;//请求参数
            $scope.pData.pMode = "getUser";
            $scope.pData.NAME = getCookie("userJ");
            $http({
                method: "POST",
                url: baseURL + "Active/SubmitModel.php",
                data: $.param($scope.pData),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function(data) {
                $scope.dd = data.TableList[0];
                console.log($scope.dd);
            });

            $scope.btnClick = function() {
                if ($scope.edit) {
                    $scope.submit = false;
                    $scope.editText = "提交中...";

                    $scope.pData = $scope.dd;
                    $scope.pData.pMode = "updateAdmin";
                    $http({
                        method: "POST",
                        url: baseURL + "Active/SubmitModel.php",
                        data: $.param($scope.pData),
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                    }).success(function(data) {
                        if (data == "1") {
                            alert("提交成功");
                        }
                        else {
                            alert("提交失败");
                        }
                        $scope.submit = true;
                        $scope.editText = "修改";
                        $scope.edit = false;
                        console.log(data);
                    });

                    $scope.edit = false;
                }
                else {
                    $scope.editText = "保存";
                    $scope.edit = true;
                }
            }
        })
    })
