import DispositivoEntrada from "./DispositivoEntrada.js";

//clase hija

class Teclado extends DispositivoEntrada {

    static ContadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.ContadorTeclados;
    }

    get idRaron() {
        return this._idTeclado;
    }

    toString() {
        return `
            Teclado: \n 
            id-Teclado: ${this._idTeclado} 
            tipo Entrada: ${this._tipoEntrada}
            Marca: ${this._marca}
            `
    }
}

export default Teclado;