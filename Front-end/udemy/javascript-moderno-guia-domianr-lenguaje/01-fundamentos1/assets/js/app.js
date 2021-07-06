alert("hola desde app.js")

// console.log('hola mundo');

//let a = 10; //Forma actual de inicializar variables
// var b = 10; //Forma antigua de inicializar variables
// const c = 10; //Esta variable nunca puede cambiar

// c = 20  //Esto no se puede hacer con una constante



// let a = 10;
// let b = 10;
// let c = 10;
// let d = 10;
// let x = a * b;
//Forma larga de declarar multiples variables


//forma corta para declarar multiples variables en un solo let
let a = 10, 
    b = 20, 
    c = 30, 
    d = 40,  
    x = a * b;

//Formas de mostrar un console
// console.log(x);
// console.warn(x + ' Usando warn');
// console.error(x + ' Usando error');
// console.info(x + ' Usando info');


//Otra forma de hacer un console log y que te mande el nombre de la variable usar
console.log( { a } )
console.log( { b } )
console.log( { c } )


//Para darle estilos al console se hace de la siguiente manera
console.log('%c Mis variables', 'color:green; font-weight: bold')
console.log( { a } )

c = 'Hola '
d = 'Spiderman '

const saludo = c + d;

//Mostrar multiples variables en un solo console.log
console.table({a, b, c, d, x});


//Depuracion
c = 'Hola de nuevo';


//Cuando se usa var se coloca dentro de un objeto global llamado window
//Por eso se recomienda usar let o const, pero si se requiere 
//Que la variable este disponible en todos lados usar el var
var miNombre = 'Obelich'

//Usando la inicializacion de variable var se puede hacer override a variables existentes en window
//Por ejemplo window.outerWidth
//usando
var outerWidth = 600;

//Con esto sobre escribimos el valor real 