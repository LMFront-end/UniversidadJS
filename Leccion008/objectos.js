let persona = {
    nombre: 'Felipe',
    apellido: 'Pastrana',
    edad: 20,
    email: 'pipe14@gmail.com',
    nombreCompleto: function() {
        return `${this.nombre} ${this.apellido} `
            //return this.nombre + ' ' + this.apellido;
    }
}

//Para acceder a las propiedades de un objeto
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);


//Para imprimir todo el objeto
console.log(persona);

//Agregar metodos a Objetos
console.log(persona.nombreCompleto());