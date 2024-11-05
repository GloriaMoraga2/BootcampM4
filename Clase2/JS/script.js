//categoria
function obtenerCategoria() {
  return prompt("Ingrese categoria del producto: ");
}

//descuento
function obtenerDescuento(categoria) {
  switch (categoria.toLower()) {
    case "electronica":
      return 10; //10% descuento
    case "ropa":
      return 5; //5% descuento
    default:
      return 0; //0% descuento
  }
}

//precio

function obtenerPrecio(params) {
  let precio = params.precio;
  let descuento = params.descuento;
  let precioFinal = precio - (precio * descuento) / 100;
  return precioFinal;
}
//stock
