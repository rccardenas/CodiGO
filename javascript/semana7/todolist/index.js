const inputTask = document.querySelector(".input__task");
const btnCreate = document.querySelector(".btn__create");
const listTask = document.querySelector(".container__list__task");

// Vamos a crear un array vacio en el cual guardaremos las tareas creadas
let arrayTasks = [];

btnCreate.onclick = function () {
  const taskText = inputTask.value;

  // Ahora validaremos que el input no este vacio
  if (taskText === "") {
    alert("Ingrese tarea a realizar");
    return
  }

  const task = new Task(arrayTasks.length + 1, taskText, new Date(), 1);
  arrayTasks.push(task);

  listTask.innerHTML += task.render();

  inputTask.value = "";
};

function destroy(id) {
// Para eliminar un elemento de un array podemos pedir que traiga todos los elementos menos el que tenga el ID que se esta recibiendo
// Recordemos que FILTER retorna ARRAY
const filterTask = arrayTasks.filter((task) => task._id !== Number(id));
// Con esto definimos que el valor de arrayTask es ahora filterTask
arrayTasks = filterTask;
Task.destroyRender(id);
}

// EDIT v1
/*
function edit(id) {
  const newText = prompt("Ingresa nuevo nombre de la tarea");
  // FIND solo retorna 1 elemento
  const oneTask = arrayTasks.find((task) => task._id === id);
  
  // cuando IF ejecuta solo UNA LINEA DE CODIGO se puede evitar usar {}
  if (oneTask === undefined) return

  oneTask._name = newText;

  Task.updateRender(id, newText);
}
*/

// EDIT v2
function edit(id) {
  const element = document.querySelector(`#task-name-${id}`);
  element.style.display = "none";
  // Para crear un elemento type node tenemos que usar
  // la funcion createElement
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.gap = "5px";

  const input = document.createElement("input");
  // create element input type text
  input.type = "text";
  input.placeholder = "Ingresa nuevo nombre";
  
  const button = document.createElement("button");
  button.textContent = "Save"
  button.style.backgroundColor = "#ccc";

  const buttonCancel = document.createElement("button");
  buttonCancel.textContent = "Cancel"
  buttonCancel.style.backgroundColor = "#ccc";

  // appenChild agrega los elementos indicados dentro del container
  container.appendChild(input);
  container.appendChild(button);
  container.appendChild(buttonCancel);

  // Recordemos que element es el h6 y queremos poner el container al costado
  // parentNode.insertBefore coloca el container antes del h6
  // element.nextSibling cambia la posicion a despues del h6
  element.parentNode.insertBefore(container, element.nextSibling);
}