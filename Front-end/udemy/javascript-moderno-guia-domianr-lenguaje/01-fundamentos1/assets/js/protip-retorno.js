console.log('Protip 1 - Retorno')

function crearPersona(nombre, apellido) {
  //Forma basica de pasar el argumento 
  return {
    nombre: nombre,
    apellido: apellido
  }

}

function crearPersonaRefactorizado(nombre, apellido) {
  //Forma basica de pasar el argumento 
  return {
    nombre,
    apellido
  }

}

//ahora en funcion de flecha
const CrearPersonaFlecha = (nombre, apellido) => ({nombre, apellido}) 
//Si lo que vamos a regresar es un objeto hay que agregar ()

const persona = crearPersona("Miguel", "Amezcua")
console.log(persona)

const personaRefactor = crearPersonaRefactorizado("Miguel", "Amezcua")
console.log(personaRefactor)

const personaFlecha = CrearPersonaFlecha("Miguel", "Amezcua")
console.log(personaFlecha)



function imprimeArgumentos() {
  console.log(arguments)
}
const imprimeArgumentosFlecha = (edad,  ...args ) => { //Argumento res ...
  console.log({edad, args})
}

imprimeArgumentos(10, true, false, 'Obelich', 'Hola')
imprimeArgumentosFlecha(10, true, false, 'Obelich', 'Hola')

//Si lo que regresa una funcion es un arreglo se pueden generar las variables de la siguiente manera

const imprimeArgumentosFlechaRegresaArreglo = (edad, ...args ) => { //Argumento res ...
  return args
}

const [casado, vivo, nombre, saludo] = imprimeArgumentosFlechaRegresaArreglo(10, true, false, 'Obelich', 'Hola')
console.log({casado, vivo, nombre, saludo})

const {apellido: NuevoApellido} = crearPersonaRefactorizado("Miguel", "Amezcua") //Como esta regresando un arreglo le asignamos un nombre nombre a la variable
console.log(NuevoApellido)


const tony = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  'ultima-pelicula': 'Infinity War'
  
}

const imprimePropiedades = (personaje) => {
  console.log('nombre: ' + personaje.nombre)
  console.log('codeName: ' + personaje.codeName)
  console.log('vivo: ' + personaje.vivo)
  console.log('edad: ' + personaje.edad)
  console.log('trajes: ' + personaje.trajes)

}

const imprimePropiedadesRefactor = ({nombre, codeName,vivo, edad = 15, trajes }) => { //Si no viene por ejemplo edad se le puede asignar un valor por defecto
  //Desestructuración de argumentos
  console.log({nombre})
  console.log({codeName})
  console.log({vivo})
  console.log({edad})
  console.log({trajes})

}

imprimePropiedades(tony)

console.log(imprimePropiedadesRefactor(tony))