// Clase Estudiante que representa a un estudiante con su nombre y notas por materia
class Estudiante {
  // Constructor que inicializa el nombre y las notas del estudiante
  constructor(nombre, notaPorMateria) {
    this.nombre = nombre; // Almacena el nombre del estudiante
    this.notaPorMateria = notaPorMateria; // Almacena las notas como un array bidimensional
  }

  // Método que muestra las notas del estudiante
  mostrarNotas() {
    console.log(`Notas de ${this.nombre}:`); // Muestra el nombre del estudiante
    // Itera sobre cada conjunto de notas por materia
    this.notaPorMateria.forEach((notas, index) => {
      // Muestra las notas de cada materia, usando el índice para enumerarlas
      console.log(`Materia ${index + 1}: ${notas.join(", ")}`);
    });
  }

  // Método que calcula y devuelve el promedio general de las notas del estudiante
  promedioGeneral() {
    let totalNotas = 0; // Inicializa el total de notas
    let totalMaterias = 0; // Inicializa el total de materias

    // Itera sobre cada conjunto de notas por materia
    this.notaPorMateria.forEach((notas) => {
      // Suma las notas de la materia actual
      totalNotas += notas.reduce((acc, curr) => acc + curr, 0);
      // Aumenta el total de materias por la cantidad de notas en la materia actual
      totalMaterias += notas.length;
    });

    // Retorna el promedio general (suma total de notas dividido por el número total de notas)
    return totalNotas / totalMaterias;
  }
}

// Crea una instancia de Estudiante con un nombre y un array de notas
const estudiante1 = new Estudiante("Sabina", [
  [8, 9, 7], // Notas de la materia 1
  [9, 8, 9], // Notas de la materia 2
  [7, 8, 9], // Notas de la materia 3
]);

// Llama al método para mostrar las notas del estudiante
estudiante1.mostrarNotas();
// Calcula y muestra el promedio general, formateado a dos decimales
console.log(`Promedio General: ${estudiante1.promedioGeneral().toFixed(2)}`);

/* Explicación detallada:
Clase Estudiante:

Se define una clase llamada Estudiante que tiene dos propiedades:
nombre: el nombre del estudiante.
notaPorMateria: un array bidimensional donde cada sub-array contiene las notas de una materia específica.
Constructor:

El constructor inicializa las propiedades nombre y notaPorMateria con los valores proporcionados al crear una instancia de Estudiante.
Método mostrarNotas:

Este método se encarga de mostrar las notas del estudiante.
Utiliza forEach para iterar sobre cada conjunto de notas (materias) y utiliza join(', ') para convertir el array de notas en una cadena, separando los elementos por comas.
Método promedioGeneral:

Este método calcula el promedio general de todas las notas del estudiante.
Utiliza dos variables:
totalNotas: suma todas las notas.
totalMaterias: cuenta el número total de notas.
Utiliza reduce para sumar las notas de cada materia y actualiza totalMaterias con la longitud de cada sub-array de notas.
Finalmente, devuelve el promedio al dividir totalNotas entre totalMaterias.
Instancia de Estudiante:

Se crea una instancia de la clase Estudiante, llamada estudiante1, con un nombre y un array de notas.
Luego se llama al método mostrarNotas para imprimir las notas en la consola.
Finalmente, se calcula el promedio general y se muestra, formateándolo a dos decimales.
Uso del código
Este código puede ser utilizado en una aplicación que necesite gestionar estudiantes y sus notas. Puedes expandirlo añadiendo métodos para modificar las notas o agregar nuevas materias. */
