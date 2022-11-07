// Arreglo para guardar infinitas peronas:
const personas = [];

function crearPersona() {
	const persona1 = {
		name: "bruno",
		years: 32,
		gender: "masculino",
		height: 179,
		is_adult: function () {
			return this.years >= 18;
		},
		inches: function () {
			return this.height / 2.54;
		},
		upper_name: function () {
			return this.name.toUpperCase();
		},
		capital_name: function () {
			return (
				this.upper_name().substring(0, 1) +
				this.name.substring(1, this.name.lenght)
			);
		},
	};
	personas.push(persona1);
	console.log(personas);
}

// Funcion para crear varias 3 personas:
function crearPersonas() {
	const persona1 = {
		name: "bruno",
		years: 32,
		gender: "masculino",
		height: 179,
		is_adult: function () {
			return this.years >= 18;
		},
		inches: function () {
			return this.height / 2.54;
		},
		upper_name: function () {
			return this.name.toUpperCase();
		},
		capital_name: function () {
			return (
				this.upper_name().substring(0, 1) +
				this.name.substring(1, this.name.lenght)
			);
		},
	};
	const persona2 = {
		name: "linder",
		years: 22,
		gender: "masculino",
		height: 170,
		is_adult: function () {
			return this.years >= 18;
		},
		inches: function () {
			return this.height / 2.54;
		},
		upper_name: function () {
			return this.name.toUpperCase();
		},
		capital_name: function () {
			return (
				this.upper_name().substring(0, 1) +
				this.name.substring(1, this.name.lenght)
			);
		},
	};
	const persona3 = {
		name: "elvia",
		years: 25,
		gender: "femenino",
		height: 170,
		is_adult: function () {
			return this.years >= 18;
		},
		inches: function () {
			return this.height / 2.54;
		},
		upper_name: function () {
			return this.name.toUpperCase();
		},
		capital_name: function () {
			return (
				this.upper_name().substring(0, 1) +
				this.name.substring(1, this.name.lenght)
			);
		},
	};
	personas.push(persona1);
	personas.push(persona2);
	personas.push(persona3);
	console.log(personas);
}