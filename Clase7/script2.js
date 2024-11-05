let numero = 1_000_000; //un millon
console.log(numero); //1000000

let numeroConDecimales = 123_456.78;
console.log(numeroConDecimales); //123456.78

let binario = 0b1010_1011;
console.log(binario); //171

let hexadecimal = 0xff_ec_de_5e;
console.log(hexadecimal); //4293713502

//operador de fusion nula

//let resultado = valor1 ?? valor2;

let Brasil = null;
let chile = 1;
let resultado2 = Brasil ?? chile;
console.log(resultado2); //1

//encadenamiento opcional

const usuario = {
  nombre: "Juan",
  direccion: {
    ciudad: "Santiago",
  },
};

console.log(usuario.direccion?.ciudad);
console.log(usuario.direccion?.pais);


