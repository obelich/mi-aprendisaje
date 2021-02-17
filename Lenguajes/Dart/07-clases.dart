void main() {

  final wolverine = new Heroe('Logan', 'Regeneración');
  print(wolverine);
  print(wolverine.poder); //Para acceder a las propiedades
  print(wolverine.nombre);

  final wolverineArgumentosNombre = new HeroeArgumentosConNombre(nombre: 'Logan', poder: 'Regeneración');
  print(wolverineArgumentosNombre);


}


class Heroe {

  String nombre; // Propiedades de la clases
  String poder;

  //El constructor de la clase lleva el mismo nombre
  Heroe(String nombre, String poder) {
    this.nombre = nombre;
    this.poder = poder;
  }

  String toString() {
    return 'Nombre: ${this.nombre} - Poder: ${this.poder}';
  }

}

class HeroeArgumentosConNombre {

  String nombre; // Propiedades de la clases
  String poder;

  //El constructor de la clase lleva el mismo nombre
  HeroeArgumentosConNombre({String nombre, String poder}) {
    this.nombre = nombre;
    this.poder = poder;
  }

  String toString() {
    return 'Nombre: ${this.nombre} - Poder: ${this.poder}';
  }

}