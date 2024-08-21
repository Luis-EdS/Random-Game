let listaNumSorteados = [];
let juegosMaximo = 10;
let randomNumber = random();

console.log(randomNumber);


let intentos = 1;

function random() {
    let numberDrawn = Math.floor((Math.random()*juegosMaximo)+1);
    if(listaNumSorteados.length==juegosMaximo){
        asignarTexto(`p`,`Ya Jugaste mucho, botate a la verga`);
        document.getElementById(`Intentar`).disabled=true;
    } else{
        if(listaNumSorteados.includes(numberDrawn)){
            return random();
        }else{
            listaNumSorteados.push(numberDrawn);
            return numberDrawn;
        }
    }

}

function asignarTexto(elemento,texto){
    let objeto = document.querySelector(elemento);
    objeto.innerHTML = texto;    
}

function cleanbox() {
    document.getElementById(`numbers`).value = ``;
}

function attempts() {
    let x = document.getElementById(`numbers`).value;
    console.log(x);
    if (x==randomNumber){
        document.getElementById(`reiniciar`).disabled=false;
        asignarTexto(`p`,`Felicidades por ganar pinche estupido, primera vez que ganas algo en la vida :D, si quieres jugar otra vez ya puedes, por cierto te tomo ${intentos} ${(intentos===1) ? `intento` : `intentos`}`);
    } else if (x<=randomNumber){
        cleanbox();
        asignarTexto(`p`,`No mames estas bien wey, ese no era el numero, intenta mas arriba`);
    }else{
        cleanbox();
        asignarTexto(`p`,`Ahv eres un pendejo, intenta con un numero mas abajo`)
    }
    intentos++;
        return;
}


/*  FORMA DE REINICIAR EL JUEGO NO.1
function refresh() {
    location.reload();
}
*/

function refresh2() {
    cleanbox();
    asignarTexto(`p`,`Enter a number from 1 to 10`);
    randomNumber=random();
    document.getElementById(`reiniciar`).disabled = true;
    intentos=1;
    console.log(randomNumber);
    console.log(listaNumSorteados);
}

asignarTexto(`h1`,`Random numbers Game`);
asignarTexto(`p`,`Enter a number from 1 to ${juegosMaximo}`);
