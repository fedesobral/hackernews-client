class Developer {
	constructor(firstname, lastname){
		this.firstname = firstname;
		this.lastname = lastname;
	}

	getName() {
		return this.firstname + ' ' + thislastname;
	}

}

const robin = new Developer('Robin', 'Wieruch');
console.log(robin.getName());