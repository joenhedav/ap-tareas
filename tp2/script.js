// EJERCICIOS SOBRE OBJETOS

/* 1. Creación de un objeto básico 
  Crea un objeto llamado libro con propiedades como título, autor y
  añoDePublicacion. Imprime cada propiedad en la consola.
 */
const libro = {
  titulo: 'El señor de los anillos',
  autor: 'J.J.R Tolkien',
  _añoDePublicacion: 1954,
  
  get añoDePublicacion () {
    return this._añoDePublicacion
  },
  set añoDePublicacion (año) {
    this._añoDePublicacion = año
  }
}
console.log(`Título: ${libro.titulo}. Autor: ${libro.autor}, publicado en ${libro.añoDePublicacion}`)

/* 2. Anidación de objetos 
  Crea un objeto llamado estudiante con propiedades nombre, edad y
  direccion. direccion debe ser otro objeto con propiedades calle,
  ciudad y pais. Imprime la dirección completa del estudiante.
*/
const estudiante = {
  nombre: 'John Doe',
  edad: 30,
  direccion: {
    calle: 'Calle falsa 123',
    ciudad: 'Buenos Aires',
    pais: 'Argentina'
  }
}
console.log(`${estudiante.direccion.calle}, ${estudiante.direccion.ciudad}, ${estudiante.direccion.pais}`)

/* 3. Métodos de objetos 
  Añade un método llamado descripción al objeto libro que devuelva
  una cadena describiendo el título y el autor del libro. Invoca este
  método e imprime el resultado.
*/
libro.descripción = function() {
  console.log(`El libro "${this.titulo}" fue publicado en el año ${this.añoDePublicacion} por el autor ${this.autor}`)
}
libro.descripción()

/* 
  4. Iteración sobre propiedades de un objeto
  Crea un objeto producto con propiedades como nombre, precio y
  disponible. Usa un bucle for...in para imprimir todas las propiedades
  y sus valores
*/
const producto = {
  nombre: 'Fideos',
  precio: 1500,
  disponible: true
}
for (let propiedad in producto) {
  console.log(propiedad, producto[propiedad])
}

/* 
  5. Actualización de propiedades
  Modifica el valor de la propiedad precio del objeto producto y luego
  imprime el objeto completo para verificar el cambio
*/
producto.precio = 1000
console.log(producto)

/*
  6. Comprobación de propiedad
  Crea una función llamada tienePropiedad que tome un objeto y una
  cadena como parámetros, y devuelva true si el objeto tiene una
  propiedad con ese nombre, o false en caso contrario.
*/
const perro = {
  nombre: 'Boro',
  edad: 15
}
const tienePropiedad = (objeto, propiedad) => {
  if (propiedad in objeto) {
    return true
  } 
  return false
}
console.log(tienePropiedad(perro, 'nombre'))
console.log(tienePropiedad(perro, 'raza'))

/* 
  7. Eliminación de propiedades
  Elimina la propiedad disponible del objeto producto. Imprime el
  objeto antes y después de eliminar la propiedad.
*/
delete producto.disponible
console.log(producto)

/* 
  8. Combinar okbjetos
  Crea una copia profunda del objeto estudiante utilizando el método
  JSON.parse y JSON.stringify. Modifica la copia y verifica que el objeto
  original no haya sido alterado
*/
const persona1 = {
  nombre: 'Bob',
  edad: 83
}

const persona2 = {
  nombre: 'Rick',
  edad: 75
}
const persona3 = Object.assign({}, persona1, persona2)
console.log(persona3)

/* 
  9. Copiar objetos
  Crea una copia profunda del objeto estudiante utilizando el método
  JSON.parse y JSON.stringify. Modifica la copia y verifica que el objeto
  original no haya sido alterado
*/
const copiaEstudiante = JSON.parse(JSON.stringify(estudiante))
//console.log(copiaEstudiante)
copiaEstudiante.nombre = 'Luisa'
copiaEstudiante.direccion.ciudad = 'Bogotá'
copiaEstudiante.direccion.pais = 'Colombia'
console.log(estudiante)
console.log(copiaEstudiante)

/* 
  10. Métodos getter y setter
  Añade un getter y un setter al objeto libro para la propiedad
  añoDePublicacion. Usa el setter para actualizar el año de publicación
  y luego usa el getter para leerlo.
*/
libro.añoDePublicacion = 1955
console.log(libro.añoDePublicacion)

// EJERCICIOS SOBRE FUNCIONES

/* 1. Función Suma:
  Crea una función llamada sumar que tome dos números como
  parámetros y devuelva su suma. Prueba la función con diferentes
  números.
*/
const suma = (num1, num2) => num1 + num2
console.log(suma(1, 3))
console.log(suma(5, 3))

/* 2. Función que Multiplica:
  Crea una función llamada multiplicar que tome dos números como
  parámetros y devuelva su producto. Prueba la función con diferentes
  devvalores
*/
const multiplica = (num1, num2) => num1 * num2
console.log(multiplica(3, 1))
console.log(multiplica(3, 5))

/* 3. Función con Parámetro por Defecto:
  Crea una función llamada saludar que tome un parámetro nombre
  con un valor por defecto de "Invitado". La función debe devolver
  "Hola, [nombre]".
*/

const saludar = (nombre = 'Invitado') => {
  return `Hola ${nombre}`
}
console.log(saludar())
