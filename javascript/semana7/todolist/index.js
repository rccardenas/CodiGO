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
  inputTask.focus();
};

// Agregamos listener para crear tarea solo con Enter
inputTask.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    btnCreate.click();
  }
});

function destroy(id) {
// Para eliminar un elemento de un array podemos pedir que traiga 
// todos los elementos menos el que tenga el ID que se esta recibiendo
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
  container.id = `task-edit-${id}`;
  container.style.display = "flex";
  container.style.gap = "5px";

  const input = document.createElement("input");
  input.id = `task-edit-${id}`;
  // create element input type text
  input.type = "text";
  input.placeholder = "Ingresa nuevo nombre";
  
  const button = document.createElement("button");
  button.textContent = "Save"
  button.style.backgroundColor = "#ccc";
  button.onclick = function () {
    if (input.value === "") {
      alert("Ingrese un nombre");
      return
    }

    // update a nivel array
    const oneTask = arrayTasks.find((task) => task._id === id);
    oneTask._name = input.value;

    // update a nivel visual
    element.textContent = input.value;
    element.style.display = "block";
    container.remove();
  }

  const buttonCancel = document.createElement("button");
  buttonCancel.textContent = "Cancel"
  buttonCancel.style.backgroundColor = "#ccc";
  buttonCancel.onclick = function () {
    container.remove();
    element.style.display = "block";
  }

  // appenChild agrega los elementos indicados dentro del container
  container.appendChild(input);
  container.appendChild(button);
  container.appendChild(buttonCancel);

  // Recordemos que element es el h6 y queremos poner el container al costado
  // parentNode.insertBefore coloca el container antes del h6
  // element.nextSibling cambia la posicion a despues del h6
  element.parentNode.insertBefore(container, element.nextSibling);
}

