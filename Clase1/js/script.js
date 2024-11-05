let nombre;
let edad;

nombre = prompt("Ingrese su nombre");
edad = prompt("Ingrese su edad");
document.write("Hola ");
document.write(nombre);
document.write(" tienes ");
document.write(edad);
document.write(" años ");

//Variables let, en la lineas 1 y 2 declaramos las variables
//prompt, es una función que nos permite obtener información del usuario
//document.write, es una función que nos permite escribir en la página web
// La función prompt nos permite obtener información del usuario, en este caso, el nombre y la edad
// La función document.write nos permite escribir en la página web, en este caso, un mensaje
// La función document.write nos permite escribir en la página web, en este caso, un mensaje

function updateTime() {
  const timeElement = document.getElementById("insertTime");
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  timeElement.textContent = timeString;
}

// Función para actualizar la fecha
function updateDate() {
  const dateElement = document.getElementById("insertDate");
  const now = new Date();
  const dateString = now.toLocaleDateString();
  dateElement.textContent = dateString;
}

// Actualizar cada segundo
setInterval(updateTime, 1000);
updateDate();
