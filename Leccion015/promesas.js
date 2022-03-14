let miPromesa = new Promise((resolve, reject) => {
    let expresion = true;

    if (expresion) {
        resolve(`Resolvío correcto`);
    } else {
        reject(`Se produjo un error`);
    }
});

//then
/* miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);
 */
//catch

/* miPromesa
    .then(valor => console.log(valor))
    .catch(error => console.log(error)); */

let promesa = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Inicio promesa');

        resolve('Saludos con promesa y timeOut');

        console.log('Fin promesa');
    }, 3000);
});

promesa.then(valor => console.log(valor));