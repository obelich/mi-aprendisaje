# Aprender a generar Engine

# Blorgh con --mountable

Este engine es generado usando mountable

```
rails plugin new [NombrePlugin] --mountable
```

Ejemplo:
```
rails plugin new blorgh --mountable
```



# Ahora generar con enginex

```
enginex [NombrePlugin]
```

Ejemplo:
```
enginex team_page
```



Este directorio es para la practica de generar un Motor ( Engine )

https://guides.rubyonrails.org/engines.html

El comando para iniciar el trabajo es

```
rails plugin new [Name] --mountable
```

cambiamos `[Name]` por el nombre que necesitemos darle a nuestro generador

despues de que termine el generador entramos al directorio de nuestro plugin hay que modificar el archivo `blorgh.gemspec`
y modificar el contenido todo lo que contenga `TODO`

Contenido Original
```
require_relative "lib/blorgh/version"

Gem::Specification.new do |spec|
  spec.name        = "blorgh"
  spec.version     = Blorgh::VERSION
  spec.authors     = ["Oscar Miguel Amezcua Estrella"]
  spec.email       = ["obelich@protonmail.com"]
  spec.homepage    = "TODO"
  spec.summary     = "TODO: Summary of Blorgh."
  spec.description = "TODO: Description of Blorgh."
  spec.license     = "MIT"

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  spec.metadata["allowed_push_host"] = "TODO: Set to 'http://mygemserver.com'"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "TODO: Put your gem's public repo URL here."
  spec.metadata["changelog_uri"] = "TODO: Put your gem's CHANGELOG.md URL here."

  spec.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  spec.add_dependency "rails", "~> 6.1.1"
end
```
Es importante que se elimine y se ponga información correspondiente en cada sección donde diga TODO por que en caso contrario no dejara ejecutar el `bundle install`


Archivo ya modificado
```
require_relative "lib/blorgh/version"

Gem::Specification.new do |spec|
  spec.name        = "blorgh"
  spec.version     = Blorgh::VERSION
  spec.authors     = ["Oscar Miguel Amezcua Estrella"]
  spec.email       = ["obelich@protonmail.com"]
  spec.homepage    = "http://afal.mx"
  spec.summary     = "Plugin de practica"
  spec.description = "Plugin de practica"
  spec.license     = "MIT"

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  spec.metadata["allowed_push_host"] = "TODO: Set to 'http://mygemserver.com'"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "http://afal.mx"
  spec.metadata["changelog_uri"] = "http://afal.mx"

  spec.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  spec.add_dependency "rails", "~> 6.1.1"
end
```

Una vez que ya se modifico el archivo ya podemos ejecutar `bundle install`

# Generar secciones en este ejemplo un blog

en cuanto al trabajo en general es rails al uso por ejemplo generar el CRUD de articulos

```
rails generate scaffold article title:string text:text
```

# Rutas

Ahora generamos que `root_path` sea el index de articulos `config/routes.rb`

```
root to: "articles#index"
```

# Generando Sección de comentarios

iniciando con la generación del modelo con su respectiva migración

```
rails generate model Comment article_id:integer text:text
```

Ahora corremos la migración

```
```

