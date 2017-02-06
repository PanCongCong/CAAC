define(  
    ['angular','angular-sanitize'],  
    function (angular) {
        'use strict';
        return angular.module('controllers', ['ngSanitize']);  
    }  
);