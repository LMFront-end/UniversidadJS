//tipos primitivos --> No tienes, atributos o metodos asociados al valor
let x = 10;

function cambiarValor(a) {
    a = 20;
}

//paso por valor
cambiarValor(x); //10
console.log(x);
//alcance de la variable
console.log(a);