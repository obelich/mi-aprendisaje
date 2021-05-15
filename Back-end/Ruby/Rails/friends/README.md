# Learn Ruby on Rails

Curso de basico intensivo Ruby On Rails para refrescar lo basico de Rails.

# Notas
Para crear nuestra primera pagina usamos el generador
```
rails g controller home index
```

Para ver las rutas en la consola se usa

```
rails routes
```

si queremos filtrar por una ruta de nombre usamos `|grep [nombre]`

```
rails routes |grep home
```

Con esto nos daria solo las rutas que contengan como nombre home

## Parciales
para generar un archivo parcial que se pueda utilizar la regla es que el nombre del archivo inicio con un `_` y que termine
con `.html.erb`

ejemplo
```
_header.html.erb
```

Para utilizar el parcial usamos 
```
<%= render 'home/header' %>
```
donde home es el nombre del directorio que esta dentro de views este se sustituye por el nombre de la carpeta donde este el parcial.


## Scaffold
Para usar scaffold se hace con la linea `rails g scafflod [Nombre] [campo]:[tipocampo]`

Ejemplo
```
rails g scaffold friends first_name:string last_name:string email:string phone:string twitter:string
```

## Migraciones
Para ejecutar las migraciones se usa

```
rails db:migrate
```

Tipos de campo
https://guides.rubyonrails.org/v3.2/migrations.html#supported-types

# Referencias

Learn Ruby on Rails - Full Course: https://www.youtube.com/watch?v=fmyvWz5TUWg 4:03:48