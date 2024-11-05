class empleado {
  constructor(nombre, salario, departamento) {
    this.nombre = nombre;
    this.salaria = salario;
    this.departamento = departamento;
  }
  aumento(sueldo) {
    this.sueldo = this.sueldo + 10;
  }

  cambioDept() {
    this.departamento = "Ventas";
  }

  detalleEmpleado() {
    document.write(
      `Nombre: ${this.nombre}, Sueldo: ${this.sueldo}, Departamento: ${this.departamento}`
    );
  }
}

const empleado1 = new empleado(`Pedro Perez`, 100000, `Ventas`);
document.write(`Nombre Empleado: ` + empleado1.nombre + `<br>`);
document.write(`Sueldo Empleado: ` + empleado1.sueldo + `<br>`);
document.write(`Departamento Empleado: ` + empleado1.departamento + `<br>`);

empleado1.aumento(100000);
document.write(
  `El salario de ${this.nombre}  despues del aumento es : ${this.salario} <br>`
);

empleado1.cambioDept(`Marcketing`);
document.write(`El nuevo departamento es: ${this.departamento} <br>`);

empleado1.detalleEmpleado();
document.write(
  `Nombre: ${this.nombre}, Salario: ${this.salario}, Departamento: ${this.departamento}`
);
