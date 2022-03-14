//async indica que una fnción regresa una promesa



async function miFuncionConPromesa() {
    return 'saludos con promesa y async';
}

miFuncionConPromesa().then(valor => console.log(valor));