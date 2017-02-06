
define(
    [
        'angular',
        'angularRoute',
        'controllers/index',
        'common'
        //'services/index',
    ], function (angular) {
        var app = angular.module('app', ['ngRoute', 'controllers']);
        app.controller('conApp', function ($scope, $interval) {
            $scope.user = getCookie("userZ");
            $interval(function () {
                $scope.dateStr = formatDateTime(new Date());
            })
        })
        return app;
    }
)  