// var
// let
// const

// var es una palabra reservada que nos permite declarar una variable en js

var n1 = 1; // NUMBER
n1 = "hola"; // STRING
var n2 = 10; // NUMBER

// VAR YA NO SE USA 
// VAR es GLOBAL
// VAR es REASIGNABLE
// VAR es PESADO
var n1 = true;

// Actualmente VAR ya NO es recomendable usar

// LET : palabra reservada para declarar una variable en js
// LET solo funciona en el scope donde fue declarada
// LET SI se puede reasignar
let nombre = "Linder"; // valor inicial

nombre = 10; // cambiando el valor
nombre = false; // cambiando el valor

// Una NUEVA variable
let nombre2 = "Juan";

console.log("Hola esta es una variable");
// true = 1
// false = 0
console.log(n1 + nombre);
console.log(nombre);

// CONST : palabra reservada para declarar variable en JS 
// CONST solo funciona en el scope donde fue creada
// CONST NO se puede reasignar
const nombre3 = "Linder";
// NO SE PUEDE REASIGNAR = INMUTABILIDAD
// nombre3 = "Pepe"; NO SE PUEDE

