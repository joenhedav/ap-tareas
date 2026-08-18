// 01 - EJERCICIOS SOBRE OBJETOS

/* 1. Creación de un objeto básico 
  Crea un objeto llamado libro con propiedades como título, autor y
  añoDePublicacion. Imprime cada propiedad en la consola.
 */
const libro = {
  titulo: 'El señor de los anillos',
  autor: 'J.J.R Tolkien',
  _añoDePublicacion: 1954,

  /* ejercicio 10 */ 
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
  8. Combinar objetos
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

// 02 - EJERCICIOS SOBRE FUNCIONES

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

/* 4. Función que Devuelve un Objeto:
  Crea una función llamada crearPersona que tome nombre y edad
  como parámetros y devuelva un objeto con esas propiedades.
*/
const crearPersona = (nombre, edad) => {
  const persona = {
    nombre: nombre,
    edad: edad
  }
  return persona
}
console.log(crearPersona('Luisa', 25))

/* 5. Función que Modifica un Objeto:
  Crea una función llamada actualizarEdad que tome un objeto
  persona y un número nuevaEdad, y actualice la propiedad edad del
  objeto 
*/
const persona = {
  nombre: 'Joe',
  edad: 30
}
const actualizarEdad = (objetoPersona, nuevaEdad) => {
  if ('edad' in objetoPersona) {
    objetoPersona.edad = nuevaEdad
  } else {
    return
  }
  return objetoPersona
}
console.log(actualizarEdad(persona, 33))

/* 
  6. Función Recursiva:
  Crea una función recursiva llamada factorial que calcule el factorial
  de un número dado.
*/
const factorial = (numero) => {
  if (numero == 0 || numero == 1) {
    return 1
  } else {
    return numero * factorial(numero - 1)
  }
}
console.log(factorial(5))

/* 7. Función con Función Interna:
  Crea una función llamada despedir que contenga una función
  interna adios. despedir debe devolver el resultado de llamar a adios.
*/
const adios = () => console.log('nos vemos!')
const despedir = (callback) => {
  callback()
}
despedir(adios)

/* 8. Función que Usa Otra Función:
  Crea una función llamada procesarArray que tome un array y una
  función como parámetros, y aplique la función a cada elemento del
  array. Usa una función como parámetro para multiplicar cada
  número por 2 
*/
const multiplicarPorDos = (array) => {
  const nuevoArray = []
  for (let i = 0; i < array.length; i++) {
    nuevoArray.push(array[i] * 2) 
  }
  return nuevoArray
}

const procesarArray = (array, callback) => {
  return callback(array);
}
console.log(procesarArray([1,2,3,4], multiplicarPorDos))

/* 9. Función que Devuelve Otra Función:
  Crea una función llamada crearMultiplicador que tome un número x
  y devuelva una nueva función que multiplique cualquier número por x
*/
const crearMultiplicador = (x) => {
  return (numero) => {
    return numero * x
  }
}
const usandoMultiplicador = crearMultiplicador(2)
console.log(usandoMultiplicador(5))

/* Función Anónima:
  Crea una función anónima que sume dos números y la asigna a una
  variable llamada sumarAnonima. Luego, invoca la función a través de
  esa variable */
const sumarAnonima = (a, b) => a + b
console.log(sumarAnonima(5, 3))

// 04 - EJERCICIOS SOBRE OPERACIONES CON ARRAYS

/* 1. Agregar y Eliminar Elementos:
  Crea un array frutas con los valores ["manzana", "banana", "pera"]. Usa
  push para agregar una fruta al final, y pop para eliminar la última
  fruta 
*/
const frutas = ['manzana', 'banana', 'pera']
frutas.push('kiwi')
console.log(frutas)
frutas.pop()
console.log(frutas)

/* 2. Array Bidimensional:
  Crea un array bidimensional llamado matriz con los valores [[1, 2, 3],
  [4, 5, 6], [7, 8, 9]]. Accede al elemento 5 e imprímelo en la consola.
*/
const matriz = [[1,2,3], [4,5,6], [7,8,9]]
let elemento = matriz[1][1]
console.log(elemento)

/* 3. Iterar sobre un Array:
 Usa un bucle for para iterar sobre el array frutas e imprimir cada
 elemento
*/
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
}

/* 4. Uso de map:
  Crea una función llamada elevarAlCuadrado que tome un array de
  números y devuelva un nuevo array con cada número elevado al
  cuadrado. Usa map para implementar la función.
*/
const elevarAlCuadrado = (array) => {
  const arrayMapeado = array.map(elemento => elemento ** 2)
  return arrayMapeado
}
console.log(elevarAlCuadrado([1,2,3,4,5]))

/* 5. Uso de filter:
  Crea una función llamada filtrarMayoresDe que tome un array de
  números y un valor de referencia, y devuelva un nuevo array solo con
  los números mayores que ese valor. Usa filter.
*/
const filtrarMayoresDe = (array, numero) => {
  const arrayFiltrado = array.filter(elemento => elemento > numero)
  return arrayFiltrado
}
console.log(filtrarMayoresDe([1,2,3,4,5], 2))

/* 6. Uso de reduce:
  Crea una función llamada sumarElementos que tome un array de
  números y devuelva la suma de todos los elementos del array
  usando reduce.
*/
const sumarElementos = (array) => {
  const arraySumado = array.reduce((total, actual) => {
    return total += actual
  }, 0)
  return arraySumado
}
console.log(sumarElementos([1,2,3,4,5]))



