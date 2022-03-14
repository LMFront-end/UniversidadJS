//funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, email) {
    //se hace referencia a la propiedad
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function() {
        return `${this.nombre} ${this.apellido}`;
    }
}

//para agregar una nueva propiedad a todos los objetos de tipo Persona (prototype)
Persona.prototype.tel = '3152665895';

let padre = new Persona('Jose', 'Guerrero', 'joseGuerrero@gmail.com');
console.log(padre);
console.log(padre.nombre);
//acceder a un funcion
console.log(padre.nombreCompleto());
console.log(padre.tel);

let hijo = new Persona('Lina', 'Guerrero', 'linita@gmail.com');
console.log(hijo);
console.log(hijo.tel);
hijo.tel = 3214568975;
//Modificar el valor
console.log(hijo.tel);