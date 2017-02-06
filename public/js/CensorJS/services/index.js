require.config({
    paths:{
        //一些库文件
        'jquery': 'lib/jquery-3.1.0.min',
        'angular': 'lib/angular.min.js',
        'angular-route': 'lib/angular-route.js',
        'bootstrap': "lib/bootstrap.min.js"
    },
    shim:{
        'angular':{
            exports:'angular'
        },
        'angular-route':{
            deps:['angular'],
            exports: 'angular-route'
        }
    },
    deps:['bootstrap'],
    urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});
//手动启动ng  
define(["routes"], function () {  
    //使用bootstrap方法启动Angular应用  
    angular.bootstrap(document, ["app"]);  
}); 