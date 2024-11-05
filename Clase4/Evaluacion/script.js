function determinarTiempo(temperatura, lluvia, tiempo) {
  let message = "";

  if (isNaN(temperatura) && !isNaN(tiempo)) {
    temperatura = parseFloat(temperatura);
    tiempo = parseInt(tiempo);

    if (temperatura >= 12 && temperatura <= 30) {
      if (lluvia === "no" && tiempo >= 90) {
        message = "El clima es ideal para un picnic";
      } else if (lluvia === "si") {
        message = "No es ideal para un picnic, llueve";
      } else if (tiempo < 90) {
        message = "No tiene suficiente tiempo";
      } else {
        message = "No es ideal para un picnic, el tiempo es bajo";
      }
    } else if (temperatura < 12) {
      message = "la temperatura es baja para picnic";
    } else {
      message = "la temperatura es alta para un picnic";
    }
  } else {
    message = "ingrese valores acorde a lo indicado";
  }
  return message;
}

function planPicnic(params) {
  let temperatura, lluvia, tiempo;
  do {
    temperatura = prompt("Ingrese la temperatura");
  } while (isNaN(parseFloat(temperatura)));

  do {
    lluvia = prompt("¿Esta lloviendo?").toLowerCase();
  } while (lluvia !== "si" && lluvia !== "no" && lluvia != "si");

  do {
    tiempo = prompt("¿cuantos minutos tienes disponible?");
  } while (isNaN(parseInt(tiempo)));

  determinarTiempo(temperatura, lluvia, tiempo);
}
planPicnic();
