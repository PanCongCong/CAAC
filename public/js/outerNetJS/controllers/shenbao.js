define(['controllers/controllers'],
    function (conApp) {
        conApp.controller('shenbaoCon',function ($scope, $http) {
            $scope.goQy=function(url){
                window.location=url;
            }

        });
    });
