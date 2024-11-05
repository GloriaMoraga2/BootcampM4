// Clase Estudiante que representa a un estudiante con su nombre y sus notas
class Estudiante {
  // Constructor que inicializa el nombre y las notas del estudiante
  constructor(nombre, notas) {
    this.nombre = nombre; // Almacena el nombre del estudiante
    this.notas = notas; // Almacena las notas como un array
  }

  // Método que muestra las notas del estudiante
  mostrarNotas() {
    console.log(`Las notas de ${this.nombre}:`); // Muestra el nombre del estudiante
    // Itera sobre cada nota y la muestra en la consola
    this.notas.forEach((nota) => {
      console.log(nota);
    });
  }

  // Método que calcula y devuelve el promedio de las notas del estudiante
  promedioNota() {
    // Suma todas las notas usando reduce y calcula el promedio
    const total = this.notas.reduce((acc, curr) => acc + curr, 0);
    return total / this.notas.length; // Retorna el promedio
  }
}

// Creación de una instancia de Estudiante
const estudiante1 = new Estudiante("Juan", [10, 20, 30]);

// Llamada al método para mostrar las notas del estudiante
estudiante1.mostrarNotas();
// Calcula y muestra el promedio de las notas del estudiante
console.log(`Promedio: ${estudiante1.promedioNota()}`);

/* Explicación detallada:
Clase Estudiante:

Esta clase representa a un estudiante, incluyendo su nombre y las notas que ha recibido en sus materias.
Constructor:

El constructor de la clase toma dos parámetros: nombre y notas.
this.nombre almacena el nombre del estudiante.
this.notas almacena un array de números que representan las notas del estudiante.
Método mostrarNotas:

Este método se encarga de mostrar las notas del estudiante en la consola.
Utiliza console.log para imprimir el nombre del estudiante seguido de la palabra "Las notas de".
Luego, utiliza forEach para iterar sobre el array de notas y mostrar cada nota individualmente en la consola.
Método promedioNota:

Este método calcula el promedio de las notas del estudiante.
Utiliza el método reduce para sumar todas las notas en el array:
acc es el acumulador que comienza en 0 (el segundo parámetro de reduce).
curr es el valor actual en la iteración.
Una vez que se obtiene la suma total, el promedio se calcula dividiendo esta suma entre la cantidad de notas (this.notas.length).
El método devuelve el promedio calculado.
Creación de una instancia de Estudiante:

Se crea un objeto estudiante1 de la clase Estudiante, inicializándolo con el nombre 'Juan' y un array de notas [10, 20, 30].
Llamadas a métodos:

Se llama al método mostrarNotas para imprimir las notas de estudiante1 en la consola.
Luego, se llama al método promedioNota para calcular el promedio de las notas de estudiante1 y se imprime en la consola.
Uso del código
Este código es útil para gestionar la información de un estudiante y calcular su promedio de notas. Podrías expandir este código para incluir más características, 
como modificar las notas, agregar nuevas materias, o manejar múltiples estudiantes.*/
