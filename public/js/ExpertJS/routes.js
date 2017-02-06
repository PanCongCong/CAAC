define([
    "app"
], function (app) {

    //app是Angular应用对象  
    app.config(function ($routeProvider) {
        $routeProvider
            .when(
            '/home', {
                templateUrl: "home.html",
                controller: "conHome"
            }
            )
            .when(
            '/WenJian', {
                templateUrl: "WenJian.html",
                controller: "conWenJian"
            }
            ).when(
            '/WenJian_XQ', {
                templateUrl: "WenJian_XQ.html",
                controller: "conWenJian_XQ"
            }
            )
            .when(
            '/XianChang', {
                templateUrl: "XianChang.html",
                controller: "conXianChang"
            }
            ).when(
            '/XianChang_XQ', {
                templateUrl: "XianChang_XQ.html",
                controller: "conXianChang_XQ"
            }
            )
            .when(
            '/PingGu', {
                templateUrl: "PingGu.html",
                controller: "conPingGu"
            }
            )
            .when(
            '/PingGu_XQ', {
                templateUrl: "PingGu_XQ.html",
                controller: "conPingGu_XQ"
            }
            )
            .otherwise(
            {
                templateUrl: "WenJian.html",
                controller: "conWenJian"
            }
            )
    });
})  