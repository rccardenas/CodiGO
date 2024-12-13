const personas = [];

function crearPersona() {
  const persona1 = {
    name: "rai",
    years: 29,
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
  personas.push(persona1);
  console.log(personas);
}

// Funcion para crear 3 personas

function crearPersonas() {
  const persona1 = {
    name: "rai",
    years: 29,
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
  const persona2 = {
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
  const persona3 = {
    name: "elvia",
    years: 25,
    gender: "femenino",
    height: 167,
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

// Creamos molde para crear personas METODO CONSTRUCTOR - INSTANCIAR

class Person {
  constructor(name, years, gender, height) {
    this.name = name;
    this.years = years;
    this.gender = gender;
    this.height = height;
  }
  is_adult() {
    return this.years >= 18;
  }
  inches() {
    return this.height / 2.54;
  }
  upper_name() {
    return this.name.toUpperCase();
  }
  capital_name() {
    return (
      this.upper_name().substring(0, 1) +
      this.name.substring(1, this.name.lenght)
    );
  }
}

// Funcion para crear varias personas a partir de un modelo

function crearPersonasClass() {
  const persona1 = new Person("rai", 29, "masculino", 170);
  const persona2 = new Person("bruno", 32, "masculino", 179);
  const persona3 = new Person("elvia", 29, "femenino", 167);
  personas.push(persona1);
  personas.push(persona2);
  personas.push(persona3);

  console.log(personas);
}

function crearPersonasCustom() {
  const nombre = prompt("Nombre: ");
  const edad = prompt("Edad: ");
  const genero = prompt("Genero: ");
  const talla = prompt("Talla: ");
  const persona = new Person(nombre, edad, genero, talla);
  personas.push(persona);
  console.log(personas);
}

function notificacion() {
  window.alert("Soy una notificacion");
  console.log(window.location.host);
  console.log(window.location.pathname);
  console.log(window.innerHeight);
  console.log(window.innerWidth);
}

function goVariables() {
  window.location.href = "variables.html";
}