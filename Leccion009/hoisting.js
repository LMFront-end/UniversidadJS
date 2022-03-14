// con las clases no se aplica el hoisting, ya que primero se debe definir la plantilla (clase). En las funciones si se permite hacer hoisting

// Ejemplo

//no podemos crear objetos antes de definir la clase
let persona1 = new Persona('Camila', 'Saenz');

class Persona {
    constructor(nombre, apellido) {

        this.nombre = nombre;
        this.apellido = apellido;
    }
}