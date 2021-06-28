console.log('Operador ternario');

const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje; //Esta abierto, Esta cerrado, hoy abrimos a las xx

if (dia === 0 || dia === 6) { //([0,6].includes(dia)   )  Otra forma de hacer el if
  console.log('Fin de semana');
  horaApertura = 9;

} else {
  console.log('Dia de semana');
  horaApertura = 11;
}

if (horaActual >= horaApertura) {
  mensaje = 'Está abierto';
} else {
  mensaje = `Esta cerrado, hoy abrimos a las  ${horaApertura}`;
}

console.log({horaApertura, mensaje})


//Refactorizado con operador ternario
horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;
mensaje = (horaActual >= horaApertura ) ? 'Está abierto' : `Esta cerrado, hoy abrimos a las  ${horaApertura}`;

console.log({horaApertura, mensaje})