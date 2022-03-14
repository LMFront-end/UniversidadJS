// clase object, sobrecarga y poliformismo
//prototype -> nos permite agregar atributos o metodos de manera dinamica

//Object.prototype

//clase padre

class Persona {
    // Los constructores tienen la sintaxis de un metodo
    //atributo static de clase
    static contadorPersona = 0;

    constructor(nombre, apellido) {

        this._nombre = nombre;
        this._apellido = apellido;

        this.idPersona = ++Persona.contadorPersona;

    }

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
        return `${this.idPersona} ${this._nombre} ${this._apellido}`;
    }

    //sobre escribiendo el metodo toString()
    //Se aplica poliformismo (multiples formas en tiempo de ejecución)
    //El metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
    toString() {
        return `${this.nombreCompleto()}`
    }

    //metodo static
    static saludar() {
        console.log(`Hola desde el metodo estatic`)
    }

    //A los metodos statics podemos pasarle argumentos como un objeto
    static saludar2(persona) {
        console.log(persona.nombre);
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
console.log(persona1.toString());

let empleado1 = new Empleado('Diana', 'Guerrero', 'profesora');
console.log(empleado1.toString());

let persona2 = new Persona('Mateo', 'Vlad');
console.log(persona2.toString());