void main() async {
  print('Estamos apunto de pedir datos');

// El await solo puede funcionar si esta dentro de una  async
  String data = await httpGet('https://api.nasa.com/aliens');

  print(data);

  print('Ultima linea');
}

Future<String> httpGet(String url) {
  return Future.delayed(new Duration(seconds: 4), () {
    return 'Hola Mundo';
  });
}
