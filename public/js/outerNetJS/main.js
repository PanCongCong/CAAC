require.config({
    paths:{
        //一些库文件
        'jquery': '../lib/jquery-3.1.0.min',
        'angular': '../lib/angular.min',
        'angularRoute': '../lib/angularRoute',
        'bootstrap': "../lib/bootstrap.min",
        'pageCtrl':"../lib/PageCtrl"
    },
    shim:{
        'angular':{
            exports:'angular'
        },
        'angularRoute':{
            deps:['angular'],
            exports: 'angularRoute'
        },
        'bootstrap':{
            deps:['jquery'],
            exports: 'bootstrap'
        },
        'pageCtrl':{
            deps:['angular'],
            exports: 'pageCtrl'
        }
    }
    // ,urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});
//手动启动ng  
define(["routes"], function () {
    //使用bootstrap方法启动Angular应用  
    angular.bootstrap(document, ["app"]);  
}); 