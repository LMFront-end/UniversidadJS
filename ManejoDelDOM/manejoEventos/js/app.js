/* const changeText = (title) => {

    console.log(title);
    console.log(title.innerHTML);
    title.innerHTML = 'Hi guys 👩🏽‍🦱';
    console.log(title.innerHTML);
} */

/* document.getElementById('title').onclick = changeText;

function changeText() {
    document.getElementById('showMe').innerHTML = 'Welcome Lorem ipsum 👱🏽‍♀️';
}


const show = () => {

    document.getElementById('paragraph').style.textAlign = 'center';
} */

//Handle onload
/* function enter() {
    alert(`Welcome to web page`);
    //revisar si están habiliadas las cookies
    let $text = '';

    if (navigator.cookieEnabled) {
        $text = `cookies are enabled`;
    } else {
        $text = `cookies are disabled`
    }

    document.getElementById('showMe').innerHTML = $text;
} */

//onchange event
/* function convert(nameInput) {

    nameInput.value = nameInput.value.toUpperCase();
} */

//onmouseover

/*
onmouseover="red(this)" onmouseout="black(this)"
*/
/* function red(title) {

    title.style.color = '#ff0000';
}

//onmouseoverout
function black(title) {
    title.style.color = '#ff0';
} */

//onmousedown
/* function pink(title) {
    console.log(`Este es el evento onmousedown, cambio a rosa`);
    title.style.color = 'pink';
}

//onmouseup
function purple(title) {
    console.log(`Este es el evento onmouseup, cambio a morado`);

    title.style.color = 'purple';
}

function green() {
    console.log(`Este es el evento onclick, cambio a verde`);

    title.style.color = 'green';
} */

//onfocus

/* function convert(elementoInput) {

    elementoInput.style.backgroundColor = 'lightpink';
}

function backTo(elementoInput) {

    elementoInput.style.backgroundColor = 'lightgrey';
} */

//addEventListener
//con addEventListener para llamar a los eventos no se utiliza en el on.

const $form = document.getElementById('form');

//funcion flecha (anonima no reutilizable)
$form.addEventListener('focus', (evento) => {
    evento.target.style.backgroundColor = 'yellowgreen';
}, true);
$form.addEventListener('blur', (evento) => {
    evento.target.style.backgroundColor = 'lightblue';
}, true);



/* document.getElementById('lastname').addEventListener('focus', cambiar);
document.getElementById('lastname').addEventListener('blur', regresar); */

function cambiar(evento) {

    let componente = evento.target;

    componente.style.backgroundColor = 'lightpink';
}

function regresar(evento) {
    evento.target.style.backgroundColor = 'lightgrey';
}