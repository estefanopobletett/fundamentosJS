console.log("conexion esxitosa...")
/*
===================================
1. ¿Que es una condicion en JS ?
===================================
Una condicion nos permite tomar decisiones en el
codigo. Separando dos caminos, el si(if)y el no(else).

estructura basica: ( sintaxis --> reglas del lenguaje de programacion)

if (condicion) {
    //codigo que se ejecuta si la condicion es verdadera.
}

else {
    //codigo que se ejecuta si la condicion es falsa.
}

*/

//ejemplo 1: (numerico)

let edad = 18;
if (edad >= 18) { //condicion  SI
    console.log("eres mayor de edad");
}

//ejemplo 2: dos caminos posibles
let temperatura = 21

if (temperatura > 20){ //condicion SI       
    console.log("hace calor")
} else{ //condicion NO  
    console.log("hace frio")
}

//ejemplo 3: if - else if - else

let nota = 5.5

if (nota >= 6.0){//primera condicion
    console.log("excelente!");
}else if (nota >= 4.0){//segunda condicion
    console.log("aprobado");
}else{//tercera condicion
    console.log("reprobado")
}