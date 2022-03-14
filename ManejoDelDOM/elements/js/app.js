//console.log('Hola mundo');

/* getElementById */

//innerHTML --> Leer la información del HTML, tambien se puede modificar
const $title = document.getElementById('title');
console.log(`Valor cabecera: ${$title.innerHTML}`);
$title.innerHTML = 'Hola Mundo!';

const $paragraph = document.getElementById('paragraph-1');
$paragraph.innerHTML = 'Nuevo valor del parrafo';
console.log(`Valor del parrafo: ${$paragraph.innerHTML}`);

/* getElementByTagName*/

/* const $elements = document.getElementsByTagName('p');

console.log(`Numero de parrafos: ${$elements.length}`);

//iterar cada uno de los elementos
for (let i = 0; i < $elements.length; i++) {
    console.log(`${i} - ${$elements[i].innerHTML}`);
} */

/* getElementsByClassName */

/* const $elements = document.getElementsByClassName('blue');

console.log(`Numero de elementos: ${$elements.length}`); */

//iterar cada uno de los elementos
/* for (let i = 0; i < $elements.length; i++) {
    console.log(`${i} - ${$elements[i].innerHTML}`);
} */

/* for (let element of $elements) {
    console.log(`${element.innerHTML}`);
} */

/* querySelector and querySelectorAll */

/* const $elements = document.querySelectorAll('p.blue');

console.log(`Numero de elementos: ${$elements.length}`);

for (let element of $elements) {
    console.log(`${element.innerHTML}`);
} */