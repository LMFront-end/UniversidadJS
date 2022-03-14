"use strict"
let resultado = 5;

try {

    if (isNaN(resultado)) {
        throw `No es un número`;
    } else if (resultado === ' ') {
        throw `Es una cadena vacía`;
    } else if (resultado >= 0) {
        throw 'Valor positivo';
    } else if (resultado < 0) {
        throw 'Valor negativo';
    }

} catch (error) {
    console.error(error);
    console.error(error.name);
    console.error(error.message);
} finally {
    console.info(`Termina la revisión de errores`);
}