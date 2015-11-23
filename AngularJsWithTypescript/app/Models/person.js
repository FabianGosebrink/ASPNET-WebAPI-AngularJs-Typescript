var app;
(function (app) {
    var models;
    (function (models) {
        var Person = (function () {
            function Person(Id, Name, Age) {
                this.Id = Id;
                this.Name = Name;
                this.Age = Age;
            }
            return Person;
        })();
        models.Person = Person;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
