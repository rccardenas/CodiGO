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