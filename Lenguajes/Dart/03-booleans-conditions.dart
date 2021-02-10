void main() {
  //Para los boleanos se usa bool
  bool activado = true;

  print("Valor: $activado");

  activado = !activado;

  print("Valor: $activado");

  if (activado) {
    print("El motor esta funcionando");
  } else {
    print("Está apagado");
  }
}
