class Producto {

    static contadorProductos = 0;

    constructor(nombre, precio) {

        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto() {
        return this._idProducto;
    }

    //método get y set para nombre
    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        return this._nombre = nombre;
    }

    //método get y set para precio

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        return this._precio = precio;
    }

    toString() {
        return `
            id producto: ${this._idProducto}
            nombre producto: ${this._nombre}
            precio producto: $${this._precio}
        `
    }
}

export default Producto;