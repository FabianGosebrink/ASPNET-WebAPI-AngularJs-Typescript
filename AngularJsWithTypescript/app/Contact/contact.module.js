var app;
(function (app) {
    var contact;
    (function (contact) {
        var main = angular.module("contactModule", ["ngRoute"]);
        main.config(routeConfig);
        routeConfig.$inject = ["$routeProvider"];
        function routeConfig($routeProvider) {
            $routeProvider.when("/contact", {
                templateUrl: "app/Contact/Templates/contact.html",
                controller: "contact.controllers.contactController as vm"
            })
                .otherwise("/");
        }
    })(contact = app.contact || (app.contact = {}));
})(app || (app = {}));
