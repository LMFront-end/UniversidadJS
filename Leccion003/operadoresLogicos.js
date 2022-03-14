//operador AND - && (Regresa true si ambas condiciones son true)

let a = 5;
let valorMin = 0,
    valorMax = 10;

if (a >= valorMin && a <= valorMax) {
    console.log(`el valor ${a} se encuentra dentro del rango `);
} else {
    console.log(`el valor ${a} no se encuentra dentro del rango `);
}

//operador logico OR - || (uno de los dos operandos debe ser true)

//Ejemplo de OR
let vacaciones = false,
    diaDescanso = false;

if (vacaciones || diaDescanso) {
    console.log(`El padre puede asistir al juego de su hijo`);
} else {
    console.log(`El padre está ocupado`);
}

//Operador ternario

let resultado = (3 > 2) ? `Verdadero` : `falso`;
console.log(resultado);

//ejercicio

let numero = 9;

resultado = (numero % 2 === 0) ? `Es par` : `Es impar`;

console.log(resultado);