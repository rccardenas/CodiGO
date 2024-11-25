// ARREGLOS: Son un conjunto de datos
// La sintaxys de arreglos es la siguiente

const nombres = ["Pepe", "Juan", "Luisa", "Maria", "Carlos"]
// El arreglo nombres tiene 5 elementos
// El INDICE es la posicion de cada elemento y empieza en 0
console.log(nombres[0]); // Pepe
console.log(nombres[3]); // Maria
console.log(nombres[5]); // Undefined

const edades = [18, 20, 22, 12];

console.log("Edades 1", edades);

const booleanos = [true, false, true, false];

// FUNCIONES DE ARRAY
// Funcion para agregar un elemento: PUSH
edades.push(34);
edades.push("Pepe");
edades.push(true);
edades.push(["Juan", "Luis"]);
console.log("Edades 2", edades);
console.log(edades[7][0]);

// ARRAYS MULTIPLES
const cursos = [
  ["React", "Angular", "Svelt", "Vue"],
  ["Laravel", "Sinfony", "Cake", ["Poo", "Java", "php", ["Js", "Css", "Html"]]],
  ["Spring", "JHipster"],
];

console.log(cursos[1][3][3][1]);

cursos.unshift("React Native");
console.log("Unshift", cursos);
cursos[1].unshift("NextJS");
console.log("Unshift Array 1", cursos);

console.log("Pop");
// Elimina el ultimo elemento del array
const valorEliminado = cursos.pop();
console.log(valorEliminado);
console.log(cursos);

// FOR es un bucle estructura repetitiva n veces
// Sintaxys de FOR

console.log("====================");
const newCursos = ["Angular", "React", "Vue", "Svelt"];
// i++ => i += 1
for (let i = 0; i < newCursos.length; i++) {
  // .length nos indica la extension o numero de elementos del array
  // i trabaja como indice en esta instruccion
  // primera vuelta i = 0
  // segunda vuelta i = 1
  // continua las vuelta hasta completar el numero de elementos de NewCursos gracias a .length
  console.log(newCursos[i]);
}

console.log("=====forEach");
// Version moderna de esta misma instruccion: forEach
// forEach recorre el arreglo pero no retorna ningun valor
// necesaita una function que obtenga el valor en cada vuelta
newCursos.forEach(function (element) {
  console.log(element);
})

console.log("======forEach elemento especifico");
newCursos.forEach(function (curso, indice) {
  if (curso === "React"){
    console.log(curso, indice);
  }
})

console.log("Romper for")
const numeros = [10, 11, 12, 13, 14, 15];

for (let j = 0; j < numeros.length; j++) {
  console.log(numeros[j]); // 10, 11, 12, 13, 14
  if (numeros[j] > 13) {
    // Rompe la funcion que en este caso es FOR
    break;
  }
}

console.log("Romper forEach");
numeros.forEach(function (numero){
  console.log(numero);
  if (numero > 13) {
    // forEach no se puede romper, ni con return ni con break
    return;
  }
  // forEach es irrompible directamente
})

console.log("Romper forEach alternativa");
numeros.forEach(function (numero){
  if (numero > 14) {
  } else {
  console.log(numero);
  }
})