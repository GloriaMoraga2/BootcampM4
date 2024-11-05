/* class Persona {
  constructor(nombre, cumpleanos, idioma) {
    this.nombre = nombre;
    this.cumpleanos = cumpleanos;
    this.idioma = idioma;
  }
  get edad() {
    return this.calcularEdad();
  }
  calcularEdad() {
    return new Date().getFullYear() - this.cumpleanos;
  }
  saludar() {
    console.log(
      "Hola, mi nombre es  ${this.nombre}, así saludo en ${this.idioma}."
    );
  }
  static especie() {
    return "humano";
  }
}

class Programador extends Persona {
  saludar() {
    console.log("Hola, soy un programador y mi nombre es ${this.nombre}");
  }

  saludoHeredado() {
    super.saludar();
  }
}
const cony = new Persona("Constanza", 1994, "Español");
const isabel = new Persona("Isabel", 1985, "Español");

isabel.saludar();
cony.saludar();
cony.saludoHeredado();
 */

/* var a = 123;
console.log(a);
console.log(`typeof: ${typeof a}`);

var a = String(a); //Aquí transformamos el tipo de dato.
console.log(a);
console.log(`typeof: ${typeof a}`);

var a = "456";
console.log(a);
console.log(`typeof: ${typeof a}`);
var a = Number(a); //Aquí transformamos el tipo de dato.
console.log(a);
console.log(`typeof: ${typeof a}`);

var a = "true";
console.log(a);
console.log(`typeof: ${typeof a}`);
var a = 9007199254740991;
console.log(a);
console.log(`typeof: ${typeof a}`);

var a = BigInt(a); //Aquí transformamos el tipo de dato.
console.log(a);
console.log(`typeof: ${typeof a}`);
var a = Boolean(a); //Aquí transformamos el tipo de dato.
console.log(a);
console.log(`typeof: ${typeof a}`);
var a = "hola";
console.log(a);
console.log(`typeof: ${typeof a}`);
var a = Symbol(a); //Aquí transformamos el tipo de dato.
console.log(a);
console.log(`typeof: ${typeof a}`); */
