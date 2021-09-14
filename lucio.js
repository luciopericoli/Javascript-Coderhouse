let entrada = prompt("Ingrese su equipo");

while(entrada != "ESC" ){
   switch (entrada) {
       case "Tigre":
            alert("Campeon 2019");
            break;
        case "Rosario central":
            alert("Campeon 1986/87");
            break;
        case "Racing":
            alert("?")
       default:
           alert("Saliste campeon?")
           break;
   }
   entrada = prompt("Ingresar su equipo");
}
