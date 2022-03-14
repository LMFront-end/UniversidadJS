//Clase independiente

class Monitor {

    static contadorMonitor = 0;
    constructor(marca, tamanio) {

        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamanio = tamanio;
    }

    //metodo get para id monitor (stributo de solo lectura)

    get idMonitor() {
        return this._idMonitor;
    }

    //metodos set y get para los atributos

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        return this._marca = marca;
    }

    get tamanio() {
        return this._tamanio;
    }

    set tamanio(tamanio) {
        return this._tamanio = tamanio;
    }

    toString() {

        return `
            Monitor:  \n
            id-Monitor: ${this._idMonitor}
            Marca : ${this._marca}
            Tamaño : ${this._tamanio}in
        `
    }
}

export default Monitor;