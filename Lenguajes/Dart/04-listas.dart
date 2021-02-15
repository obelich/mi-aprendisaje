void main() {
  //Listas dinamicas sin un tamaño fijo
  List numeros = [1, 2, 3, 4, 5];
  print(numeros);

  //Agregar a numeros
  numeros.add(6);
  print(numeros);

  //Como la lista es dinamica se puede agregar un string
  numeros.add("hola mundo");
  print(numeros);

  //Para generar una lista pero que sea solo de un tipo digamos números se hace de la siguiente manera
  List<int> solonumeros = [1,2,3,4,5];


  //Definir una lista con un tamaño fijo
  List listaLimitada = new List(10); //En este caso el limite son 10
  print(listaLimitada); //En este caso arrojara una lista con solo nulls
  //Si quisieramos agregar con listaLimitada.add(6); nos dara error por que todos los espacios estan usados
  listaLimitada[0] = 1; //Como esta lista es limitada hay que sobre escribir el valor por defecto
  print(listaLimitada);
}
