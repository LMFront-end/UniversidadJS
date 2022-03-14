let persona1 = {
    nombre: 'Mateo',
    apellido: 'Vlad',
    nombreCompleto: function(titulo, tel) {
        return `${this.nombre} ${this.apellido} con el titulo de ${titulo}, contacto ${tel}`
    }
}

let persona2 = {
    nombre: 'Nicolas',
    apellido: 'Niño',
}

//Uso de apply -> permite llmar un metodo en un objeto que no tiene definido cierto metodo

console.log(persona1.nombreCompleto('programador', 12345678));

let arreglo = ['ingeniero', 123654987];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));