//Promesas, await, async, setTimeout

async function funcionConPromesaAwaitTimeout() {
    let miPromesa = new Promise(resolver => {
        console.log('Inicio de la función');
        setTimeout(() => {
            resolver('Promesa con await y timeOut')
        }, 3000);
    });

    console.log(await miPromesa);
    console.log('fin de la función');
}

funcionConPromesaAwaitTimeout();