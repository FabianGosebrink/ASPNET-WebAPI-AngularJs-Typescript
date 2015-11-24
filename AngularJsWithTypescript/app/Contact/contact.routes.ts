module app.contact {
	var main = angular.module("contactModule");

	main.config(routeConfig);

	routeConfig.$inject = ["$routeProvider"];
	function routeConfig($routeProvider: ng.route.IRouteProvider): void {
		$routeProvider.when("/contact",
			{
				templateUrl: "app/Contact/Templates/contact.html",
				controller: "contact.controllers.contactController as vm"
			})
			.otherwise("/");
	}
}