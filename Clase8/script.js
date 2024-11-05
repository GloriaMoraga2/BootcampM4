//puntos claves Symbols
//Unicidad: Los simbolos son unicos en un contexto

const symb1 = Symbol("descripcion");
const symb2 = Symbol("descripcion");

console.log(symb1 === symb2); //false

//propiedades objetos
//Los objetos en JavaScript tienen propiedades que pueden ser accedidas mediante el punto o corchet

const sym = Symbol("miSymbol");
const obj = {
  [sym]: "valor",
};
console.log(obj[sym]); //valor

//
