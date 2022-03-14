import DispositivoEntrada from "./DispositivoEntrada.js";

//clase hija

class Raton extends DispositivoEntrada {

    static ContadorRatones = 0;

    constructor(tipoEntrada, marca) {
        //llamada a clase padre (herencia)
        super(tipoEntrada, marca)
        this._idRaton = ++Raton.ContadorRatones;
    }

    //metodo de solo lectura
    get idRaron() {
        return this._idRaton;
    }

    toString() {
        return `
            Ratón: \n 
            id-Raton: ${this._idRaton} 
            tipo Entrada: ${this._tipoEntrada}
            Marca: ${this._marca}
        `
    }
}


export default Raton;