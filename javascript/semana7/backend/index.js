/*
* Reto #7
* CONTANDO PALABRAS
* Dificultad: MEDIA
*
* Enunciado: Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas
* - Los signos de puntuacion no forman parte de la palabra
* - Una palabra es la misma aunque aparezca con mayusculas y minusculas
*/

/*
"Hola, mi nombre es Rai. Mi nombre completo es Rai Calderon (rccardenas)"

Hola = 1
mi = 2
nombre = 2
es = 2
Rai = 2
Calderon = 1
completo = 1
rccardenas = 1
*/

function countWords(text) {
  // vamos a crear un arreglo donde se guarde las palabras y su cantidad
  const result = [];

  text.toLowerCase().split(" ").forEach(function (word) {
    // Paso 1: Quitar los signos de puntuacion
    const cleanWord = word.replaceAll(/\W/g, "");
    const search = result.find((res) => res.word === cleanWord);
    if (search === undefined) {
      result.push({
        word: cleanWord,
        count: 1,
      })
    } else {
      search.count++;
    }
  });
  console.log(result);
}

countWords("Hola, mi nombre es Rai. Mi nombre completo es Rai Calderon (rccardenas).")