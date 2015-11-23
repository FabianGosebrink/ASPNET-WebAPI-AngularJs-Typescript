var app;
(function (app) {
    var main = angular.module("AngularJsDemoApp", ["homeModule",
        "contactModule"])
        .constant("appSettings", {
        serverPath: "http://localhost:36592/"
    });
})(app || (app = {}));
