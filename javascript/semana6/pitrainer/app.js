const button_start = document.getElementById("button_start");
const live_qty = document.querySelector(".live_qty");

button_start.addEventListener("click", function () {
  this.disabled = true;
  document.getElementById("game").style.display = "block";
});

// Game:
const pi_decimals =
  "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109";

let position = 0;
// podemos crear una variable para contar errores
let errors = 0;

const input_decimals = document.getElementById("input_decimals");
const result_decimals = document.getElementById("result_decimals");
const result_score = document.getElementById("result_score");

// funcion que altera valor de vidas
function renderLives() {
  // cada vez que error sea true disminuye un corazon
  live_qty.innerHTML = "";
  for (let i = 0; i < 5 -errors; i++) {
    // live_qty.innerHTML = live_qty.innerHTML + "💗";
    live_qty.innerHTML += "💗";
  }
}

renderLives();

input_decimals.addEventListener("keypress", function (){
  this.value = "";
  this.focus();
});

input_decimals.addEventListener("keydown", function (evt) {
  if (evt.code == "Enter") return;
  const decimal = String.fromCharCode(evt.keyCode);
  if (decimal == "") return;
  if (decimal == " ") return;
  if (isNaN(decimal)) return; // is Not a Number
  // Si decimal llega hasta aqui es porque el usuario presiono si o si un numero
  // Comprobar si decimal es igual al siguiente decimal de pi
  if (decimal == pi_decimals.charAt(position)) {
    // si acierta:
    result_decimals.innerText += decimal;
    result_decimals.style.color = "green";
    position++;
    result_score.innerText = position;
  } else {
    // si no acierta
    errors++;
    result_decimals.style.color = "red";
    renderLives();
    if (errors == 5) {
      input_decimals.disabled = true;
      button_start.disabled = false;
    }
  }
  // Volver texto a negro
  setTimeout(() => {
    result_decimals.style.color = 'black';
  }, 500);
});
