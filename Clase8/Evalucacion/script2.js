const rolesSymbols = Symbol("role");

const empleado = {
  [rolesSymbols]: "Supervisoar",
  nombre: "Juanita",
  salario: 600000,
  datosPersonales: {
    edad: 35,
    sexo: "F",
    direccion: "Calle 123",
  },
};

//Proxy

const empleadoProxy = new Proxy(empleado, {
  get(target, prop, receiver) {
    if (Reflect.has(target, prop) && target[rolesSymbols] === "gerente") {
      return Reflect.get(target, prop, receiver);
    } else if (
      Reflect.has(target, prop) &&
      target[rolesSymbols] === "Supervisor"
    ) {
      if (prop !== "salario") {
        return Reflect.get(target, prop, receiver);
      } else {
        console.log(`Acceso denegado a ${prop}para supervisor`);
        return undefined;
      }
    } else if (prop !== "salario" && prop != "datosPersonales") {
      return Reflect.get(target, prop, receiver);
    } else {
      console.log(`Acceso denegado a ${prop}`);
      return undefined;
    }
  },
});

console.log(empleadoProxy.nombre); //acceso permitido
console.log(empleadoProxy.salario); // acceso deneago
console.log(empleadoProxy.datosPersonales);
