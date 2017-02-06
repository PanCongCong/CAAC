define([
    "app"
], function (app) {

    //app是Angular应用对象  
    app.config(function ($routeProvider) {
        $routeProvider
            .when(
            '/', {
                templateUrl: "info.html",
                controller: "conInfo"
            }
            )
            .when(
            '/info', {
                templateUrl: "info.html",
                controller: "conInfo"
            }
            ).when(
            '/report', {
                templateUrl: "report.html",
                controller: "conReport"
            }
            ).when(
            '/examine', {
                templateUrl: "examine.html",
                controller: "conExamine"
            }
            ).when(
            '/explain', {
                templateUrl: "explain.html",
                controller: "conExplain"
            }).otherwise(
            {
                templateUrl: "info.html",
                controller: "conInfo"
            }
            )
    });
})  