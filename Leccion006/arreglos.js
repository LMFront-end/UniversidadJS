//forma clásica
/* let autos =  new Array('BMW', 'Mercedes Benz', 'Volvo'); */

const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);

//para acceder a los elementos de un arreglo

console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

//recorriendo el arreglo con un for
for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}

//modificar un valor de un arreglo

autos[1] = 'MercedesBenz';
console.log(autos[1]);

//agregar valores a un arreglo

autos.push('Toyota');
console.log(autos);

//cantidad de elementos de un arreglo
console.log(autos.length);

//agregar un elementos en un indice
autos[autos.length] = 'Cadillac';

console.log(autos);

//is Array

console.log(Array.isArray(autos));

console.log(autos instanceof Array);