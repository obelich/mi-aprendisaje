# README

Este curso esta echo con Ruby 3.0.0 y Rails 6.1.1


# The Model View Controller (MVC Pattern)


## Routes
Matchers for the URL that is requested

GET for "/about"

I see you request "/about", we'll give that to the AboutController to handle

## Models
Database wrapper

User
* query for records
* wrap individual records

## Views

Your response body content

* HTML
* CSV
* PDF
* XML

This is what gets sent back to the browser and displayed

## Controllers

Decide how to process a request and define a response

## Comandos



Ver lista de rutas

```
rails routes
```


Generar el Model user

```
rails g model User email:string password_digest:string
```


Correr las migraciones

```
rails db:migrate
```

Hacer rollback a las migraciones

```
rails db:rollback
```

Generar un rollback y correr la migración de nuevo la ultima migración

```
rails db:migrate:redo
```

# Resources

http:  https://developer.mozilla.org/en-US/docs/Web/HTTP

REST: https://www.csalmeida.com/log/introduction-to-the-rest-architecture/
