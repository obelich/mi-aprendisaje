import 'package:flutter/material.dart';
import 'package:componentes/src/routes/routes.dart';
import 'package:componentes/src/pages/alert_page.dart'; //Este se qieda por que es una pagina por default

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Material App',
        debugShowCheckedModeBanner: false,
        // home: HomePage()
        initialRoute: '/',
        routes: getApplicationRouters(),
        onGenerateRoute: (RouteSettings settings) { //Esto se ejecuta cuando no abre una ruta que no existe

          return MaterialPageRoute(builder: (BuildContext context) => AlertPage());
         },
        
        );
  }
}
