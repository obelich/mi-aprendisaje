console.log('Funciones')

function saludar() { // Funcion sin argumentos
  console.log('Hola Mundo')
}

const saludar2 = function() { //Funcion Anonima
  console.log('Hola Mundo')
}

function saludarArgumentos(nombre) { 
  console.log(arguments) //Esto solo funciona en funciones clasicas no funciona en funciones de flecha
  console.log('Hola ' + nombre)
}

const saludarFlecha = () => {
  console.log('Hola Flecha')
}

const saludarFlechaArgumentos = (nombre) => {
  console.log('Hola ' + nombre + ' Flecha' )
}

const funcionConRetorno = function() {
  console.log('Saludo')
  return 1; //Cuando no hay un return una funcion siempre regresara undefined

  //Nada se ejecutara despues del return
  console.log('Esto nunca se ejecuta')
}




saludar()
saludarArgumentos("Obelich", 24, false, "Costa Rica")
saludarFlecha()
saludarFlechaArgumentos('Obelich')

const llamoFuncionConSaludar = funcionConRetorno()
console.log({llamoFuncionConSaludar})


function sumar(a, b) {
  return a + b;
} 

const sumar2 = (a,b) => {
  return a + b
}

//Si solo es de una sola linea se puede usar la funcion de flecha 
const sumarFuncionFlechaCorta = (a,b) => a + b

console.log( sumar(1,2) )
console.log( sumar2(1,2) )

console.log( sumarFuncionFlechaCorta(1,2) )


function getAleatorio() {
  return Math.random();
}

const getAleatorioFlecha = () => Math.random()

console.log(getAleatorio())
console.log(getAleatorioFlecha())