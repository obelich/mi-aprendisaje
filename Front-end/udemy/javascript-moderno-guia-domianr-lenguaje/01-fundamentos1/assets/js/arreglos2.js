console.log('Arreglos 2')

let  juegos = ['Zelda', 'Mario', 'Metroid', 'Pokemon']
console.log('Largo: ', juegos.length  )

let primero = juegos[2-2];
let ultimo = juegos[juegos.length -1]

console.log({primero, ultimo})

juegos.forEach( (elemento, indice, arr) => {
  console.log({elemento, indice, arr})
});

//Añadir un elemento a un arreglo, esto lo agrega al final
let nuevaLongitud = juegos.push('F-Zero')
console.log({nuevaLongitud, juegos})

//Añadir un elemento al principio del arreglo
nuevaLongitud = juegos.unshift('No Man Sky')
console.log({nuevaLongitud, juegos})

//Eliminar el ultimo elemento de un array
let juegoBorrado =juegos.pop()
console.log({juegoBorrado, juegos})

//Eliminar un elemento dandole la posición del arreglo
//Esta funciono recibe dos variables, uno es la posicion y el otro es la cantidad de elementos a borrar
let pos = 1
let juegosBorrados = juegos.splice(pos, 2)
console.log({juegosBorrados, juegos})

//Encontrar un objeto en un arreglo
let MetroidIndex = juegos.indexOf('Metroid') //Es case Sensitive
console.log({MetroidIndex}) // El resultado seria 1
//Cuando no encuentrala posición regresa un -1