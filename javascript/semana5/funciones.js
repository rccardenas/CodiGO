// Sintaxys: Forma en la que escribimos el codigo

// function nombre() {

// }

let n3 = 30;

function sumar() {
    // codigo
    let n1 = 10; // si se declarara con VAR si se podria usar esta variable en otra parte del codigo fuera de este scope
    let n2 = 20;
    console.log(n1 + n2 + n3);
}

let n4 = 40;

console.log(n1);
console.log(n3);

let name = "Pepe";

// Recomendacion usar VERBOS como nombre de la funcion
function restar(n1, n2) {
    console.log(n1 - n2);
}

// Para llamar a la funcion esta debera recibir dos argumentos n1 y n2
// Llamar a una funcion significa usarla, ya que es una practica crear una funcion 
// y luego al llamarla o usarla definir sus argumentos 
// Para usar una funcion solo es necesario escribir el nombre

restar(10, 50); // -40
restar(90, 100); // -10
restar(120, 30); // 90

function saludar(nombre) {
    console.log("Hola me llamo " + nombre);
}

saludar("Pepe");
saludar("Juan");

// FUNCIONES CON RETURN
function entrarAFiesta(edad) {
    // Si es mayor a 18 podrar entrar sino no entra
    let resultado = false;

    if (edad >= 18) {
        // Si la condicion se cumple retorna true
        // Cuando se ejecuta return la funcion termina
        resultado = true;
    }
    return resultado;
}

const validacionDeEdad = entrarAFiesta(20);
console.log("Validacion de edad", validacionDeEdad);
