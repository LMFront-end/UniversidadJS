/* function miFuncion() {
    console.log(`Saludos desde mi función`);
} */

/* let miFuncion = function() {

} */

//con las fuciones flechas no aplica el concepto de hoisting

/* let miFuncionFlecha = () => {
    console.log(`Saludos desde mi función flecha`);
} */

const miFuncionFlecha = () => console.log(`Saludos desde mi función flecha`);
miFuncionFlecha();


const saludar = () => {
    return 'saludos desde funcion flecha';
}

console.log(saludar());

//Para regresar un objeto
const regresarObjetos = () => ({
    nombre: 'Lina',
    apellido: 'Guerrero',
    edad: 22
});

console.log(regresarObjetos());

//Funcion con parámetros
let suma = (x, y) => x + y;

console.log(suma(9, 1));

const funcionConParametros = (mensaje) => console.log(mensaje);

funcionConParametros(`Hola Mundo`);