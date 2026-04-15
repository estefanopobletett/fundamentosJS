console.log("conexion con js correcta");
/*
dati: tipotexto (string)
concatenacin de texto con el signo +
podemos unir texto y variables
*/
const nombre = "Estefano";
const apellido = "Poblete";

console.log("hola, mi nombre es: " + nombre + " " + apellido)

/*
2.- ver el tipo de dato (typeof)
*/
console.log("la variable nombre es un tipo de dato: " + typeof nombre);

// template literals (forma moderna para concatenar) ``
console.log(`hola, mi nombre es ${nombre} ${apellido}`);




//creearuna variable y conta sus caracteres.
let frase = "tungtungtungsahur";
console.log(`la frase "${frase}" tiene ${frase.length} caracteres.`)


//metodos comunes en JS para formateartexto
//transformar texto en mayusculas
let texto1 = "JAVasCriPT Es LO mejor";
console.log(texto1.toUpperCase());
//transformar texto a minusculas
console.log(texto1.toLocaleLowerCase());

//buscar un texto dentro de un string
let texto2 = "leche, azucar, peras, huevos, harina"
console.log(texto2.includes("huevos"));