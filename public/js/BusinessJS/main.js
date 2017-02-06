require.config({
    paths:{
        //一些库文件
        'jquery': '../lib/jquery-3.1.0.min',
        'angular': '../lib/angular.min',
        'angularRoute': '../lib/angularRoute',
        'angular-file-upload':'../lib/angular-file-upload.min',
        'bootstrap': "../lib/bootstrap.min",
        'MyJs':'MyJs',
        'common':'../lib/common',
        'angular-sanitize':"../lib/angular-sanitize"
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
        'MyJs':{
            deps:['jquery','common'],
            exports: 'MyJs'
        },
        'common':{
            deps:['jquery'],
            exports: 'common'
        },
        'angular-file-upload':{
            deps:['angular'],
            exports: 'angular-file-upload'
        },
        'angular-sanitize':{
            deps:['angular'],
            exports:'angular-sanitize'
        }
    }
    ,urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});
//手动启动ng
define(["routes","MyJs"], function () {
    //使用bootstrap方法启动Angular应用  
    angular.bootstrap(document, ["app"]);  
}); 