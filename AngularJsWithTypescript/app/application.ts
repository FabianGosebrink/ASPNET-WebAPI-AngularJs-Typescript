module app {
	var main = angular.module("AngularJsDemoApp",
		["homeModule",
			"contactModule"])
		.constant("appSettings", {
            serverPath: "http://localhost:36592/"
        });
}