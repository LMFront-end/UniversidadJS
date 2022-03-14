//Paso por referencia

const persona = {
    nombre: 'Lina',
    apellido: 'Guerrero',
    edad: 22,
    email: 'linamgl@gmail.com',
    telefono: 3182991851,
}
console.log(persona);

function cambiarValorObjeto(p1) {
    p1.nombre = 'Santiago';
    p1.apellido = 'Vlad';
}

//Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);