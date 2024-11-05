let valor;
do {
  valor = parseInt(prompt("Ingresar un nro entre 1 y 999: ", ""));

  if (valor === 0) {
    break; // Salir del bucle si el usuario ingresa 0
  }

  document.write("El valor " + valor + " tiene ");

  if (valor >= 1 && valor <= 9) {
    document.write("un dígito");
  } else if (valor >= 10 && valor <= 99) {
    document.write("dos dígitos");
  } else {
    document.write("tres dígitos");
  }

  document.write("<br>");
} while (valor != 0);
