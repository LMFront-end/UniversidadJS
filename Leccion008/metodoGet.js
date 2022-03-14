let persona = {
    nombre: 'Nicolas',
    apellido: 'Samper',
    edad: 24,
    idioma: 'es',
    get lang() {
        return this.idioma.toUpperCase();
    },

    //set: modificar los valores de los atributos del objeto
    set lang(lang) {
        this.idioma = lang.toUpperCase();
    },
    //metodo get
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    }
}

//Método Get en objetos //obtener
console.log(persona.nombreCompleto);

//Método Set en objetos
console.log(persona.lang);

//cambiar valor con set

persona.lang = 'en';
console.log(persona.lang);