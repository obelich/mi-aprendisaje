void main() {

  String mensaje = saludar();
  print(mensaje);

  String mensajeArgumentos = saludarConArgumentosDinamicos(1, true);
  print(mensajeArgumentos);

  String mensajeArgumentosEspecificos = saludarConArgumentosEspecificos('Hola', 'Meliza');
  print(mensajeArgumentosEspecificos);

  String mensajeArgumentosConNombre = saludarConArgumentosConNombre( nombre: 'Meliza', texto: 'Hola');
  //De esta forma no importa el orden si no que tengan el nombre del argumento al que va dirigido
  print(mensajeArgumentosConNombre);

  String mensajeFuncionDeFlecha = saludarFuncionDeFlecha( nombre: 'Meliza', texto: 'Hola');
  //Lo mismo que la anterior pero usando una funcion de flecha
  print(mensajeFuncionDeFlecha);
}

//
// void saludar() { // Si la funcion no retorna nada agregar void al declarar la funcion
//   print('hola');
// }

String saludar() { //Aqui por ejemplo estamos diciendo que regresara un string
  return 'Hola'; // Siempre que tenga que retornar algo se usa return
}

String saludarConArgumentosDinamicos(texto, nombre) {
  return '$texto $nombre';

}

String saludarConArgumentosEspecificos(String texto, String nombre) {
  return '$texto $nombre';

}

//Cuando los argumentos estan con llaves {} son parametros con nombre
String saludarConArgumentosConNombre({String texto, String nombre}) {
  return '$texto $nombre';

}

String saludarFuncionDeFlecha({String texto, String nombre}) => '$texto $nombre';
