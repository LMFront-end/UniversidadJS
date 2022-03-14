import Persona from './Persona.js';
//clase hija

class Cliente extends Persona {

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad)
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente() {
        return this._idCliente;
    }

    //método get y set para fechaRegistro
    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro) {
        return this._fechaRegistro = fechaRegistro;
    }

    toString() {
        return `
            ${super.toString()}
            id tipo cliente: ${this._idCliente}
            fecha Registro: 
            ${this._fechaRegistro}
        `
    }
}

export default Cliente;