import 'dart:convert';

void main() {

  // final wolverine = new Heroe('Logan',  'Regeneración');

  final rawJson    = '{ "nombre": "Logan", "poder": "Regeneracion"  }';
  Map parsedJson = json.decode(rawJson);

  final wolverine = new Heroe.fromJson(parsedJson);
  print(parsedJson);


  print(wolverine.poder);
  print(wolverine.nombre);

}

class Heroe {

  String nombre; // Propiedades de la clases
  String poder;

  Heroe(this.nombre, this.poder);

  Heroe.fromJson(Map parsedJson) {
    nombre = parsedJson['nombre'];
    poder = parsedJson['poder'];
  }

  String toString() => 'Nombre: $nombre - Poder: $poder';

}