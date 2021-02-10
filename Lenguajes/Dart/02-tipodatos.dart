void main() {
  // int solo puede ser para numeros enteros
  int empleados = 10; //Número de tipo entero
  double pi = 3.141592; //Número de tipo double

  print('$empleados - $pi');

  //String - Cadenas de caracteres
  String nombre = 'Meliza';
  String escapar = 'hola\' escapado';

  print(nombre);
  print(nombre[0]); //Tomar la primera letra del nombre
  print(nombre[nombre.length - 1]); //Tomar la ultima letra del nombre
  print(escapar);
}
