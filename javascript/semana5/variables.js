// * var
// * let
// * const

// * var: palabra reservada que permite declarar variables en JS
var n1 = 1; // number
n1 = "hola"; // string
var n2 = 10; // number

// ! var ya no se usa
// var es global
// var es reasignable
// var es pesado
var n1 = true;

// Actualmente no es recomendable usar var

// * let: palabra reservada que permite declarar variables en JS
// let solo funciona en el scope donde fue declarada
let nombre = "Linder"; // valor inicial

nombre = 10; // cambiando valor
nombre = false; // cambiando valor
// nombre = null; // cambiando valor
// nombre = undefined; // cambiando valor

// Nueva variable
let nombre2 = "Juan";

console.log("Hola esta es una variable");

console.log(nombre);
console.log(n1 + nombre);
// true = 1
// false = 0

// * const: palabra reservada que permite declarar variables en JS
//  const solo funciona en el scope donde fue declarada
// const no se puede reasignar
const nombre3 = "Rai";
// nombre3 = "Pepe";
// Esto no es posible con const porque una vez asignado un valor no se puede cambiar
// A esto se le llama inmutabilidad

