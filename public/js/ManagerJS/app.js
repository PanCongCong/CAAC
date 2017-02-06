define(
    [  
        'angular',
        'angularRoute',  
        'controllers/index'
    ], function (angular) {
        console.log("appjs");
        return angular.module('app', ['ngRoute', 'controllers']);
    }  
)  