// Escribir un texto dentro del elemento
document.getElementById("div_container").innerText = "Hola a todos";
// Darle estilos al elemento

function test() {
  document.getElementById("div_container").classList.add("big");
}

function remove() {
  document.getElementById("div_container").classList.remove("big");
}

// Selector de varios elementos
const parrafos = document.getElementsByTagName("p");
console.log(parrafos);

const array_parrafos = document.querySelectorAll("p");
console.log(array_parrafos);
array_parrafos.forEach((p) => {
  p.onclick = function () {
    p.innerText = "Rai";
    p.classList.add("big");
  };
});
