import Persona from './Persona.js';
import Empleado from './Empleado.js';
import Cliente from './Cliente.js';


//Prueba Clase Persona (clase padre)

let persona1 = new Persona('Lina', 'Guerrero', 22);
console.log(persona1.toString());

let persona2 = new Persona('Mateo', 'Giraldo', 25);
console.log(persona2.toString());

//Prueba clase Empleado (clase hija)

let empleado1 = new Empleado('Santiago', 'Garcia', 30, 5000);
console.log(empleado1.toString());

let empleado2 = new Empleado('Camila', 'Quintero', 28, 5000);
console.log(empleado2.toString());

//prueba clase Cliente

let cliente1 = new Cliente('Paola', 'Rojas', 26, new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente('Pablo', 'Saenz', 30, new Date());
console.log(cliente2.toString());