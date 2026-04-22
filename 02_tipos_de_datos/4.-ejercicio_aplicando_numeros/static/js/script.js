console.log("conexion exitosa")
// 🔹 Ejercicio 1: Edad proyectada
// Declara tu edad actual y calcula:
// Tu edad en 5 años
// Tu edad hace 10 años
// Muestra ambos resultados en consola.

function edadProyectada(){
    let edad = 16;
    alert(`Mi edad es: ${edad}
        \nEn 5 años tendré: ${edad + 5}
        \nHace 10 años tenia: ${edad - 10}`);

};

// 🔹 Ejercicio 2: Compra con descuento
// Un producto cuesta $25.000 y tiene un descuento del 20%.
// Calcula el precio final
// Muestra el resultado

function compraDescuento(){
let precio = 25000
alert(`el precio inicial es de: ${precio}
    \nEl precio con 20% de descuento es: ${precio*0.8}`)
};

// 🔹 Ejercicio 3: Promedio de notas
// Declara 3 notas decimales:
// Calcula el promedio
// Redondea el resultado usando Math.round()

function promedioNotas(){
let nota1 = 6.7;
let nota2 = 4.9;
let nota3 = 5.1;
let promedio = (nota1 + nota2 + nota3)/3;
alert(`Las 3 notas son: ${nota1}, ${nota2} y ${nota3}
    \n El promedio es: ${promedio}
    \n El prommedio redondeado seria: ${Math.round(promedio)}`)
};

// 🔹 Ejercicio 4: Temperatura
// Declara una temperatura actual en grados Celsius:
// Auméntala en 3 grados
// Luego disminúyela en 5 grados
// Muestra el resultado final

function calcularTemperatura(){
let temperatura = 12
alert(`la temperatura inicial es de: ${temperatura}°
    \nla temperatura aumentada 3 grados es de: ${temperatura + 3}°
    \ny disminuida 5 grados es de: ${temperatura + 3 - 5}°
    \n La temperatura final es de: ${temperatura + 3 - 5}°`)
};



// 🔹 Ejercicio 5: Sueldo semanal
// Un trabajador gana $8.000 por hora y trabaja 45 horas:
// Calcula su sueldo
// Si trabaja 5 horas extra, agrégalas usando incremento
// Muestra el nuevo sueldo
function calcularSueldo(){
let sueldoHora = 8000
let horasSemana = 45
alert(`el sueldo es de: $${sueldoHora*horasSemana}
    \nel sueldo despues de hacer 5 horas extras es de: $${sueldoHora*(horasSemana + 5)}`)
};

// 🔹 Ejercicio 6: División y resto
// Declara dos números:
// Calcula la división
// Calcula el módulo (%)
// Explica el resultado en consola
function divisionNum(){
let num1 = 8
let num2 = 4
alert(`los numeros son ${num1} y ${num2}
    \n${num1} dividido entre ${num2} es: ${num1/num2}
    \n El resto de la división es de: ${num1 % num2}`)
}
// 🔹 Ejercicio 7: Comparación de números
// Declara dos números:
// Muestra si el primero es mayor que el segundo
// Verifica si uno de ellos es igual a 10
function comparacionNum(){
    let Num1 = 10
    let Num2 = 7
    alert(`El primer numero es ${Num1} y el segundo numero es ${Num2}
        \n El primero(${Num1}) numero es mayor que el segundo(${Num2})? ${Num1 > Num2}
        \n El primer numero es igual a 10? ${Num1 === 10} `)
}
// 🔹 Ejercicio 8: Notación científica aplicada
// Declara:
// Una población usando notación científica (ej: 1e6)
// Divide esa población en 4 grupos
// Muestra el resultado
function notacionCN(){
    let poblacion = 2e7
    alert(`la poblacion total es: ${poblacion}
        \n Y dividida en 4 grupos queda: ${poblacion/4}`)
}
// 🔹 Ejercicio 9: Potencia y cálculo combinado
// Calcula:
// 3 elevado a 4
// Luego multiplícalo por 2
// Resta 10 al resultado final
function potenciaCal(){
let numero = 3
alert(`3 elevado a 4 es: ${numero**4}
    \n Esto multiplicado por 2 es: ${(numero**4)*2}
    \n Y si se le resta 10 el resultado final es: ${((numero**4)*2)- 10}`)
}
// 🔹 Ejercicio 10: Dado aleatorio 🎲
// Simula el lanzamiento de un dado:
// Genera un número entre 1 y 6
// Muestra el resultado
// Indica si el número es mayor o igual a 4 (gana) o menor (pierde)
function dado(){
let dado = Math.floor(Math.random()*6) + 1;
alert(`tenemos un dado de 6 caras y haz tirado este.
    \nTiras el numero: ${dado}
    \nsi tu numero es mayor a 4 ganas, ganaste? ${dado > 4}`)

}