let tareas = [
  { id: 1, descripcion: "Hacer ejercicio", completada: false },
  { id: 2, descripcion: "Estudiar JavaScript", completada: false },
  { id: 3, descripcion: "Preparar la cena", completada: false },
];

// Función para eliminar una tarea del array
function deleteTarea(id) {
  const index = tareas.findIndex((tarea) => tarea.id === id);
  if (index !== -1) {
    tareas.splice(index, 1);
  } else {
    console.error("Tarea no encontrada");
  }
}
// Ejemplo
deleteTarea(2);
