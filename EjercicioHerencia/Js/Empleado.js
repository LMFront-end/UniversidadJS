import Persona from './Persona.js';
//clase hija

class Empleado extends Persona {

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad)
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    //método get para idEmpleado
    get idEmpleado() {
        return this._idEmpleado;
    }

    //método get y set para sueldo
    get sueldo() {
        return this._sueldo;
    }

    set sueldo(sueldo) {
        return this._sueldo = sueldo;
    }

    toString() {
        //método super para heredar el método toString de la clase padre
        return `
            ${super.toString()} 
            id tipo empleado: ${this._idEmpleado} 
            sueldo: ${this._sueldo}`;
    }
}

export default Empleado;