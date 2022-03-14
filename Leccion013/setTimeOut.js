//Llamadas asincronas con uso de la función setTimeOut

function miFuncionCallback() {
    console.log(`Saludo asíncrono despues de 3 segundos`);
}

setTimeout(miFuncionCallback, 3000); //despues de 3 segundos

setTimeout(() => { console.log(`Saludo  asíncrono 2`) }, 4000);

setTimeout(() => console.log(`Saludo asíncrono 2`), 1000);