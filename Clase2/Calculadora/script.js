let pantalla = document.getElementById("pantalla");

function agregarNumero(numero) {
  pantalla.value += numero;
}

function agregarOperador(operador) {
  if (
    pantalla.value !== "" && //para verificar que la pantalla no este vacia
    !pantalla.value.endsWith("+") && // para asegurar que la pantalla no termine en un operador
    !pantalla.value.endsWith("-") &&
    !pantalla.value.endsWith("*") &&
    !pantalla.value.endsWith("/")
  ) {
    pantalla.value += operador; //Si las condiciones son verdaderas se ejecuta
  }
}

function calcular() {
  try {
    pantalla.value = eval(pantalla.value);
  } catch (error) {
    pantalla.value = "Error";
  }
}

function limpiar() {
  pantalla.value = "";
}
