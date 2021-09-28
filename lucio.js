class Jugador {
    constructor(nombre, club, precioTransferencia) {
        this.nombre  = nombre.toUpperCase();
        this.club = club.toLowerCase();
        this.precioTransferencia  = parseFloat(precioTransferencia);
        this.vendido = false;
    }
    comisionClub() {
        this.precioTransferencia = this.precioTransferencia * 1.30;
    }
    vender() {
        this.vendido = true;
    }
}
const pratto = new Jugador("Lucas Pratto", "River", "3000000 ");
const botta = new Jugador("Ruben Botta", "San Lorenzo","1500000 ");
const luna = new Jugador ("Chino Luna", "Tigre", "900000 ");

pratto.comisionClub();
pratto.vender();
botta.comisionClub();
botta.vender();
luna.comisionClub();

console.log(pratto);
console.log(botta);
console.log(luna);






function prattoBoton(){
    alert("El primer jugador es " + pratto.nombre +". El club es " +  pratto.club + ". Valor de transferencia $" + pratto.precioTransferencia);
}

function bottaBoton(){
    alert("El primer jugador es " + botta.nombre +". El club es " +  botta.club + ". Valor de transferencia $" + botta.precioTransferencia);
}

function lunaBoton(){
    alert("El primer jugador es " + luna.nombre +". El club es " +  luna.club + ". Valor de transferencia $" + luna.precioTransferencia);
}