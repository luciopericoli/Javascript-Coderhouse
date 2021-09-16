const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;

const iva   = x => x * 0.21;
let precioProducto  = 1500; 
let precioDescuento = 150;  

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento); 
console.log(nuevoPrecio);

let comidadeperro = prompt("¿Que producto quisiera agregar?")
let accesorio = 1300

alert("Su producto es","comidadeperro")

let compra = iva(suma(comidadeperro,accesorio))



while(entrada != "ESC" ) entrada = prompt("Ingresar su comida de perro");
    switch (entrada) {
        case "Vital Can balanced":
             alert("$1.500");
             break;
         case "Eukanuba cachorros":
             alert("$2.800");
             break;
         case "Royal canin mini":
             alert("$8.000")
        default:
            alert("Busque su producto")
            break;
    }
    