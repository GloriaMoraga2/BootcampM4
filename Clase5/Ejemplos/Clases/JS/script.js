/*x persona, puede ver su saldo actual, puede depositar o retirar dinero*/
class cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  depositar(dinero) {
    this.saldo = this.saldo + dinero;
  }

  retirar(dinero) {
    this.saldo = this.saldo - dinero;
  }
}

const cliente1 = new cliente("Gloria", 1000);
document.write("Nombre cliente: " + cliente1.nombre + "<br>");
document.write("Saldo cliente: " + cliente1.saldo + "<br>");
cliente1.depositar(500);
document.write(
  "Saldo cliente despues de depositar: " + cliente1.saldo + "<br>"
);
cliente1.retirar(200);
document.write("Saldo cliente despues de retirar: " + cliente1.saldo + "<br");
