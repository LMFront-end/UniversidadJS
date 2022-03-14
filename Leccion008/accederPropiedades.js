let persona = {
    nombre: 'Nicolas',
    apellido: 'Samper',
    edad: 24,
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona['apellido']);

//for in

for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad])
}

//Agregar y eliminar propiedades de un objeto

persona.tel = '3178907890';
console.log(persona);

//imprimir un objeto

for (propiedad in persona) {
    console.log(persona[propiedad]);
}

//de object a Array

let personaArray = Object.values(persona);
console.log(personaArray);

//metodo JSONstringify

let personaString = JSON.stringify(persona);
console.log(personaString);