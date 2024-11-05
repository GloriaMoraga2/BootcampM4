// Función constructora para crear objetos de tipo Empleado
function Empleado(nombre, sueldo, departamento) {
  this.nombre = nombre; // Atributo nombre del empleado
  this.sueldo = sueldo; // Atributo sueldo del empleado
  this.departamento = departamento; // Atributo departamento del empleado

  // Método para calcular el sueldo después de un aumento
  this.aumentarSueldo = function (aumentoPorcentaje) {
    const aumento = this.sueldo * (aumentoPorcentaje / 100); // Calcular el aumento
    this.sueldo += aumento; // Aumentar el sueldo
    document.write(
      `El sueldo de ${this.nombre} después del aumento: ${this.sueldo} <br>`
    );
  };

  // Método para cambiar el departamento
  this.cambiarDepartamento = function (nuevoDepartamento) {
    this.departamento = nuevoDepartamento; // Cambiar el departamento
    document.write(
      `El departamento de ${this.nombre} cambio a : ${this.departamento} <br>`
    );
  };

  // Método para obtener detalles del empleado
  this.obtenerDetalles = function () {
    document.write(`Nombre: ${this.nombre} <br>`);
    document.write(`Sueldo: ${this.sueldo} <br>`);
    document.write(`Departamento: ${this.departamento} <br>`);
  };
}

// Crear una instancia de Empleado
const empleado1 = new Empleado("Gloria", 100000, "Ventas <br>");
// Obtener detalles del empleado
document.write("Detalles del colaborador: <br> ");
empleado1.obtenerDetalles(); // Imprime los detalles iniciales

// Calcular el sueldo después de un aumento del 10%
empleado1.aumentarSueldo(10); // Aumenta el sueldo en un 10%

// Cambiar el departamento a 'Gerencia TI'
empleado1.cambiarDepartamento("Gerencia TI <br>"); // Cambio de departamento

// Obtener los detalles actualizados del empleado
document.write(`Informacion actualizada de:<br>`);
empleado1.obtenerDetalles(); // Imprime los detalles actualizados
