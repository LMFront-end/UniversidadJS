//document.write('Saludos desde Javascript');

/* function show() {
    //sobreescribe todo el contenido
    document.write('Bye!');
} */

const show = () => {

    //para concatenar un nuevo titulo +=
    let $titles = document.getElementById('title').innerHTML += '<br/> new title';

    document.getElementById('img').src = 'http://globalmentoring.com.mx/imagenes/html5.png'
}