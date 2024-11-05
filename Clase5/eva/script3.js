// Clase para crear objetos de tarea
class Tarea {
  /**
   * Constructor de la clase Tarea.
   * @param {string} descripcion - La descripción de la tarea.
   */
  constructor(descripcion) {
    this.descripcion = descripcion; // Descripción de la tarea
    this.completada = false; // Estado inicial de la tarea (no completada)
  }
}

// Clase para gestionar una lista de tareas
class Tareas {
  /**
   * Constructor de la clase Tareas.
   * Inicializa una lista vacía para almacenar las tareas.
   */
  constructor() {
    this.listaTareas = []; // Array que contiene todas las tareas
  }

  /**
   * Método para agregar una tarea a la lista.
   * @param {string} descripcion - La descripción de la tarea a agregar.
   */
  agregarTarea(descripcion) {
    const nuevaTarea = new Tarea(descripcion); // Crea un objeto de tipo Tarea
    this.listaTareas.push(nuevaTarea); // Añade la nueva tarea a la lista de tareas
  }

  /**
   * Método para marcar una tarea como completada.
   * @param {number} index - El índice de la tarea a completar.
   */
  completarTarea(index) {
    if (index >= 0 && index < this.listaTareas.length) {
      this.listaTareas[index].completada = true; // Marca la tarea como completada
    }
  }

  /**
   * Método para filtrar tareas por su estado (completadas o pendientes).
   * @param {boolean} estado - El estado de las tareas (true para completadas, false para pendientes).
   * @returns {Array} Retorna un arreglo con las tareas filtradas.
   */
  filtrarTareas(estado) {
    return this.listaTareas.filter((tarea) => tarea.completada === estado); // Filtra las tareas según el estado
  }

  /**
   * Método para mostrar el número total de tareas.
   */
  mostrarNumeroTotalTareas() {
    console.log(`Número total de tareas: ${this.listaTareas.length}`); // Muestra el total de tareas
  }
}

// Ejemplos de uso
const tareas = new Tareas();

// Agregamos algunas tareas
tareas.agregarTarea("Hacer ejercicio");
tareas.agregarTarea("Estudiar JavaScript");
tareas.agregarTarea("Preparar la cena");

// Marcamos la primera tarea como completada
tareas.completarTarea(0);

// Filtramos las tareas pendientes (no completadas)
const tareasPendientes = tareas.filtrarTareas(false);
console.log("Tareas pendientes:", tareasPendientes);

// Mostramos el número total de tareas
tareas.mostrarNumeroTotalTareas();

/*Explicación detallada:
Clase Tarea:

Similar al código anterior, esta clase define una tarea con una descripción y un estado (completada), que se inicializa como false.
Clase Tareas:

Gestiona la lista de tareas y tiene varios métodos para agregar, completar, filtrar y mostrar tareas.
agregarTarea(descripcion): Añade una nueva tarea a la lista.
completarTarea(index): Marca una tarea como completada según el índice dado.
filtrarTareas(estado): Filtra las tareas dependiendo de su estado (completadas o no).
mostrarNumeroTotalTareas(): Imprime en consola el número total de tareas en la lista.
Diferencias en sintaxis:

En los métodos agregarTarea y completarTarea, se han añadido tipos de datos explícitos para los parámetros (string y number). 
Esto no es válido en JavaScript, pero es común en TypeScript (un superset de JavaScript). Si ejecutas este código en JavaScript puro, 
los tipos de datos (: string, : number, etc.) deben eliminarse. */
