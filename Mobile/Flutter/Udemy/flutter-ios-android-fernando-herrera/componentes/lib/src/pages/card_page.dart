import 'package:flutter/material.dart';

class CardPage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Cards')
      ),
      body: ListView(
        padding: EdgeInsets.all(10.0),
        children: <Widget>[
          _cardTipo1(),
          SizedBox(height: 30.0,),
          _cardTipo2(),
        ],
      )
    );
  }

  Widget _cardTipo1() {
    return Card(
      child: Column(
        children: <Widget>[
          ListTile(
            leading: Icon(Icons.photo_album),
            title: Text('Soy el titulo de Esta tarjeta'),
            subtitle: Text(' es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.end,
            children: <Widget>[
              TextButton(child: Text('Cancelar'), onPressed: () {

              }),
              TextButton(child: Text('Ok'), onPressed: () {
                
              })
            ],
          )

        ],
      ),
    );
  }

  Widget _cardTipo2() {
    return Card(
      child: Column(
        children: <Widget>[
          FadeInImage(
            placeholder: AssetImage('assets/jar-loading.gif'), 
            image: NetworkImage('https://image.winudf.com/v2/image/Y29tLnNoYWtlX3NlLmxpdmVfd2FsbHBhcGVyLmJlYXV0aWZ1bF9sYW5kc2NhcGVfYW5pbWF0ZWRfd2FsbHBhcGVyX3NjcmVlbnNob3RzXzBfZmJhZmE4M2Y/screen-0.jpg?fakeurl=1&type=.jpg'),
            fadeInDuration: Duration(milliseconds: 200),
            height: 300.0,
            fit: BoxFit.cover,
          ),
          // Image(
          //   image: NetworkImage('https://image.winudf.com/v2/image/Y29tLnNoYWtlX3NlLmxpdmVfd2FsbHBhcGVyLmJlYXV0aWZ1bF9sYW5kc2NhcGVfYW5pbWF0ZWRfd2FsbHBhcGVyX3NjcmVlbnNob3RzXzBfZmJhZmE4M2Y/screen-0.jpg?fakeurl=1&type=.jpg')
          //   ),
            Container(
              padding: EdgeInsets.all(10.0),
              child: Text('No tengo idea de que poner')
              )
        ]
      )
    );
  }
}