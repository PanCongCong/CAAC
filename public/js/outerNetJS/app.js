define(
    [  
        'angular',
        'angularRoute',
        //'controllers/controllers',
        'controllers/index'
    ], function (angular) {
        console.log("appjs");
        return angular.module('app', ['ngRoute','conApp']);
    }  
)  