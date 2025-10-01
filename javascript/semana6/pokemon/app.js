const btnGetPokemons = document.querySelector("#get-pokemons");

const urlPokemons = "https://pokeapi.co/api/v2/pokemon";

btnGetPokemons.onclick = async function () {
  // con la funcion "fetch" consumimos informacion de una URL
  // Para que fetch termine la ejecucion debemos convertir
  // nuestra funcion en async "async function()"
  // esto nos permite usar "await" para esperar
  // ejecutar una funcion
  // por lo tanto, siempre que se quiera hacer una peticion
  // a un servidor web ("fetch") debe usarse "async"
  // y por consecuencia un "await" que espera la respuesta
  // del servidor
  const respuesta = await fetch(urlPokemons);
  // ahora creamos una variable que guarde la info que el servido responda
  // a esto se le llama parsear, convertir JSON -> objeto y es necesario para que JS pueda entenerlo
  const data = await respuesta.json();
  console.log(data.results);
};
