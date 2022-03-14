function miFuncion(a, b) {
    //arguments.length solo se ejecuta dentro de la función, no funciona por fuera de la funcion
    console.log(arguments.length)
    return a + b;
}

//llamado a la función
let respuesta = miFuncion(2, 3);
console.log(respuesta);

//funcion expresada
const restar = function(a, b) { return a + b };

//funciones flecha
const suma = (a, b) => a + b;
const res = suma(1, 2);
console.log(res);

//funciones self-invoking

(function() {
    console.log('Ejecutando la función')
})(); //no se puede reutilizar

//Ejercicio

let resultado = sumarTodo(5, 4, 13, 10, 9);
console.log(resultado);

function sumarTodo() {
    let suma = 0;

    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i]; //suma = suma + arguments[i]
    }

    return suma;
}