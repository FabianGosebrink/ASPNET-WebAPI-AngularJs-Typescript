var app;
(function (app) {
    var home;
    (function (home) {
        var main = angular.module("homeModule");
        main.config(routeConfig);
        routeConfig.$inject = ["$routeProvider"];
        function routeConfig($routeProvider) {
            $routeProvider.when("/", {
                templateUrl: "app/Home/Templates/overview.html",
                controller: "home.controllers.homeController as vm"
            })
                .otherwise("/");
        }
    })(home = app.home || (app.home = {}));
})(app || (app = {}));
