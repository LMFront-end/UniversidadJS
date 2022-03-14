//Clase padre

class DispositivoEntrada {
    constructor(tipoEntrada, marca) {

        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    //agregar el metodo set y get para cada atributo

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        return this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        return this._marca = marca;
    }

}

export default DispositivoEntrada;