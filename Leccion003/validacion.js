let miNumero = "18x";

let edad = Number(miNumero);
console.log(edad);

if (isNaN(edad)) {
    console.log("No es un numero");
} else {
    if (edad >= 18) {
        console.log("Puede votar");
    } else {
        console.log("muy joven para votar");
    }
}