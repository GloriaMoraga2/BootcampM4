// ingreso de 3 colores switch, mostrar mensaje

//variables

let colores;

colores = prompt("Ingrese algunos de estos colores");
switch (colores) {
  case "rojo":
    document.write("Ingreso el color rojo");
    break;
  case "azul":
    document.write("Ingreso el color azul");
    break;
  case "verde":
    document.write("Ingreso el color verde");
    break;
  default:
    document.write("Color no reconocido");
    break;
}
