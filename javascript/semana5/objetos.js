let persona;

function crearPersona() {
  persona = {
    name: "rai",
    years: 29,
    gender: "masculino",
    talla: 170,
    is_adult: function () {
      return this.years >= 18;
    },
    inches: function () {
      return this.talla / 2.54;
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

  console.log(persona);
}
