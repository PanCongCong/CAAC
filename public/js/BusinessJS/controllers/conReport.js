define(['controllers/controllers'],
    function (controllers) {
        controllers.controller('conReport', function ($scope, $http, FileUploader, $sce) {
            console.log("conReport");
            // var baseURL = "http://211.149.149.65:8080/AQBZ/";
            var baseURL2 = 'http://localhost/Demo/1/AQBZ/';
            $scope.ind = 0;
            //=======UpLoaderResume相关 Start======//
            $scope.uploader = [];
            var baseURL = "http://211.149.149.65:8080/AQBZ/";

            //进入界面，首先进行初始化
            $scope.pData = Object;//请求参数

            $scope.init = function () {
                $scope.pData.pMode = "getQiYe";
                $scope.pData.NAME = getCookie("userB");
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
                    // $scope.tbztFlag = false;
                    console.log($scope.data.length);
                    for (var i = 0; i < $scope.data.length; i++) {
                        if ($scope.data[i].ZL == "") {
                            $scope.data[i].showCXSC = false;
                        }
                        else {
                            $scope.data[i].showCXSC = true;
                        }
                        $scope.data[i].ind = i;
                        $scope.data[i].TK2 = $sce.trustAsHtml($scope.data[i].TK);

                        $scope.uploader[i] = new FileUploader({
                            url: baseURL + "Active/upLoad.php",
                            autoUpload: true//添加后，自动上传
                            , formData: { "fi": 111 }
                            , alias: $scope.data[i]["ID"]
                        });
                        $scope.uploader[i].onAfterAddingFile = function (fileItem) {

                            console.log($scope.data);
                            console.log("onAfterAddingFile");
                            console.log(fileItem);
                            console.log(this);
                        };
                        //
                        $scope.uploader[i].onBeforeUploadItem = function (fileItem) {
                            console.log("onBeforeUploadItem");
                        };
                        //
                        $scope.uploader[i].onCompleteItem = function (fileItem, response, statu, headers) {
                            console.log("onCompleteItem");
                            console.log($scope.data[i]);
                            console.log(response);
                            // $scope.data[i]["ZL"] = response;
                        };
                        $scope.uploader[i].onSuccessItem = function (fileItem, response, status, headers) {
                            console.log("onSuccessItem");
                        };
                    }
                    $scope.YJTK = getGroup($scope.data, "YJZB");
                    console.log($scope.YJTK);
                    $scope.EJTK = getGroup($scope.data, "EJZB");
                    console.log($scope.EJTK);
                });
            }
            $scope.init();

            $scope.btnSave1 = function () {

                $scope.pData.pMode = "updateQiYeList";
                $scope.pData.data = $scope.data;
                $scope.pData.TBZT = "TBZT1";
                $scope.pData.NAME = getCookie("userB");
                console.log($scope.data);
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
                $scope.pData.TBZT = "TBZT1";
                $scope.pData.NAME = getCookie("userB");
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



            $scope.openFile = function (id) {
                if (!$scope.tbztFlag) {
                    $("#" + id).click();
                }
            }
            $scope.reOpenFile = function (z) {
                z.showCXSC = !z.showCXSC;
                if (!$scope.tbztFlag) {
                    $("#" + z.ID).click();
                }
            }
            $scope.showTip = function (tbsl) {
                $scope.tbsl = $sce.trustAsHtml(tbsl);
                $scope.showT=true;
            }
        })
    })