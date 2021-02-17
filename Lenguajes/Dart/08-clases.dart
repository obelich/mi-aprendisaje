void main() {

  final wolverine = new Heroe(nombre: 'Logan', poder: 'Regeneración');
  print(wolverine);

}

class Heroe {

  String nombre; // Propiedades de la clases
  String poder;

  //El constructor de la clase lleva el mismo nombre
  // Heroe({String nombre, String poder}) {
  //   this.nombre = nombre;
  //   this.poder = poder;
  // }

  Heroe({this.nombre, this.poder});

  String toString() => 'Nombre: $nombre - Poder: $poder';

}