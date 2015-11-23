var app;
(function (app) {
    var home;
    (function (home) {
        var PersonDataService = (function () {
            function PersonDataService($http, appSettings) {
                this.$http = $http;
                this.appSettings = appSettings;
                this.actionUrl = this.appSettings.serverPath + "api/person/";
            }
            PersonDataService.prototype.GetAllPersons = function () {
                return this.$http.get(this.actionUrl);
            };
            PersonDataService.prototype.DeletePerson = function (personId) {
                return this.$http.delete(this.actionUrl + personId);
            };
            PersonDataService.prototype.AddPerson = function (personToAdd) {
                return this.$http.post(this.actionUrl, personToAdd);
            };
            PersonDataService.prototype.UpdatePerson = function (personToUpdate) {
                return this.$http.patch(this.actionUrl + personToUpdate.Id, personToUpdate);
            };
            PersonDataService.$inject = ["$http", "appSettings"];
            return PersonDataService;
        })();
        home.PersonDataService = PersonDataService;
        angular.module("homeModule")
            .service("personDataService", PersonDataService);
    })(home = app.home || (app.home = {}));
})(app || (app = {}));
