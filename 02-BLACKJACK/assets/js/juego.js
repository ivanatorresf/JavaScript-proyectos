 /*2H = Two of Hearts
*2 Two of Spades
*
*
*
*
*/
let deck         =  [];
const tipos      =  ['C','D','H','S'];
const especiales =  ['A','J','Q','K'];

let puntosJugador     = 0,
    puntosComputadora = 0;
//Referencia del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');


const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');



const crearDeck = () =>{
    
    for(let i =2; i <= 10; i++){
       for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }
    for(let tipo of tipos){
        for(let esp of especiales){
             deck.push(esp + tipo);
         }
     }
    //console.log(deck);
    deck = _.shuffle(deck);
    //console.log(deck);
    return deck;
}
crearDeck();
//esta funcion me permite crear una carta
const pedirCarta = () => {
    if(deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    // console.log(deck);
    // console.log(carta);
    return carta;
} 
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;
  
}
const turnoComputadora = (puntosMinimos) => {

      do{
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        // <!--<img class="carta" src="assets/cartas/10C.png"> --> 
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if(puntosMinimos > 21){
            break;
        }

     }while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
         
        setTimeout(()=>{

        

        if(puntosComputadora === puntosMinimos) {
            alert ('Nadie gana :(');
        }else if(puntosMinimos > 21){
            alert ('Computadora Gana')
        }else if(puntosComputadora > 21){
            alert('Jugador Gana');
        }else {
            alert('Computadora Gana')
        }
    },10);
       
}



//EVENTOS
btnPedir.addEventListener('click', () =>{

const carta = pedirCarta();

puntosJugador = puntosJugador + valorCarta(carta);
puntosHTML[0].innerText = puntosJugador;

// <!--<img class="carta" src="assets/cartas/10C.png"> --> 
const imgCarta = document.createElement('img');
imgCarta.src = `assets/cartas/${carta}.png`;
imgCarta.classList.add('carta');
divCartasJugador.append(imgCarta);

if(puntosJugador > 21){
    console.warn('Perdiste por wey jaja!');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);

}else if (puntosJugador === 21){
    console.warn('eres mi chingon :P');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
}

});
btnDetener.addEventListener('click', ()=>{
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugador);

})
btnNuevo.addEventListener('click', () =>{
    console.clear();
    deck = [];
    deck = crearDeck();

    puntosJugador =0;
    puntosComputadora =0;
    puntosHTML[0].innerText =0;
    puntosHTML[1].innerText =0;

    divCartasComputadora.innerHTML ='';
    divCartasJugador.innerHTML ='';
    btnPedir.disabled = false;
    btnDetener.disabled = false;

});