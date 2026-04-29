console.log("conexion exitosa con js..,.")

// EJERCICIO 1
// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {
let nombre = "estefano";
alert(`Bienvenido ${nombre}`);
}


// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
let num1 = 10;
let num2= 5;
alert(`La suma es: ${num1 + num2}`);
}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
let num1 = 24;
let num2 = 12;
alert(`La resta es: ${num1 - num2}`);
}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
let num1 = 12;
let num2 = 2;
alert(`La multiplicación es: ${num1*num2}`);
}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
let nota1 = 5.5
let nota2 = 5.9
let nota3 = 6.7
alert(`El promedio es: ${Math.round((nota1 + nota2 + nota3)/3)}`)

}


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
let edad = 19
if (edad >= 18) { 
    alert(`Edad es: ${edad}
        \nEs mayor de edad`)
}
}

// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
let numero = 3
let resto = numero%2
if (resto = 1){
    alert(`El numero ${numero} es impar`)
} else{
    alert(`El nuumero ${numero} es par`)
}
}


// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
let nota = 5.5

if (nota >= 4.0){
    alert(`La nota del estudiante es: ${nota}
        \nEstudiante aprobado`);
}else{
    alert(`La nota del estudiante es: ${nota}
        \nEstudiante reprobado`)
}
}


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
let precio = 20000
alert(`El precio del producto es ${precio}
    \n El precion con 10%  de descuento es: ${precio*0.9}`)
}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
let num1 = 13
let num2 = 67
if (num1 > num2){
    alert(`El numero ${num1} es mayor que el numero ${num2}`)
} else{
    alert(`El numero ${num2} es mayor que el numero ${num1} `)
}
}


