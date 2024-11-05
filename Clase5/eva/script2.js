// Clase para crear objetos de tarea
class Tarea {
  /* Constructor de la clase Tarea.*/
  constructor(descripcion) {
    this.descripcion = descripcion; // Descripción de la tarea
    this.completada = false; // Estado inicial de la tarea (no completada)
  }
}

// Clase para gestionar una lista de tareas
class Tareas {
  /*
   * Constructor de la clase Tareas.
   * Inicializa una lista vacía para almacenar las tareas.
   */
  constructor() {
    this.listaTareas = []; // Array que contiene todas las tareas
  }

  agregarTarea(descripcion) {
    if (descripcion) {
      const nuevaTarea = new Tarea(descripcion); // Crea un objeto de tipo Tarea
      this.listaTareas.push(nuevaTarea); // Añade la nueva tarea a la lista de tareas
      return this; // Permite encadenar métodos
    } else {
      console.error("La descripción de la tarea no puede estar vacía.");
    }
  }

  completarTarea(index) {
    if (index >= 0 && index < this.listaTareas.length) {
      this.listaTareas[index].completada = true; // Marca la tarea como completada
    } else {
      console.error("Índice fuera de rango."); // Error si el índice no es válido
    }
    return this; // Permite encadenar métodos
  }

  eliminarTarea(index) {
    if (index >= 0 && index < this.listaTareas.length) {
      this.listaTareas.splice(index, 1); // Elimina la tarea de la lista
    } else {
      console.error("Índice fuera de rango."); // Error si el índice no es válido
    }
    return this; // Permite encadenar métodos
  }

  filtrarTareas(estado) {
    return this.listaTareas.filter((tarea) => tarea.completada === estado); // Filtra las tareas según el estado y mostrara las tareas completadas.
  }

  /**
   * Método para mostrar el número total de tareas.
   */
  mostrarNumeroTotalTareas() {
    console.log(`Número total de tareas: ${this.listaTareas.length}`); // Muestra el total de tareas
  }

  mostrarTareas() {
    if (this.listaTareas.length > 0) {
      console.log("Lista de tareas:");
      this.listaTareas.map((tarea, index) => {
        console.log(
          `${index + 1}. ${tarea.descripcion} - ${
            tarea.completada ? "Completada" : "Pendiente"
          }`
        );
      });
    } else {
      console.log("No hay tareas en la lista."); // Mensaje si no hay tareas
    }
  }
}

// Ejemplos de uso
const tareas = new Tareas();

// Agregamos algunas tareas, completamos una y eliminamos otra
tareas
  .agregarTarea("Hacer ejercicio")
  .agregarTarea("Estudiar JavaScript")
  .agregarTarea("Preparar la cena")
  .completarTarea(0) // Marcamos la primera tarea como completada
  .eliminarTarea(2); // Eliminamos la tercera tarea

// Filtramos las tareas pendientes (no completadas)
const tareasPendientes = tareas.filtrarTareas(false);
console.log("Tareas pendientes:", tareasPendientes);

// Mostramos todas las tareas y el número total
tareas.mostrarTareas();
tareas.mostrarNumeroTotalTareas();

/*Explicación detallada:
Clase Tarea:

Esta clase define una tarea individual con una descripción y un estado (completada o no). 
El estado se inicializa como false, indicando que la tarea no está completada.

Clase Tareas:
Es la clase que gestiona un conjunto de tareas, con varios métodos para agregar, completar, eliminar, filtrar y mostrar las tareas.
agregarTarea(descripcion): Añade una nueva tarea si la descripción no está vacía.
completarTarea(index): Marca una tarea como completada basándose en su índice en la lista.
eliminarTarea(index): Elimina una tarea en un índice específico.
filtrarTareas(estado): Filtra las tareas según si están completadas o no.
mostrarNumeroTotalTareas(): Muestra el número total de tareas.
mostrarTareas(): Imprime en consola todas las tareas con su descripción y estado.
Encadenamiento de métodos:

Los métodos devuelven this para permitir el encadenamiento. Esto permite realizar varias acciones consecutivas sobre el objeto de Tareas sin necesidad de repetir el nombre del objeto.
Ejemplo de uso:

El código de ejemplo crea una lista de tareas, añade tres tareas, marca una como completada, elimina otra y luego muestra las tareas pendientes y el número total de tareas. */
