module app.home {
	var main = angular.module("homeModule");

	main.config(routeConfig);

	routeConfig.$inject = ["$routeProvider"];
	function routeConfig($routeProvider: ng.route.IRouteProvider): void {
		$routeProvider.when("/",
			{
				templateUrl: "app/Home/Templates/overview.html",
				controller: "home.controllers.homeController as vm"
			})
			.otherwise("/");
	}
}