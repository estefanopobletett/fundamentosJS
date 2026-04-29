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






