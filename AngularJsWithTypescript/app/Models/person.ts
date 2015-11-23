module app.models {
	export interface IPerson {
		Id: number;
		Name: string;
		Age: number;
	}

	export class Person implements IPerson {

		constructor(
			public Id: number,
			public Name: string,
			public Age: number
		) {

		}
	}
}