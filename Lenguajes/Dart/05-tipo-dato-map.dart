void main() {

  String propiedad = 'soltero';

  Map<String, dynamic> persona = { //Seteando el contenido
    'nombre': 'Obelich',
    'edad'  : 38,
    'soltero': false
  };


  //Desplegando el contenido
  print(persona['nombre'] ); //Como las llaves son string se tienen que llamar como tal
  print(persona['edad'] );
  print(persona[propiedad] );

  Map<int, String> personas = {
    1: 'Meliza',
    2: 'Damian',
    9: 'Obelich'
  };

  print(personas);

  personas.addAll({4: 'Banner'});

  print(personas);

  print(personas[2]); //En el caso de la lista personas como las llaves son enteros se usa el número

}
