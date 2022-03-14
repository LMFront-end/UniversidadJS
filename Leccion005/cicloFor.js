/* for (let contador = 0; contador < 3; contador++) {
    console.log(contador);
}
console.log(`Fin del ciclo for`); */

//Uso de break en los ciclos de JS

/* for (let contador = 0; contador < 10; contador++) {
    if (contador % 2 === 0) {
        console.log(contador);
        break; //para imprimir la primera coincidencia
    }
}

console.log('Fin del ciclo for'); */

//uso de continue en los ciclos de JS

for (let contador = 0; contador < 10; contador++) {
    if (contador % 2 !== 0) {
        continue; //ir a la siguiente iteración.
    } else {
        console.log(contador);
    }

}