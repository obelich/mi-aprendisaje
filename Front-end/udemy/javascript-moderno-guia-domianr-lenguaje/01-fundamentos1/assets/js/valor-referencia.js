console.log('Valor Referencia')

let a = 10; //Todos los primitivos se pasan por valor
let b = a;
a = 30;

console.log({a,b})

//y todos los objetos como referencia
let juan = {nombre: 'Juan'};// En javascript todos los objetos son pasados como referencia
let ana = juan;
//ana.nombre = "Ana" //por eso al yo modificar ana tambien modifico a juan

console.log({juan,ana})

const  cambiaNombre = (persona ) => { //cuando se pone como argumento de una funcion los ... se llama rest
  persona.nombre = 'Tony'
  return persona
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);
console.log({peter, tony})

//si quisieramos crear una copia de un objeto en las variables se usa un spret 
//Por  ejemplo 
let ana2 = {...juan} // cuando se usa en otra parte como en una variable se llama spret
ana2.nombre = "Ana"
console.log({juan,ana2})

const  cambiaNombreRefactor = ({...persona} ) => { //Ahora estando dentro del argumento se rompe la relacion
  persona.nombre = 'Tony'
  return persona
}

//Arreglos
const frutas = ['Manzana', 'Mandarina', 'Granada']
const otrasFrutas = [...frutas] //Como en este caso es un arreglo se cierra entre llaves cuadradas y se agrega el spret
// const otrasFrutas = frutas.slice(); //Esta es otra forma de que se genere un nuevo arreglo


otrasFrutas.push('Mandarina')
console.table({frutas, otrasFrutas})


//beachmark en Javascript
console.time('bandera Spret')
const otrasFrutasConSpret = [...frutas]
console.timeEnd('bandera Spret')

console.time('bandera Slice')
const otrasFrutasConSlice = frutas.slice()
console.timeEnd('bandera Slice')