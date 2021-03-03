mi_string = "Hola Mundo!" # Los strings pueden ser declarados con comillas dobles "" o simples ''
print(mi_string)
mi_string_salto_linea = """ Este es un string que contiene
    saltos de linea, como puedes ver. 
    Adios.""" #para usar strings con salto de linea hay que usar 6 comillas dobles o simple """ Mi string """

print(mi_string_salto_linea)

mi_string_salto_linea_una_linea = "Este es un string que contiene \nsaltos de linea, como puedes ver\nAdios."
print(mi_string_salto_linea_una_linea)

course = "Python 3"
name = "Eduardo"

final_message = "Nuevo curso de "+course+ " Por "+ name #primera forma de concatenación de string basica
final_message = "Nuevo curso de %s por %s" %(course, name) #Segunda forma de concatenación los porcenge s son holders que toman las variables
# en el orden que estan declarados.
final_message = "Nuevo curso de {} por {}".format(course, name) # Tercera forma usando la misma logica pero el holder es {}

print(final_message)