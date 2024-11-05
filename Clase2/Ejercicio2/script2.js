/**
 * El usuario deberá ser capaz de ingresar la cantidad y la categoría de productos que desea comprar.
 * Para simplificar el ejercicio, las categorías serán “ropa” y “electrónica”.
 * La categoría “ropa” incluirá un 5% de descuento; la categoría “electrónica” incluirá un 10% de descuento.
 * Debes crear al menos tres funciones: Una para obtener la categoría del producto,
 * otra para calcular el descuento basado en la categoría y
 * una última para calcular el precio total.
 * Los resultados se mostrarán a través de alert() y los datos se solicitarán utilizando prompt().
 */

function obtenerCategoria() {
  let categoria = prompt(
    "Ingrese la categoría del producto \n1.- Ropa \n2.- Electrónica"
  );
  if (categoria === "1") {
    return "ropa";
  } else if (categoria === "2") {
    return "electrónica";
  } else {
    return null;
  }
}

function obtenerCantidad() {
  let cantidad = prompt("Ingrese la cantidad de productos que desea comprar:");
  return parseInt(cantidad);
}

function calcularDescuento(categoria, precio) {
  let descuento = 0;

  if (categoria === "ropa") {
    descuento = precio * 0.05;
  } else if (categoria === "electrónica") {
    descuento = precio * 0.1;
  }

  return descuento;
}

// Obtener la categoría y la cantidad
let categoria = obtenerCategoria();
let cantidad = obtenerCantidad();
let precioPorProducto = parseFloat(prompt("Ingrese el precio del producto"));

if (categoria && cantidad && !isNaN(precioPorProducto)) {
  let precioTotal = precioPorProducto * cantidad;
  let descuento = calcularDescuento(categoria, precioTotal);
  let precioFinal = precioTotal - descuento;

  alert(
    "El descuento es: " +
      descuento +
      " pesos\nEl precio final es: " +
      precioFinal +
      " pesos"
  );
} else {
  alert("Categoría, cantidad o precio no válidos");
}
