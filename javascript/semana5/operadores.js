function aumentarNumber(numero, aumento) {
  // Esta funcion aumentara el numero ingresado una cantida x
  // numero = numero + aumento;
  // Esta instruccion se puede resumir con el operador de adicion
  numero += aumento; // 30
  numero -= aumento; // -10
  numero *= aumento; // 200
  numero /= numero; // 1
  console.log(numero);
}

aumentarNumber(10, 20);

console.log("Funcion 2");
function aumentoDoble(numero, aumento) {
  // Operador de exponenciacion
  numero **= aumento; // 8
  // Operador residuo
  numero %= aumento;
  console.log(numero);
}

aumentoDoble(2, 3);
aumentoDoble(8, 4);
aumentoDoble(12, 2);
// Tener en cuenta el orden de instrccion y la memoria del numero

console.log("Funcion 3");
// Operador de cambio
// Cambiara la posicion del bit del primero numero la cantidad de posiciones indicadas por el numero 2
function operadorDeCambio(numero1, numero2) {
  numero1 <<= numero2;
  console.log("operador de cambio", numero1);
}

operadorDeCambio(1, 3); // 8

console.log("Funcion 4");
// Operadores Logicos
// Con operadores logicos > < >= <= == === || siempre retorna true o false
function operadoresLogicos(numero1, numero2) {
  console.log(">", numero1 > numero2); // true
  console.log("<", numero1 < numero2); // false
  console.log("==", numero1 == numero2); // false
  console.log("==", "1" == 1); // true
  console.log("===", "1" === 1); // false
}

operadoresLogicos(100, 50)

console.log("Determinar tipo de variable");
// Para determinar que tipo de variable es un dato usamos typeof
console.log(typeof 41.3); // number
console.log(typeof "hola"); // string
console.log(typeof [1, 2, 3]); // object
