console.log('if else');

let a = 10;

// Hay ecepciones como
//undefined, null, una asignación
if (a >= 10) { 

  console.log('A es mayor o gual a 10');

} else {
  console.log('A es menor a 10');
}

// console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay(); //0: Domingo, 1: Lunes, 2: Martes, 3: Miercoles, 4: Jueves .....
console.log({dia});

if ( dia === 0) {
  console.log("Domingo");
} else {
  
  if (dia === 1) {
    console.log('Lunes');
  } else {
    console.log('No es lunes ni domingo');
  }
}

// Else If 
if ( dia === 0) {
  console.log("Domingo")
} else if (dia === 1) {
    console.log('Lunes');

}  else if (dia === 2) {
  console.log('Martes');

} else {
  console.log('No es lunes, Martes ó domingo');
}

let miDia = 3;

const diaLetras = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]; // Forma uno
const diaLetrasObjetos = {
  0: "Domingo", 
  1: "Lunes", 
  2: "Martes", 
  3: "Miercoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sabado"
};

console.log(diaLetrasObjetos[miDia]);

//Tambien se puede hacer que sea funciones 


const diaLetrasObjetosFunciones = {
  0: ()=> "Domingo - 0", 
  1: ()=> "Lunes - 1", 
  2: ()=> "Martes -2", 
  3: ()=> "Miercoles - 3",
  4: ()=> "Jueves - 4",
  5: ()=> "Viernes - 5",
  6: ()=> "Sabado -6 "
};

console.log(diaLetrasObjetosFunciones[miDia]()  );
