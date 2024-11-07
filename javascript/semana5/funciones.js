// Sintaxys: Forma en que escribimos codigo

// function sumar() {
//   codigo
// }
let n3 = 30;

function sumar() {
  // codigo
  let n1 = 10;
  let n2 = 20;
  console.log(n1 + n2 + n3);
}

let n4 = 40;

// console.log(n1);
console.log(n3);

let nombre = "Pepe";

// RECOMENDACION: Los nombres de las funciones deben ser VERBOS
function restar(n1, n2) {
  console.log(n1 - n2);
}

//Significa quen cuando llamemos a la funcion esta recibe 2 argumentos a detallar n1 y n2
// Llamar la funcion significa usar ya que una funcion creada solo se ejecutara cuando la llamemos
// Para llamar la funcion solo se escribe su nombre
restar(10, 50); // -40
restar(90, 100); // -10
restar(120, 30); // 90

function saludar(nombre) {
  console.log("Hola me llamo " + nombre);
}

saludar("Pepe");
saludar("Juan");

// FUNCIONES que usan RETURN
const edadMinima = 18;
function entrarAFiesta(edad) {
  //Si es mayor de 18 años podra entrar sino no entra
  let resultado = false;
  
  if (edad >= edadMinima) {
    //Este RETURN significa que si la condicion se cumple el valor que devuelva o muestre (retorne) sera TRUE
    // Cuando se ejecuta el return la funcion TERMINA
    resultado = true;
  }

  return resultado;
}

const validacionDeEdad = entrarAFiesta(16); // false
console.log("Validacion de edad", validacionDeEdad);