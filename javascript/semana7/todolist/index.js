// Importar nuestro task
import { Task } from "./task.js";

const inputTask = document.querySelector(".input__task");
const btnCreate = document.querySelector(".btn__create");
const listTask = document.querySelector(".container__list__task");

// Vamos a crear un array vacio en el cual guardaremos las tareas creadas
const arrayTasks = [];

btnCreate.onclick = function () {
  const taskText = inputTask.value;

  // Ahora validaremos que el input no este vacio
  if (taskText === "") {
    alert("Ingrese tarea a realizar");
    return
  }

  const task = new Task(taskText, new Date(), 1);
  arrayTasks.push(task);
  console.log(arrayTasks);
  listTask.innerHTML += task.render();

  inputTask.value = "";
};
