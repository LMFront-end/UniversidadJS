let numero = 13;

let numeroTexto = 'Valor desconocido';


switch (numero) {
    case 1:
        numeroTexto = 'Número uno';
        break;

    case 2:
        numeroTexto = 'Número dos';
        break;

    case 3:
        numeroTexto = 'Número tres';
        break;

    case 4:
        numeroTexto = 'Número cuatro';
        break;

    default:
        numeroTexto = 'Caso no encontrado';
        break; //opcional
}

console.log(numeroTexto);