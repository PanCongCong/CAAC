define(
    [  
        'angular',
        'angularRoute',  
        'controllers/index',
        'common'
    ], function (angular) {
        console.log("appjs");
        var app=angular.module('app', ['ngRoute', 'controllers']);
        app.controller('conApp',function($scope,$interval){
            $scope.user = getCookie("userJ");
            $interval(function(){
                $scope.dateStr=formatDateTime(new Date());
            })
        })
        return app;
    }  
)  