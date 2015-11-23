module app.home {
	interface IHomeController {
		persons: app.models.IPerson[];
		newPerson: app.models.IPerson;

		deletePerson(personToDelete: app.models.IPerson): void;
		addPerson(): void;
		setPersonToUpdate(person: app.models.IPerson): void;
		updatePerson(): void;
	}

	class HomeController implements IHomeController {

		persons: app.models.IPerson[];
		newPerson: app.models.IPerson;

		static $inject = ["personDataService"];
		constructor(private personDataService: app.home.PersonDataService) {
			this.persons = [];
			this.getAllPersons();
		}

		getAllPersons(): void {
			this.personDataService
				.GetAllPersons()
				.success((data: app.models.IPerson[]) => {
					this.persons = data
				});
		}

		deletePerson(personToDelete: app.models.IPerson): void {
			this.personDataService
				.DeletePerson(personToDelete.Id)
				.success(() => {
					this.getAllPersons();
				});
		}

		addPerson(): void {
			this.personDataService
				.AddPerson(this.newPerson)
				.success((data) => {
					this.persons.push(data)
				});
		}

		setPersonToUpdate(person: app.models.IPerson): void {
			this.newPerson = person;
		}

		updatePerson(): void {
			this.personDataService
				.UpdatePerson(this.newPerson)
				.success((data) => {
					delete this.newPerson;
					this.persons.forEach((person, index)=>{
						if(person.Id === data.Id){
							this.persons[index] = data;
						}
					})
				});
		}
	}

	angular.module("homeModule")
		.controller("home.controllers.homeController",
		HomeController);
}




