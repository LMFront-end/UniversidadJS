// la clase seria la plantilla para la creación de objetos

//La clase persona es el elemento padre
class Persona {
    //atributo estatico

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {

        //get --> leer
        //set --> cambiar

        //propiedades de instancia

        // Para el metodo get las propiedades no se pueden llamar igual, por lo que se acostumbra a usar un _ antes del nombre de la propiedad.
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    //método get id persona
    get idPersona() {
        return this._idPersona;
    }

    //método get y set para nombre
    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        return this._nombre = nombre;
    }

    //método get y set para apellido

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        return this._apellido = apellido;
    }

    //método get y set para edad

    get edad() {
        return this._edad;
    }

    set edad(edad) {
        return this.edad = edad;
    }

    //método toString

    toString() {
        return `
                id: ${this._idPersona} 
                nombre: ${this._nombre} ${this._apellido} 
                edad: ${this._edad}`;
    }
}

export default Persona;