module app.contact {
	interface IContactController {
		
	}

	class ContactController implements IContactController {
		
	}

	angular.module("contactModule")
		.controller("contact.controllers.contactController",
		ContactController);
}




