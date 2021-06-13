//Tipos primitivos

//Strings 
let nombre = 'Petter Parker';
console.log(nombre)

nombre = 'Ben Parker' // Comilla simple
console.log(nombre)

nombre = "Tía May" //Comilla doble
nombre = `Tía May` //BackTick

console.log(typeof nombre)

//Boleanos

let esMarvel = true;
console.log(typeof esMarvel)


//Número
edad = 123
console.log(typeof edad)

//Aqui no hay de tipo flotante todo es numero.
edad = 33.00
console.log(typeof edad)

//Camel Case es como se recomienda escribir nombre de variables si dos palabras o más
let superPoderDeSpiderMan

//Snake Case es en vez de usar mayusculas se usa un subguion, pero esto se usa mas en python
let super_poder

let soyNull = null
console.log(typeof soyNull) // el null es considerado un objeto 

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1)

console.log(symbol1 === symbol2)