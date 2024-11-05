/* // Clase para gestionar tareas
class Tareas {
    constructor() {
      this.listaTareas = []; // Array que contiene todas las tareas
    }
  
    agregarTarea(descripcion) {
      if (descripcion) {
        const nuevaTarea = new Tarea(descripcion);
        this.listaTareas.splice(index);

        return this; // Permitir encadenar métodos
      } else {
        console.error("La descripción de la tarea no puede estar vacía.");
      }
    }}
 */

let vec = [];
for (let f = 0; f < 10; f++) {
  let valor = parseInt(Math.random() * 1000);
  vec.push(valor);
}
document.write("Vector antes de borrar<br>");
for (let f = 0; f < 10; f++) {
  document.write(vec[f] + "<br>");
}
for (let f = 0; f < 10; f = f + 2) {
  delete vec[f];
}
document.write("Vector luego de borrar las posiciones pares<br>");
for (let f = 0; f < 10; f++) {
  document.write(vec[f] + "<br>");
}
