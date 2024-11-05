/**
 * El aeropuerto internacional del país donde vives quiere implementar una herramienta digital que permita ver la información sobre los números de vuelo,
 * y los terminales en donde van a salir.
 * Ésta se llamará “Eport”, sus funcionalidades incluyen:
 * desplegar la hora y la fecha;
 * el número de vuelo más próximo en volar,
 * y el terminal en el que saldrá.
 * Además, como muchos pasajeros utilizarán esta plataforma para ver sus vuelos,
 *  la idea es que pueda recordarles que deben traer los documentos necesarios para abordar el avión.
 * Te han contratado para que te encargues de generar la página web.
 */

// Desplegar la hora y la fecha
function mostrarFechaHora() {
  const today = new Date();

  // Obtener la fecha se suma 1 ya que los meses empiezan desde 0
  const fecha =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  // Obtener las horas y minutos
  const horas =
    today.getHours().toString().padStart(2, "0") +
    ":" +
    today.getMinutes().toString().padStart(2, "0");

  // Mostrar la fecha y la hora en el HTML
  document.getElementById("insertTime").innerHTML = horas;
  document.getElementById("insertDate").innerHTML = fecha;
}

mostrarFechaHora();

// Actualizar hora
setInterval(mostrarFechaHora, 60000);

//el número de vuelo más próximo en volar, y el terminal en el que saldr
//flightNumber numero vuelo
//terminalNumber terminal
function vuelo() {
  const today = new Date();

  const flight = Math.floor(Math.random() * 1000);
  const terminal = Math.floor(Math.random() * 100);

  document.getElementById("flightNumber").innerHTML = flight;
  document.getElementById("terminalNumber").innerHTML = terminal;
}
vuelo();

// Actualizar el vuelo y la terminal
setInterval(vuelo, 10000);

/* const mensaje =
  "Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleta de embarque. Mantémgase atento a los avisos mediante esta plataforma";
alert(mensaje); */

// Mostrar el modal cuando se cargue la página
function mensajeAviso() {
  $("#modal").modal("show"); // Mostrar el modal
}

// Llamar a la función cuando se cargue la página
$(document).ready(function () {
  mensajeAviso(); // Mostrar el modal cuando el DOM esté listo
});
