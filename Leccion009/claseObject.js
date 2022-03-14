// clase object, sobrecarga y poliformismo
//prototype -> nos permite agregar atributos o metodos de manera dinamica

//Object.prototype

//clase padre

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

    get apellido() {
        return this._apellido;
    }

    //como son diferentes metodos no se utilizan comas (,)

    //modificar el valor de nombre
    set nombre(nombre) {
        this._nombre = nombre;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    //dentro de una clase no es necesario especificar la palabra function
    nombreCompleto() {
        return `${this._nombre} ${this._apellido}`;
    }

    //sobre escribiendo el metodo toString()
    toString() {
        return `${this.nombreCompleto()}`
    }

}

//Clase hija metodo extends(para heredar de la clase padre)

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {

        //con super mandamos a llamar al constructor de la clase padre
        super(nombre, apellido);
        //atributo de la clase hija
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        return this._departamento = departamento;
    }

    //sobre_escritura

    nombreCompleto() {
        /* return super.nombreCompleto() + ' ' + this._departamento; */

        return `${super.nombreCompleto()} ${this._departamento}`;
    }
}

// Sintaxis para crear un nuevo objeto (instacia de clase)

let persona1 = new Persona('Lina', 'Guerrero');
console.log(persona1);

//debemos llamar el metodo super para heredar las propiedades del constructor
let empleado1 = new Empleado('Lina', 'Guerrero', 'Front-end Developer');
console.log(empleado1);

//para comprobar que se está heredando los parametros de la clase padre

console.log(empleado1.nombre);
console.log(persona1.toString());

//metodo
console.log(empleado1.nombreCompleto());

//información del objeto (toString())
//Se aplica poliformismo (multiples formas en tiempo de ejecución)
//El metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
console.log(empleado1.toString());