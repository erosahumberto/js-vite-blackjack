import {crearDeck, pedirCarta, crearCarta, acumularPuntos, turnoComputadora } from './usecases/index';

(() =>{
  'use strict'

  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'], 
        especiales = ['A', 'J', 'Q', 'K'];
  let puntosJugadores = [];

  //Referencias del HTML
  const btnNuevo = document.querySelector('#btnNuevo'),
        btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener');

  const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');
        

  //ESta funcion inicializa el juego
  const inicializarJuego = ( numeroJugadores = 2 ) => {
      deck = crearDeck(deck, tipos, especiales);

      puntosJugadores = [];
      for (let i = 0; i < numeroJugadores; i++) {
          puntosJugadores.push(0);       
      }
      puntosHTML.forEach( elem => elem.innerText = 0 );
      divCartasJugadores.forEach( elem => elem.innerHTML = '' );

      btnPedir.disabled = false;
      btnDetener.disabled = false;
  }
  
  //Eventos
  btnPedir.addEventListener('click', () => {
      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

      crearCarta(carta, 0 , divCartasJugadores );        

      if(puntosJugador > 21){
          console.warn('Lo siento mucho, perdiste');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora( deck, puntosJugador, puntosJugadores, puntosHTML, divCartasJugadores );
      }else if (puntosJugador === 21 ){
          console.warn('Genial, ganaste');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora( deck, puntosJugador, puntosJugadores, puntosHTML, divCartasJugadores );
      }
  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora( deck, puntosJugadores[0], puntosJugadores, puntosHTML, divCartasJugadores );
  });

  btnNuevo.addEventListener('click', () => {
      inicializarJuego();
  });

  return {
      nuevoJuego: inicializarJuego
  };

})();
