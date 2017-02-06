define([  
    "app"  
    ], function (app) {  

    //app是Angular应用对象  
    app.config(function($routeProvider){
        $routeProvider.when(
            '/home',{
                templateUrl:"home.html",
                controller:"homeCon"
            }
            ).when(
            '/renyuan',{
                templateUrl:"renyuan.html",
                controller:"renyuanCon"
            }
            ).when(
            '',{
                templateUrl:"home.html",
                controller:"homeCon"
            }
            )
            .otherwise({redirectTo:'/home'});
        });
})  