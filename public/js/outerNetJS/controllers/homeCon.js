define(['controllers/controllers'],
    function (conApp) {
        conApp.controller('homeCon',function ($scope, $http) {
            $http.get("http://211.149.149.65:8080/AQBZ/Active/Query.php?pMode=getTZGG&size=4")
                .success(function (res) {
                    $scope.items = res.TableList;
                });

            $http.get("http://211.149.149.65:8080/AQBZ/Active/Query.php?pMode=getXWDT&size=4")
                .success(function (res) {
                    $scope.news= res.TableList;
                    console.log($scope.news)
                });

        });
    });
