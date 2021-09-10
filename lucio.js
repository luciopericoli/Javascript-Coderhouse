let hablar="Hola lucio"
console.log(hablar) 
alert (hablar)

let entrada = prompt("Ingrese su equipo");
let salida = entrada + " " + "gano";
alert(salida);
console.log(salida);

let numeroA = 10;
let numeroB = 33;
let numeroC = 50;

let resultadoSuma = numeroA + numeroC;
let resultadoResta = numeroB + numeroA;
console.log(resultadoSuma);

let nombreApellido = prompt ("Ingrese su nombre y apellido");

if (nombreApellido == ""){
    alert("Ingrese nuevamente los datos requeridos");
}
else {
    alert ("Nombre y apellido: " + nombreApellido);
}

let nombreYApellido = prompt ("Ingrese su nombre y apellido");
if ((nombreYApellido !="") && ((nombreYApellido == "Lucio Pericoli") || (nombreYApellido == "lucio pericoli"))){
    alert ("Hola Lucio Pericoli");
} else {
    alert("Error: Ingrese sus datos nuevamente")
}