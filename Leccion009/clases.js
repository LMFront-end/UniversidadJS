// El nombre de las clases se inicializan en mayusculas

// la clase seria la plantilla para la creación de objetos
class Persona {
    // Los constructores tienen la sintaxis de un metodo
    constructor(nombre, apellido) {

        //para inicializar los parametos del constructor
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// Sintaxis para crear un nuevo objeto (instacia de clase)

let persona1 = new Persona('Lina', 'Guerrero');
console.log(persona1);

let persona2 = new Persona('Mateo', 'Vlad');
console.log(persona2);