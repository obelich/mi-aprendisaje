import 'package:componentes/src/providers/menu_provider.dart';
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Componentes'),
      ),
      body: _lista(),
    );
  }

  Widget _lista() {

    // menuProvider.cargarData()

    return FutureBuilder(
      future: menuProvider.cargarData(),
      initialData: [],
      builder: (context, AsyncSnapshot<List<dynamic>> snapshot ) {

        return ListView(
          children: _listaItems(snapshot.data)
        );

      }
    );
  }

  List<Widget> _listaItems() {
    return [
      ListTile(title: Text('Hola Mundo'),),
      Divider(),
      ListTile(title: Text('Hola Mundo'),),
      Divider(),
      ListTile(title: Text('Hola Mundo'),),
    ];
  }
}
