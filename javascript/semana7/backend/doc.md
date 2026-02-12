# Node JS
Es un motor que nos permite ejecutar JS como servidor

´´´js
node nombreArchivo.js
´´´¨

## Creando un proyecto
Para poder crear un proyecto en node siempre iniciamos "npm init" este comando nos
va a crear el archivo "package.json" el cual contendra toda la configuracion

En este archivo podremos instalar dependencia externas, crear comandos, definir entornos, etc

```json 
"scripts": {
  "start": "node index.js"
}
´´´

Para usar el comando creado en nuestra consola debemos colocar lo siguiente

```bash
npm start
´´´
Esto ejecta el contenido de nuestro archivo index.js