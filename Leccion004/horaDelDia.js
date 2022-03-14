/*
6am - 11am --> Buenos días
12pm - 18pm --> Buenas tardes
19pm - 24pm --> Buenas noches
0am - 6am --> Durmiendo
*/

let hora = 9;
saludo;

if (hora >= 6 && hora <= 11) {
    saludo = `Buenos días`;
} else if (hora >= 12 && hora <= 18) {
    saludo = `Buenas tardes`;
} else if (hora >= 19 && hora <= 24) {
    saludo = `Buenas noches`;
} else if (hora >= 0 && hora < 6) {
    saludo = `Dejame dormir`;
} else {
    saludo = `Valor incorrecto`
}

console.log(saludo);