/**
 * Desarrolla el código necesario para resolver el ejercicio considerando los siguientes requerimientos:
 * • El programa debe permitir al usuario seleccionar el tipo de asiento (normal, preferencial, VIP) y la cantidad de asientos reservados.
 * • Los precios de los asientos son: o Asiento normal: $5.000 o Asiento preferencial: $9.000 o Asiento VIP: $ 13.000
 * • Si la cantidad de asientos reservados es mayor o igual a 5, se debe aplicar un descuento del 10%.
 * • Dentro del código debes utilizar al menos una estructura switch case, un bucle while y una condicional if-else.
 * • Si el número de asientos seleccionados es igual o menor a 0 se le debe indicar al usuario que debe ingresar un número positivo y volver a solicitarle la cantidad.
 * • Si el usuario elige cualquier asiento distinto a los tres disponibles, se le debe indicar que esa opción no es válida.
 */

function calcularPrecio(tipoAsiento) {
  let precio = 0;
  switch (tipoAsiento) {
    case "1":
      precio = 5000;
      break;
    case "2":
      precio = 9000;
      break;
    case "3":
      precio = 13000;
      break;
    default:
      alert("Tipo de asiento no válido");
      return null; // Retornar null si la opción no es válida
  }
  return precio; // Devolver el precio calculado
}

// Función para solicitar la cantidad de asientos
function cantidadAsiento() {
  let cantidad;
  while (true) {
    cantidad = parseInt(prompt("Ingrese la cantidad de asientos a reservar: "));
    if (cantidad > 0) {
      break; // Salir del bucle si la cantidad es válida
    } else {
      alert("La cantidad de asiento debe ser mayor a 0");
    }
  }
  return cantidad; // Retornar la cantidad válida
}

// Función para calcular el descuento
function descuentoAsiento(cantidad, precio) {
  if (cantidad >= 5) {
    return precio * cantidad * 0.1; // Descuento del 10%
  }
  return 0; // Sin descuento
}

// Función principal para gestionar la reserva
function reserva() {
  let tipoAsiento = prompt(
    "Ingrese el tipo de asiento que desea reservar. \n1.- Asiento Normal $5.000 \n2.- Asiento Preferencial $9.000 \n3.- Asiento VIP $13.000"
  );

  let precio = calcularPrecio(tipoAsiento); // Obtener el precio del asiento
  if (precio === null) {
    return; // Salir si la opción no es válida
  }

  let cantidad = cantidadAsiento(); // Obtener la cantidad de asientos
  let totalSinDescuento = precio * cantidad; // Calcular el total sin descuento
  let descuento = descuentoAsiento(cantidad, precio); // Calcular el descuento
  let totalConDescuento = totalSinDescuento - descuento; // Calcular el total con descuento

  // Mostrar el resultado final
  alert(
    `Total sin descuento: $${totalSinDescuento}\nDescuento: $${descuento}\nTotal a pagar: $${totalConDescuento}`
  );
}

// Iniciar el proceso de reserva
reserva();
