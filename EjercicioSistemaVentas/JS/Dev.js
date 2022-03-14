import Producto from "./Producto.js";
import Orden from './Orden.js'


//Prueba producto
let producto1 = new Producto('Jabón', 3000);
console.log(producto1.toString());
let producto2 = new Producto('Panela', 2000);
console.log(producto2.toString());

//prueba Orden

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();