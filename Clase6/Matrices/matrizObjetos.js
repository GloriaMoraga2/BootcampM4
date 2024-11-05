// Clase Estudiante que representa a un estudiante con su nombre y notas
class Estudiante {
  // Constructor que inicializa el nombre y las notas del estudiante
  constructor(nombre, notas) {
    this.nombre = nombre; // Almacena el nombre del estudiante
    this.notas = notas; // Almacena las notas como un array
  }

  // Método que calcula y devuelve el promedio de las notas del estudiante
  promedioNota() {
    // Suma todas las notas usando reduce y calcula el promedio
    const total = this.notas.reduce((acc, curr) => acc + curr, 0);
    return total / this.notas.length; // Retorna el promedio
  }
}

// Clase Escuela que representa una escuela con una lista de estudiantes
class Escuela {
  constructor() {
    this.estudiantes = []; // Inicializa un array vacío para almacenar estudiantes
  }

  // Método para agregar un estudiante a la lista
  agregarEstudiante(estudiante) {
    this.estudiantes.push(estudiante); // Agrega el estudiante al array
  }

  // Método que muestra la lista de estudiantes y sus promedios
  mostrarEstudiantes() {
    this.estudiantes.forEach((estudiante) => {
      // Muestra el nombre y el promedio del estudiante
      console.log(
        `Estudiante: ${estudiante.nombre}, Promedio: ${estudiante
          .promedioNota()
          .toFixed(2)}`
      );
    });
  }
}

// Creación de instancias de Estudiante
const estudiante1 = new Estudiante("Sabina", [10, 20, 30, 40]);
const estudiante2 = new Estudiante("Pablo", [60, 70, 90, 100]);

// Creación de una instancia de Escuela
const escuela = new Escuela();
// Agrega los estudiantes a la escuela
escuela.agregarEstudiante(estudiante1);
escuela.agregarEstudiante(estudiante2);

// Muestra la lista de estudiantes y sus promedios
escuela.mostrarEstudiantes();

/**Explicación detallada:
Clase Estudiante:

Representa a un estudiante con su nombre y las notas que ha recibido.
Constructor: Inicializa el objeto Estudiante con un nombre y un array de notas.
Método promedioNota:

Calcula el promedio de las notas del estudiante.
Utiliza el método reduce para sumar todas las notas en el array y luego divide esa suma por la cantidad de notas para obtener el promedio.
Devuelve el promedio.
Clase Escuela:

Representa una escuela que puede tener múltiples estudiantes.
Constructor: Inicializa un array vacío llamado estudiantes para almacenar instancias de Estudiante.
Método agregarEstudiante:

Acepta un objeto estudiante como parámetro y lo agrega al array estudiantes de la escuela.
Método mostrarEstudiantes:

Itera sobre el array estudiantes y utiliza forEach para mostrar el nombre y el promedio de cada estudiante en la consola.
Usa toFixed(2) para formatear el promedio a dos decimales.
Creación de instancias:

Se crean dos instancias de Estudiante, estudiante1 y estudiante2, con diferentes nombres y notas.
Se crea una instancia de Escuela, y se agregan los estudiantes a la escuela utilizando el método agregarEstudiante.
Finalmente, se llama al método mostrarEstudiantes para mostrar la lista de estudiantes y sus promedios en la consola.
Uso del código
Este código es útil para gestionar estudiantes en una escuela y calcular sus promedios. Puedes expandirlo para incluir más funcionalidades, 
como eliminar estudiantes, calcular el promedio general de la escuela, o mostrar estudiantes que superen un cierto promedio. */
