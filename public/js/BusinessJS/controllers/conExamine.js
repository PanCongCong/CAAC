define(['controllers/controllers'],
    function (controllers) {
        controllers.controller('conExamine', function ($scope, $http,$sce) {
            console.log("conExamine");
            var baseURL = "http://211.149.149.65:8080/AQBZ/";
            var statusEnum1 = {
                0: '<a href="#/report">未填报<br/>点击填报</a>',
                1: '填报中',
                9: '已填报',
                'default': '未填报'
            }
            var statusEnum2 = {
                0: '未评估',
                1: '评估中',
                9: '已评估',
                'default': '未评估'
            }
            var statusEnum3 = {
                0: '未生成',
                1: '评估中',
                9: '<a href="http://211.149.149.65:8080/AQBZ/Active/downLoad.php?fname=upload/pgbg.docx">已生成<br/>点击下载</a>',
                'default': '未生成'
            }
            $scope.translateStatus = function (status,statusEnum) {
                return $sce.trustAsHtml(statusEnum[status] ? statusEnum[status] : statusEnum.default);
            }

            $scope.pData = Object;//请求参数
            $scope.pData.pMode = "getUser";
            $scope.pData.NAME = getCookie("userB");
            $http({
                method: "POST",
                url: baseURL + "Active/SubmitModel.php",
                data: $.param($scope.pData),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function (data) {
                console.log(data);
                $scope.dd = data.TableList[0];
                $scope.TBZT1=$scope.translateStatus($scope.dd.TBZT1,statusEnum1);
                $scope.TBZT2=$scope.translateStatus($scope.dd.TBZT2,statusEnum2);
                $scope.TBZT3=$scope.translateStatus($scope.dd.TBZT3,statusEnum2);
                $scope.TBZT4=$scope.translateStatus($scope.dd.TBZT4,statusEnum2);
                $scope.TBZT5=$scope.translateStatus($scope.dd.TBZT5,statusEnum3);
            });
        })
    })