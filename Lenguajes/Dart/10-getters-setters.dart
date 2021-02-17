import 'dart:convert';

void main() {

  final cuadrado = new Cuadrado();

  cuadrado.lado = 10;
  print(cuadrado);

  print('área: ${ cuadrado.area}');
}

class Cuadrado {

  double _lado; // Si las propiedades tienen un guion bajo se hacen privadas _lado
  // double _area;

  set lado(double valor) {
    if ( valor <= 0) {
      throw('El lado no puede ser menor o igual a 0');
    }

    _lado = valor;
  }

  //funcion normal de getter
  // double get area {
  //   return _lado * _lado;
  // }

  //funcion de flecha
  double get area => _lado * _lado;

  toString() => 'Lado: $_lado';


}