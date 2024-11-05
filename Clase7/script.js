//devuelve una posicion especifica
let texto = "Hola";
console.log(texto.charAt(2)); //1

//unir cadenas de texto

let texto1 = "Hola";
let texto2 = "Mundo";

console.log(texto1.concat(texto2)); //HolaMundo

//cadena dentro de una cadena

let texto3 = "Hola Mundo";
console.log(texto3.includes("Mundo")); //True

//lastIndexOf
let texto4 = "Hola Mundo";
console.log(texto4.lastIndexOf("o")); //9

//reemplazar una subcadena por otra

let texto5 = "Hola Mundo";
console.log(texto5.replace("Hola", "Adios")); //Adios mundo

let texto6 = "15308247-2";
console.log(texto6.replace("-", " ")); //15308247 2

//dividir cadena

let texto7 = "Hola, Mundo";
console.log(texto7.split(",")); //["Hola", " Mundo"]
