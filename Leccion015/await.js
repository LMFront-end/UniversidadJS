//async / await

async function funcionConPromesaYAwait() {

    //await solo se puede usar dentro de una función declarada con async

    let miPromesa = new Promise(resolver => {
        resolver(`Promesa con await`)
    });

    console.log(await miPromesa);
}

funcionConPromesaYAwait();