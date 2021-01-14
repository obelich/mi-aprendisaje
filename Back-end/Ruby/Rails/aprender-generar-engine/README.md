# Aprender a generar Engine

Este directorio es para la practica de generar un Motor ( Engine )

El comando para iniciar el trabajo es

```
rails plugin new [Name] --mountable
```

cambiamos `[Name]` por el nombre que necesitemos darle a nuestro generador

despues de que termine el generador entramos al directorio de nuestro plugin hay que modificar el archivo `blorgh.gemspec`
y modificar el contenido todo lo que contenga `TODO`

Contenido Original
```
...
# Describe your gem and declare its dependencies:
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
  if spec.respond_to?(:metadata)
    spec.metadata["allowed_push_host"] = "TODO: Set to 'http://mygemserver.com'"
  else
    raise "RubyGems 2.0 or newer is required to protect against " \
      "public gem pushes."
  end

  spec.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  spec.add_dependency "rails", "~> 6.0.3", ">= 6.0.3.4"

  spec.add_development_dependency "sqlite3"
end
```



Archivo ya modificado
```
...
# Describe your gem and declare its dependencies:
Gem::Specification.new do |spec|
  spec.name        = "blorgh"
  spec.version     = Blorgh::VERSION
  spec.authors     = ["Oscar Miguel Amezcua Estrella"]
  spec.email       = ["obelich@protonmail.com"]
  spec.homepage    = "http://google.com"
  spec.summary     = "Some information."
  spec.description = "Practic how to create engine"
  spec.license     = "MIT"

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  if spec.respond_to?(:metadata)
    spec.metadata["allowed_push_host"] = "localhost"
  else
    raise "RubyGems 2.0 or newer is required to protect against " \
      "public gem pushes."
  end

  spec.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.md"]

  spec.add_dependency "rails", "~> 6.0.3", ">= 6.0.3.4"

  spec.add_development_dependency "sqlite3"
end
```

Una vez que ya se modifico el archivo ya podemos ejecutar `bundle install`