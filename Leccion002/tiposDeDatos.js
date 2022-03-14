//Tipos de datos

//String
let nombre = "Lina";
console.log(nombre);
//tipo de dato
console.log(typeof nombre);

//number
let numero = 10;
console.log(numero);
console.log(typeof numero);

//Object

let persona = {
    nombre: "Nicolas",
    apellido: "Rojas",
    edad: 25,
    instagram: "nicolasimagine"
}
console.log(persona);
console.log(persona.nombre);
console.log(typeof persona);

//boolean (true and false)

let verdadero = true;
let falso = false;

console.log(typeof verdadero);

//funcion 

function miFuncion() {
    console.log(typeof miFuncion);
}

miFuncion();

//Symbol

let simbolo = Symbol(`Mi simbolo`);
console.log(typeof simbolo);

//Clase

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

console.log(Persona);
console.log(typeof Persona);

//Undefinded

let x;
console.log(x);
console.log(typeof x);

//podemos utilizar el dato undefined como dato

let estado = undefined;
console.log(estado);

//null --> ausencia de valor

let barrio = null;
console.log(barrio);
console.log(typeof barrio);

//Array

let autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

//empty string

let z = '';
console.log(z);
console.log(typeof z);