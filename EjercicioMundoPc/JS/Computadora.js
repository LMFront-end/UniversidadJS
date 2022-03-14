class Computadora {

    static contadorComputadora = 0;

    constructor(nombre, monitor, raton, teclado) {

        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }

    get idComputadora() {
        return this._idComputadora;
    }

    toString() {
        return `
            Computadora: \n
            id-Computadora ${this._idComputadora}: ${this._nombre}  
            ${this._monitor}
            ${this._raton}
            ${this._teclado}
        `
    }
}

export default Computadora;