/* sistema gestion de empleados
    symbol = rol empleado
    objetos con propiedades privadas
    Proxy de acceso
    console.log
*/

/*Descripción: Se crea un símbolo rolesSymbols utilizando la función Symbol(). Los símbolos son un tipo de dato en JavaScript 
que garantizan unicidad y se usan comúnmente para crear propiedades "privadas" en los objetos.
Propósito: rolesSymbols se usa para definir un rol privado en el objeto empleado. Al ser un símbolo, 
no puede ser accedido directamente sin saber el símbolo que se usó, proporcionando una capa de "privacidad". */

const rolesSymbols = Symbol("role");

/* Descripción: Se define el objeto empleado con varias propiedades:
[rolesSymbols]: Esta propiedad usa el símbolo rolesSymbols como clave para asignarle el valor "empleado", 
lo que indica que este empleado tiene un rol específico. Al usar un símbolo, esta propiedad no será fácilmente 
visible ni accesible sin conocer el símbolo.
*/
// objetos con propiedades privadas

const empleado = {
  [rolesSymbols]: "empleado",
  nombre: "Juan",
  salario: "250000",
  datosPersonales: {
    edad: 30,
    direccion: "calle 123",
  },
}; //Juan

// proxy de acceso

/*Descripción: Aquí se crea un Proxy llamado empleadoProxy que envuelve el objeto empleado y utiliza un manejador (handler) 
que intercepta el acceso a las propiedades mediante la trampa get.

Trampa get:
Parámetros:
target: El objeto original (en este caso, empleado).
prop: La propiedad que se está intentando acceder.
receiver: El objeto Proxy.
Funcionamiento:
Si la propiedad existe y el rol es "Gerente": Se permite el acceso completo a todas las propiedades usando Reflect.get.
Si la propiedad no es ni salario ni datosPersonales: Se permite el acceso limitado y se retorna el valor de la propiedad.
Si la propiedad es salario o datosPersonales: Se deniega el acceso y se muestra un mensaje de advertencia en la consola.
Propósito: Este Proxy es utilizado para restringir el acceso a ciertas propiedades sensibles, como el salario y datosPersonales, en función del rol del empleado. */
const empleadoProxy = new Proxy(empleado, {
  get(target, prop, receiver) {
    if (Reflect.has(target, prop) && target[rolesSymbols] === "Gerente") {
      //permiso completo
      return Reflect.get(target, prop, receiver);
    } else if (prop !== "salario" && prop != "datosPersonales") {
      //permiso limitado
      return Reflect.get(target, prop, receiver);
    } else {
      console.log(`Acceso Denegado a ${prop}`);
    }
  },
});

//console log
console.log(empleadoProxy.nombre); //Juan
console.log(empleadoProxy.salario); //Acceso Denegado a salario
console.log(empleadoProxy.datosPersonales); //Acceso Denegado a datosPersonales
console.log(empleadoProxy.edad); //30
console.log(empleadoProxy.direccion); //calle 123

/*Conceptos Clave
Símbolos (Symbol):

Son valores únicos y se usan para evitar conflictos de nombres de propiedades en objetos. En este caso
 se utilizan para crear una propiedad "privada" (rolesSymbols) que no puede ser accedida de manera convencional.
Proxies en JavaScript:

Un Proxy permite interceptar y personalizar el comportamiento de los objetos. En este ejemplo, 
se usa para controlar qué propiedades pueden ser accedidas dependiendo de las reglas definidas en el handler (trampa get).
Reflect API:

La API Reflect ofrece métodos estáticos que ayudan a interactuar con objetos de manera funcional, 
como Reflect.get para obtener una propiedad de un objeto o Reflect.has para verificar si una propiedad existe.
Conclusión
Este código es un excelente ejemplo de cómo utilizar Proxies para controlar el acceso a propiedades
 sensibles de un objeto en JavaScript. Se utiliza un símbolo para almacenar información de rol de manera privada, y el Proxy define reglas de acceso dependiendo de si el rol del empleado es adecuado o si la propiedad es sensible (como el salario o los datos personales). */
