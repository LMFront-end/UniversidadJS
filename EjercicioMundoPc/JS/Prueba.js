import DispositivoEntrada from "./DispositivoEntrada.js";
import Raton from './Raton.js';
import Teclado from './Teclado.js';
import Monitor from './Monitor.js';
import Computadora from './Computadora.js';
import Orden from './Orden.js';


//Prueba Ratón
let raton1 = new Raton('USB', 'HP');
console.log(raton1.toString());

let raton2 = new Raton('Bluetooh', 'Dell');

//para modificar la marca (Set)
raton2.marca = 'HP'
console.log(raton2.toString());

//Prueba Teclado

let teclado1 = new Teclado('USB', 'Logitech');
console.log(teclado1.toString());

let teclado2 = new Teclado('Bluetooh', 'ASUS');
teclado2.tipoEntrada = 'USB';
console.log(teclado2.toString());

//Prueba monitor

let monitor1 = new Monitor('HP', 14);
console.log(monitor1.toString());
let monitor2 = new Monitor('Dell', 27);
monitor2.marca = 'ReDragon';
console.log(monitor2.toString());

//Prueba computadora

//reutilizando objetos
let computadora1 = new Computadora('HP', monitor1, raton1, teclado2);
//console.log(computadora1.toString());

//Otro metodo mas corto (llamando el metodo toString)
console.log(`${computadora1}`);

let computadora2 = new Computadora('Armada', monitor2, teclado2, raton2);
console.log(`${computadora2}`);

//Prueba orden

//el constructor de esta clase no recibe ningun argumento
let orden1 = new Orden();
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();