module app.home {

	interface IPersonDataService {
		GetAllPersons(): ng.IHttpPromise<app.models.IPerson[]>;
		DeletePerson(personId:number):ng.IHttpPromise<any>;
		AddPerson(personToAdd:app.models.IPerson): ng.IHttpPromise<app.models.IPerson>;
		UpdatePerson(personToUpdate:app.models.IPerson): ng.IHttpPromise<app.models.IPerson>;
	}

	export class PersonDataService implements IPersonDataService {
		private actionUrl: string;

		static $inject = ["$http", "appSettings"];
		constructor(
			private $http: ng.IHttpService,
			private appSettings: any) {

			this.actionUrl = this.appSettings.serverPath + "api/person/";
		}

		GetAllPersons(): ng.IHttpPromise<app.models.IPerson[]> {
			return this.$http.get(this.actionUrl);
		}
		
		DeletePerson(personId:number):ng.IHttpPromise<any>{
			return this.$http.delete(this.actionUrl + personId);
		}
		
		AddPerson(personToAdd:app.models.IPerson): ng.IHttpPromise<app.models.IPerson>{
			return this.$http.post(this.actionUrl, personToAdd);
		}
		
		UpdatePerson(personToUpdate:app.models.IPerson): ng.IHttpPromise<app.models.IPerson>{
			return this.$http.patch(this.actionUrl + personToUpdate.Id, personToUpdate);
		}
	}

	angular.module("homeModule")
		.service("personDataService", PersonDataService);
}