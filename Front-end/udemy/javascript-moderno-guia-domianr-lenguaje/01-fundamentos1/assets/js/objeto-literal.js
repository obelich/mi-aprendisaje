console.log('Objeto Literal')

let personaje = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.70
  },

  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880, 90265',
    ubicacion: 'Malibu, California'

  },
  'ultima-pelicula': 'Infinity War'
  
}

console.log(personaje)
console.log('Nombre ', personaje.nombre) //Forma de llamar una propiedad del objeto
console.log('Nombre ', personaje['nombre']) //Otra forma de llamar una propiedad de un objeto
console.log('Edad ', personaje.edad)

console.log('Coors ', personaje.coords)
console.log('Coors Lat ', personaje.coords.lat)
console.log('Trajes', personaje.trajes.length)
console.log('ultimo traje ', personaje.trajes[personaje.trajes.length -1])

const x = 'vivo'
console.log('Vivo', personaje[x])

console.log('Ultima Pelicula', personaje["ultima-pelicula"]  )


//Eliminar una propiedad de un objeto literal

console.log('----------------')
delete personaje.edad

console.log(personaje)


//Agregar una propiedad aun objeto literal
personaje.casado = true


//Hacer que un objeto se convierta en pares de valores
const entriesPares = Object.entries(personaje)
console.log(entriesPares)

//Para que un objeto sea inmutable se utiliza
Object.freeze(personaje)
//Esto cambia sus propiedades iniciales pero las sub propiedades si pueden ser modificadas 

personaje.casado = false //Este cambio no afectaria 
personaje.direccion.ubicacion = 'Costa Rica'

personaje.dinero = 10000000000
console.log(personaje)

console.log(personaje.direccion.ubicacion)

//Ver los nombres de las propiedades de un objeto literal
const propiedades = Object.getOwnPropertyNames(personaje)
console.log({propiedades})

//ver los valores de un objeto literal
const valores = Object.values(personaje)
console.log({propiedades, valores})