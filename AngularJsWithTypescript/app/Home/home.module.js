var app;
(function (app) {
    var home;
    (function (home) {
        var main = angular.module("homeModule", ["ngRoute"]);
    })(home = app.home || (app.home = {}));
})(app || (app = {}));
