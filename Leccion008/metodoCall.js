let persona1 = {
    nombre: 'Mateo',
    apellido: 'Vlad',
    nombreCompleto: function(titulo, tel) {
        //el titulo y el tel no llevan this, ya que son parametos propios de la función

        return `${this.nombre} ${this.apellido} con el titulo de ${titulo}, contacto ${tel}`;
    }
}

let persona2 = {
    nombre: 'Nicolas',
    apellido: 'Niño',
}

/*Uso de Call para usar el metodo 
persona1.nombreCompleto con los datos de persona2
*/

console.log(persona1.nombreCompleto('Programador', 3174586952));

console.log(persona1.nombreCompleto.call(persona2, 'ingeniero de sistemas', 3215624859));