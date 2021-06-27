console.log('logica booleana');

const regresaTrue = () => {
  console.log('Regresa true');
  return true;
}

const regresaFalse = () => {
  console.log('Regresa false');
  return false;
}

console.warn('Not o la negación');
console.log(true);   //true
console.log(!true);  // false
console.log(!false); //true


console.warn('And'); // Solo regresara true si todos los valores son verdaderos
console.log(true && true); // Aqui la salida seria true
console.log(true && false); // Aqui la salida seria false

console.log('==================');
console.log(regresaFalse() && regresaTrue()); //En este caso sera false pero solo se ejecutara la primera funciono y no la segunda 
//Por que al encontrar un  falso ya no sigue evaluando el resto 

console.log(regresaTrue() && regresaFalse() ); //En este caso si ejecutaria las dos por que la primera es true 

console.log('======== && ========');
regresaFalse() && regresaTrue(); //Tambien es comun ver cosas como esta de este modo solo se ejecuta una funcion la que regreso true

console.warn('OR'); //Esto lo que hace es evaluar si alguna de las opciones es true y con eso regresaria true
console.log(true || false); //Esto regresaria true
console.log(false || false); //Esto si regresaria falso
console.log(regresaTrue() || regresaFalse());

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola Mundo' && 150; //Esto asignaria el ultimo valor
const a2 = 'Hola' && 'Mundo' && soyFalse && true;
const a3 = soyFalse || 'Ya no soy falso'
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso de nuevo'
console.log({a1, a2, a3, a4});
