console.log("conexion exitosa con js..,.")

// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
let nota = 6.5
let nombre = "Estefano" 

if (nota >= 6.0){
    alert(`El estudiante ${nombre} tiene nota ${nota}
        \n y su resultado es: Exelente rendimiento`);
}else if (nota >= 4.0){
    alert(`El estudiante ${nombre} tiene nota ${nota}
        \n y su resultado es: Estudiante aprobado`);
}else{
    alert(`El estudiante ${nombre} tiene nota ${nota}
        \n y su resultado es: Estudiante reprobado`);
}
}


// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
let nombre = "estefano ronaldo poblete"
alert(`El nombre convertido es: ${nombre.toUpperCase()} y tiene ${nombre.length} caracteres`)
}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
let correo = "estefano1234"
let tipoCorreo = "@gmail.com"
if (correo.length >= 15){
alert(`El correo convertido es: ${correo+tipoCorreo} y el resultado es: correo valido`)
} else{
alert(`El correo convertido es: ${correo+tipoCorreo} y el resultado es: correo demasiado corto`)
}
}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
let frase = "Estoy aprendiendo JavaScript"
if (frase.length > 20){
    alert(`La frase "${frase}" tiene ${frase.length} caracteres y corresponde a una frase larga`)
} else if (frase.length >= 11) {
    alert(`La frase "${frase}" tiene ${frase.length} caracteres y corresponde a una frase mediana`)
} else {
    alert(`La frase "${frase}" tiene ${frase.length} caracteres y corresponde a una frase corta`)
}
}


// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
let precio = 50000
let producto = "teclado"
if (precio >= 50000){
    alert(`El producto ${producto.toUpperCase()} tiene un precio final de ${precio*0.8} (con el 20% de decuento)`);
}else if (precio >= 20000){
    alert(`El producto ${producto.toUpperCase()} tiene un precio final de ${precio*0.9} (con el 10% de decuento)`);
}else{
    alert(`El producto ${producto.toUpperCase()} tiene un precio final de ${precio}`);
}
}

function ejercicio16(){
let nombre = "Estefano"
let precio = 100000
let producto = "Mouse"
if (precio >= 100000){
    alert(`El cliente ${nombre.toUpperCase()} compró el producto "${producto.toLowerCase()}" que cuesta $${precio}
    \n por lo cual es un cliente premium, asi que el precio final del producto es de: $${precio*0.8} (con el 20% de decuento)`);
}else if (precio >= 50000){
    alert(`El cliente ${nombre.toUpperCase()} compró el producto "${producto.toLowerCase()}" que cuesta $${precio}
    \n por lo cual es un cliente frecuente, asi que el precio final del producto es de: $${precio*0.9}  (con el 10% de decuento)`);
}else{
    alert(`El cliente ${nombre.toUpperCase()} compró el producto "${producto.toLowerCase()}" que cuesta $${precio}
    \n por lo cual es un cliente normal, asi que el precio final del producto es de: $${precio}`);
}
}

function ejercicio17(){
let frase = "Tung Tung Tung Sahur"
let puntaje = 80
if (puntaje >= 90){
    alert(`la frase "${frase.toLowerCase()}" tiene ${frase.length} caracteres y tiene ${puntaje} puntos
    \n por lo cual su calificacion es: Exelente`);
}else if(puntaje >= 70){
    alert(`la frase "${frase.toLowerCase()}" tiene ${frase.length} caracteres y tiene ${puntaje} puntos
    \n por lo cual su calificacion es: Buena`)
}else{
    alert(`la frase "${frase.toLowerCase()}" tiene ${frase.length} caracteres y tiene ${puntaje} puntos
    \n por lo cual su calificacion es: insuficiente`)
}
}

function ejercicio18(){
let nombre = "Estefano poblete"
let nota1 = 5.6
let nota2 = 6.7
let nota3 = 4.5
let promedio = (nota1 + nota2 + nota3)/3
if (promedio >= 6){
    alert(`El alumno: ${nombre.toUpperCase()} cuyo nombre tiene ${nombre.length} caracteres
    \n tiene un promedio ${promedio.toFixed(1)} por lo cual su estado es: Destacado`)
}else if (promedio >= 4){
    alert(`El alumno: ${nombre.toUpperCase()} cuyo nombre tiene ${nombre.length} caracteres
    \n tiene un promedio ${promedio.toFixed(1)} por lo cual su estado es: Aprobado`)
}else{
    alert(`El alumno: ${nombre.toUpperCase()} cuyo nombre tiene ${nombre.length} caracteres
    \n tiene un promedio ${promedio.toFixed(1)} por lo cual su estado es: Desaprobado`)
}
}


