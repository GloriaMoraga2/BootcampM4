/*-----------------------Métodos-----------------------------------*/

/*
 class Coche {
  constructor(marca, color) {
    this.marca = marca;
    this.color = color;
    this.velocidad = 0; // Un atributo adicional para la velocidad
  }

  // Método para mostrar la información del coche
  mostrarInfo() {
    console.log(`Este coche es un ${this.marca} de color ${this.color}.`);
  }

  // Método para acelerar el coche
  acelerar() {
    this.velocidad += 10;
    console.log(`El coche está acelerando. Velocidad: ${this.velocidad} km/h`);
  }

  // Método para frenar el coche
  frenar() {
    this.velocidad -= 10;
    console.log(`El coche está frenando. Velocidad: ${this.velocidad} km/h`);
  }
}

// Crear un nuevo coche
const miCoche = new Coche("Toyota", "rojo");

// Llamamos a los métodos
miCoche.mostrarInfo();
miCoche.acelerar();
miCoche.frenar(); 

*/

/*-----------------------Herencia-----------------------------------*/
/* 

// Clase padre Vehiculo
class Vehiculo {
  constructor(marca, color) {
    this.marca = marca;
    this.color = color;
  }

  // Método común para mostrar información
  mostrarInfo() {
    console.log(`Este vehículo es un ${this.marca} de color ${this.color}.`);
  }
}

// Clase hija Coche que hereda de Vehiculo
class Coche extends Vehiculo {
  constructor(marca, color, puertas) {
    super(marca, color); // Llama al constructor de la clase padre
    this.puertas = puertas; // Atributo específico de Coche
  }

  // Método específico para Coche
  mostrarInfo() {
    super.mostrarInfo(); // Llama al método de la clase padre
    console.log(`Tiene ${this.puertas} puertas.`);
  }
}

// Crear un coche
const miCoche = new Coche("Toyota", "rojo", 4);
miCoche.mostrarInfo(); 

*/

/*-----------------------Encapsulamiento-----------------------------------*/
/* 
class Coche {
    #velocidad;  // Atributo privado
  
    constructor(marca, color) {
      this.marca = marca;
      this.color = color;
      this.#velocidad = 0;  // Inicializamos el atributo privado
    }
  
    // Método para acelerar el coche
    acelerar() {
      this.#velocidad += 10;
      console.log(`Velocidad: ${this.#velocidad} km/h`);
    }
  
    // Método para obtener la velocidad
    obtenerVelocidad() {
      return this.#velocidad;
    }
  }
  
  const miCoche = new Coche('Toyota', 'rojo');
  miCoche.acelerar();
  console.log(`La velocidad actual es: ${miCoche.obtenerVelocidad()} km/h`);
  
*/

/*-----------------------Polimorfismo-----------------------------------*/
/* 
class Animal {
  hacerSonido() {
    console.log("Este animal hace un sonido.");
  }
}

class Perro extends Animal {
  hacerSonido() {
    console.log("El perro ladra.");
  }
}

class Gato extends Animal {
  hacerSonido() {
    console.log("El gato maúlla.");
  }
}

const miPerro = new Perro();
const miGato = new Gato();

miPerro.hacerSonido(); // El perro ladra.
miGato.hacerSonido(); // El gato maúlla. */

class Animal {
  hablar() {
    console.log("Animal habla");
  }
}

class Perro extends Animal {
  hablar() {
    console.log("guau- guau");
  }
}

class Gato extends Animal {
  hablar() {
    console.log("miau- miau");
  }
}

function hacerHablarAnimal(Animal) {
  Animal.hablar();
}

//Llamando a la funcion con un objeto de tipo perro
hacerHablarAnimal(new Perro());
hacerHablarAnimal(new Gato());
