// Definimos la clase Persona
class Persona {
  // El constructor de la clase Persona inicializa los atributos nombre y edad
  constructor(nombre, edad) {
    this.nombre = nombre; // Atributo nombre
    this.edad = edad; // Atributo edad
  }

  // Método para imprimir los datos de la persona
  imprimir() {
    // document.write escribe el nombre y la edad de la persona en el documento HTML
    document.write(`Nombre: ${this.nombre} <br>`);
    document.write(`Edad: ${this.edad} <br>`);
  }
}

// Definimos la clase Empleado que extiende la clase Persona (herencia)
class Empleado extends Persona {
  // El constructor de la clase Empleado inicializa nombre, edad y salario
  // `super(nombre, edad)` llama al constructor de la clase padre (Persona)
  constructor(nombre, edad, salario) {
    super(nombre, edad); // Llamada al constructor de Persona para inicializar nombre y edad
    this.salario = salario; // Atributo salario, propio de la clase Empleado
  }

  // Método para imprimir los datos del empleado
  // Este método sobrescribe (override) el método imprimir() de la clase Persona
  imprimir() {
    // Llamamos al método imprimir() de la clase Persona (super.imprimir())
    super.imprimir(); // Imprime el nombre y la edad, heredados de Persona
    // document.write escribe el salario del empleado en el documento HTML
    document.write(`Salario: ${this.salario} <br>`);
  }
}

// Creamos una instancia de la clase Persona
const persona1 = new Persona("Gloria", 42);
// Llamamos al método imprimir() de persona1 para mostrar su nombre y edad en el HTML
persona1.imprimir(); // Nombre: Gloria, Edad: 42
// También mostramos el nombre y la edad directamente usando document.write
document.write(persona1.nombre + persona1.edad + "<br>"); // Gloria42

// Creamos una instancia de la clase Empleado, que también es una Persona
const empleado1 = new Empleado("Gloria", 42, 100000);
// Llamamos al método imprimir() de empleado1, que primero imprime los datos de Persona y luego el salario
empleado1.imprimir(); // Nombre: Gloria, Edad: 42, Salario: 100000
// También mostramos el salario directamente usando document.write
document.write(empleado1.salario); // 100000

/*Explicación del código:
Clase Persona:
Es una clase básica que contiene dos atributos: nombre y edad.
Tiene un método imprimir(), que usa document.write() para mostrar en la página el nombre y la edad de la persona.

Clase Empleado (herencia de Persona):
Empleado extiende a Persona, lo que significa que hereda los atributos y métodos de Persona.
En el constructor de Empleado, se usa super(nombre, edad) para llamar al constructor de Persona y así inicializar los atributos nombre y edad de la clase padre.
Empleado también tiene un atributo adicional: salario, específico de esta clase.

El método imprimir() en Empleado sobrescribe el método imprimir() de Persona. Sin embargo, dentro de este nuevo método, 
se llama al método de la clase padre con super.imprimir() para imprimir primero el nombre y la edad. Luego, imprime el salario del empleado.
Instancias y llamadas:

Primero, se crea una instancia de la clase Persona llamada persona1 con el nombre "Gloria" y edad 42.
Después, se llama al método imprimir() de persona1 para mostrar los datos.
También se usa document.write() para mostrar el nombre y la edad accediendo directamente a los atributos de persona1.
Luego, se crea una instancia de la clase Empleado llamada empleado1, que también se llama "Gloria", tiene 42 años y un salario de 100,000.
Se llama al método imprimir() de empleado1, que primero imprime el nombre y la edad (heredados de Persona), y luego el salario.
Finalmente, se imprime el salario de empleado1 directamente con document.write().

Conceptos importantes:

Herencia:
La clase Empleado hereda de Persona usando extends, lo que le permite reutilizar atributos y métodos de Persona. 
Esto es un ejemplo de programación orientada a objetos.

super():
Se usa para llamar al constructor o métodos de la clase padre. En este caso, se usa para inicializar el nombre y la edad en la clase Empleado y 
también para llamar al método imprimir() de Persona.

Sobrescritura (override):
La clase Empleado sobrescribe el método imprimir() de Persona para añadir la funcionalidad adicional de imprimir el salario.
Este es un ejemplo sencillo de cómo usar la herencia en JavaScript para crear clases más específicas (como Empleado que extiende a Persona) 
y cómo los métodos pueden ser reutilizados y sobrescritos. */
