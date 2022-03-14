let miNumero = "10";

//console.log(typeof miNumero );

let edad = Number(miNumero);
console.log(edad);

/* if(edad >= 18){
    console.log(`tu edad es ${edad}, puedes votar  `)
}else {
    console.log(`tu edad es ${edad}, no puedes votar`);
} */

//ejercicio con el operador ternario

let respuesta = (edad >= 18) ? `tu edad es ${edad}, puedes votar` : `tu edad es ${edad}, no puedes votar`;

console.log(respuesta);