// Ejercicio 19: Clasificación de desempeño con más niveles
// Crear una función que almacene el nombre de un estudiante y su promedio final. Luego:

// Convertir el nombre a mayúsculas
// Clasificar el rendimiento según:
// ≥ 6.5 → Sobresaliente
// ≥ 6.0 → Muy buen rendimiento
// ≥ 5.0 → Buen rendimiento
// ≥ 4.0 → Suficiente
// < 4.0 → Insuficiente

// Además:

// Mostrar la cantidad de caracteres del nombre

function ejercicio19(){
let nombre = "Estefano poblete"
let promedio = 6.7
if (promedio >= 6.5){
    alert(`El alumno: ${nombre.toUpperCase()} cuyo nombre tiene ${nombre.length} caracteres 
    \n tiene un promedio ${promedio} por lo cual su rendimiento es: Sobresaliente`)
}else if (promedio >= 6.0){
    alert(`El alumno: ${nombre.toUpperCase()} cuyo nombre tiene ${nombre.length} caracteres 
    \n tiene un promedio ${promedio} por lo cual su rendimiento es: Muy bien rendimiento`)
}else if (promedio >= 5.0){
    alert(`El alumno: ${nombre.toUpperCase()} cuyo nombre tiene ${nombre.length} caracteres 
    \n tiene un promedio ${promedio} por lo cual su rendimiento es: Buen rendimiento`)
}
else if (promedio >= 4.0){
    alert(`El alumno: ${nombre.toUpperCase()} cuyo nombre tiene ${nombre.length} caracteres 
    \n tiene un promedio ${promedio} por lo cual su rendimiento es: Suficiente`)
}else{
    alert(`El alumno: ${nombre.toUpperCase()} cuyo nombre tiene ${nombre.length} caracteres 
    \n tiene un promedio ${promedio} por lo cual su rendimiento es: Insuficiente`)
}

}

// Ejercicio 20: Clasificación de producto con múltiples rangos de precio
// Crear una función que almacene el nombre de un producto y su precio. Luego:

// Convertir el producto a minúsculas
// Clasificar el precio:
// ≥ 200.000 → Producto de lujo
// ≥ 100.000 → Producto premium
// ≥ 50.000 → Producto estándar
// ≥ 20.000 → Producto económico
// < 20.000 → Producto básico

// Además:

// Aplicar descuento:
// Si es ≥ 100.000 → 15%
// Si es ≥ 50.000 → 10%
// Si es menor → sin descuento

// Mostrar:

// Nombre transformado
// Largo del nombre del producto
// Precio original
// Precio final
// Clasificación

function ejercicio20(){
let precio = 100000
let producto = "Mouse"
if (precio >= 200000){
    alert(`El producto "${producto.toLowerCase()}" cuyo nombre tiene ${producto.length} caracteres
        \n tiene un precio inicial de $${precio} pero al ser producto de lujo su precio final es de $${precio*0.85} (con 15% de descuento)`)
}else if (precio >= 100000){
    alert(`El producto "${producto.toLowerCase()}" cuyo nombre tiene ${producto.length} caracteres
        \n tiene un precio inicial de $${precio} pero al ser producto premium su precio final es de $${precio*0.85} (con 15% de descuento)`)
}else if (precio >= 50000){
    alert(`El producto "${producto.toLowerCase()}" cuyo nombre tiene ${producto.length} caracteres
        \n tiene un precio inicial de $${precio} pero al ser producto estandar su precio final es de $${precio*0.9} (con 10% de descuento)`)
}else if (pewcio >= 20000){
    alert(`El producto "${producto.toLowerCase()}" cuyo nombre tiene ${producto.length} caracteres
        \n tiene un precio inicial de $${precio} pero al ser producto economico su precio final es de $${precio} (Sin descuento)`)
}else{
    alert(`El producto "${producto.toLowerCase()}" cuyo nombre tiene ${producto.length} caracteres
        \n tiene un precio inicial de $${precio} pero al ser producto basico su precio final es de $${precio} (Sin descuento)`)
}
}

// Ejercicio 21: Evaluación de frase y puntaje con múltiples condiciones
// Crear una función que almacene una frase y un puntaje. Luego:

// Convertir la frase a mayúsculas
// Contar su largo
// Clasificar el puntaje:
// ≥ 90 → Excelente
// ≥ 80 → Muy bueno
// ≥ 70 → Bueno
// ≥ 60 → Regular
// < 60 → Deficiente

// Además:

// Clasificar la frase por tamaño:

// 30 → Muy larga

// 20 → Larga

// 10 → Mediana

// ≤ 10 → Corta

