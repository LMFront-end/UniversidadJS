// El nombre de las clases se inicializan en mayusculas

// la clase seria la plantilla para la creación de objetos
class Persona {
    // Los constructores tienen la sintaxis de un metodo
    constructor(nombre, apellido) {

        //get --> leer
        //set --> cambiar

        // Para el metodo get las propiedades no se pueden llamar igual, por lo que se acostumbra a usar un _ antes del nombre de la propiedad.
        this._nombre = nombre;
        this._apellido = apellido;
    }

    // Con el metodo get, no tenemos que utilizar parentesis
    get nombre() {
        return this._nombre;
    }

    //como son diferentes metodos no se utilizan comas (,)

    //modificar el valor de nombre
    set nombre(nombre) {
        this._nombre = nombre;
    }
}

// Sintaxis para crear un nuevo objeto (instacia de clase)

let persona1 = new Persona('Lina', 'Guerrero');
//versión simplificada para cambiar el valor
persona1.nombre = 'María'; //set nombre ('María')
console.log(persona1.nombre);