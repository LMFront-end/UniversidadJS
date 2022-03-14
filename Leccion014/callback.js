/* function miFuncion1() {
    console.log('Mi función 1');
}

function miFuncion2() {
    console.log('funcion 2');
} */

//Se ejecutan de manera secuencial
//podemos hacer hoisting ya que estamos trabajando con funciones normales
//miFuncion1();
//miFuncion2();

//funcion de tipo callback

function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback) {
    let res = op1 + op2

    funcionCallback(`Resultado: ${res}`);
}

sumar(5, 3, imprimir);