define(  
    ['angular','angular-file-upload','angular-sanitize'],  
    function (angular) {  
        return angular.module('controllers', ['angularFileUpload','ngSanitize']);  
    }  
);