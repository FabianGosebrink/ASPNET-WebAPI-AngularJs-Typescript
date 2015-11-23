var app;
(function (app) {
    var contact;
    (function (contact) {
        var ContactController = (function () {
            function ContactController() {
            }
            return ContactController;
        })();
        angular.module("contactModule")
            .controller("contact.controllers.contactController", ContactController);
    })(contact = app.contact || (app.contact = {}));
})(app || (app = {}));
