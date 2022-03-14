//no se agrega el extends, ya que no hay relacion de herencia, sino relación de agregación.

class Orden {

    static contadorOrdenes = 0;

    //creacion de constante estatica

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {

        this._idOrden = ++Orden.contadorOrdenes;
        //almacenar una referencia a un arreglo vacio.
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }

    get idOrden() {
        this._idOrden
    }

    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {

            this._productos.push(producto);
            //otra sintaxis para agregar productos
            //this._productos[this._contadorProductosAgregados++] = producto;
        } else {
            console.log(`No se pueden agregar más productos`);
        }

    }

    calcularTotal() {
        let totalVenta = 0;

        for (let producto of this._productos) {
            totalVenta += producto.precio;
            //totalVenta = totalVenta + producto.precio

        }

        return totalVenta;
    }

    mostrarOrden() {
        let productosOrden = '';

        for (let producto of this._productos) {
            productosOrden += producto.toString() + ' ';
        }

        console.log(`
            Orden: ${this._idOrden} \n
            Total: $${this.calcularTotal()}\n
            Productos: ${productosOrden}
        `)
    }
}

export default Orden;