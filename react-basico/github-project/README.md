# React JS

Es una biblioteca de Javascript para construir interfaces de usuario

## Reglas

- Todo componente debe ser una funcion
- Todo componente debe empezar con MAYUSCULA

```js
function MyCard() {
    return <div>My Card</div>
}
```

- Todo componente debe retornar un solo elemento

```js
function MyCard() {
    return (
        <div>
            <h1>Titulo</h1>
            <p>Parrafo</p>
            <div>
                <p>Parrafo hijo</p>
                <div>
                    <p>Parrafo hijo 2</p>
                </div>
            </div>
        </div>
    );
}
```

- Dentro de mi componente puedo poner mas funciones y esas ya no llevan mayuscula

```js
function MyCard() {

    function mostrarMensaje() {
        console.log("Hola mundo")
    }

    return (
        <div>
            <h1>Titulo</h1>
            <button onClick={mostrarMensaje}>Mostrar mensaje</button>
        </div>
    );
}
```

- Eventos: Los nombres de los eventos en React son camelCase
    - onclick -> onClick
    - onchange -> onChange
    - onsubmit -> onSubmit

## useState

En REACT para poder almacenar un valor en una variable
usamos un hook llamado useState
useState es una funcion de REACT que nos permite 
poder manejar el estado de una variable

- Como se usa useState

**Siempre los IMPORT de REACT van en la primera linea**

```js
import { useState } from "react";

function App() {
    // useState retorna un arreglo con dos valores
    // el primer valor es el valor de la variable ("Juan")
    // el segundo valor es una funcion que nos permite cambiar el valor
    const [nombre, setNombre] = useState("Juan");

    // nombre = "Pepe"; // Esto NO se puede hacer
    // setNombre("Pepe"); // Esta es la FORMA CORRECTA

    // Si queremos cambiar el valor de la variable nombre
    // tenemos que llamar a la funcion setNombre
    return (
        <div>
            <p>Nombre {nombre}</p>
            <button onClick={() => setNombre("Pepe")}>Cambiar nombre</button>
        </div>
    )
}
```


## onChange para Inputs

- En REACT para poder manejar el valor de una input usamos el evento onChange 
este va permitir captar cada vez que el usuairo escriba en el input

```js
function App() {
    const [inputText, setInputText] = useState ("");

    function handleInputChange(event) {
        // cambiar el valor de inputText
        // si queremos obtener el valor de lo que el usuario escribe
        // usamos event.target.value
        setInputText(event.target.value);
    }

    return(
        <div>
            <p>Nombre {nombre}</p>
            <inpu type="text" onChange={handleInputChange}/>
        </div>
    )
}


