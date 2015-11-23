var app;
(function (app) {
    var home;
    (function (home) {
        var HomeController = (function () {
            function HomeController(personDataService) {
                this.personDataService = personDataService;
                this.persons = [];
                this.getAllPersons();
            }
            HomeController.prototype.getAllPersons = function () {
                var _this = this;
                this.personDataService
                    .GetAllPersons()
                    .success(function (data) {
                    _this.persons = data;
                });
            };
            HomeController.prototype.deletePerson = function (personToDelete) {
                var _this = this;
                this.personDataService
                    .DeletePerson(personToDelete.Id)
                    .success(function () {
                    _this.getAllPersons();
                });
            };
            HomeController.prototype.addPerson = function () {
                var _this = this;
                this.personDataService
                    .AddPerson(this.newPerson)
                    .success(function (data) {
                    _this.persons.push(data);
                });
            };
            HomeController.prototype.setPersonToUpdate = function (person) {
                this.newPerson = person;
            };
            HomeController.prototype.updatePerson = function () {
                var _this = this;
                this.personDataService
                    .UpdatePerson(this.newPerson)
                    .success(function (data) {
                    delete _this.newPerson;
                    _this.persons.forEach(function (person, index) {
                        if (person.Id === data.Id) {
                            _this.persons[index] = data;
                        }
                    });
                });
            };
            HomeController.$inject = ["personDataService"];
            return HomeController;
        })();
        angular.module("homeModule")
            .controller("home.controllers.homeController", HomeController);
    })(home = app.home || (app.home = {}));
})(app || (app = {}));
