//manda a llamar a la funcion de tipo callback varias veces despues e cierto tiempo

let reloj = () => {
    let fecha = new Date();

    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds()}`);
}

//setInterval(reloj, 1000); //cada segundo