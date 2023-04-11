import {pedirCarta, crearCarta, acumularPuntos, determinarGanador } from './index';
/**
 * Turno de la computadora
 * @param {Array<string>} deck Es un arreglo de String
 * @param {Number} puntosMinimos Numero minimo de puntos
 * @param {Number} puntosJugadores Numero de los puntos de los jugadores
 * @param {Number} puntosHTML Numeros
 * @param {Array<string>} divCartasJugadores String del objeto
 */
export  const turnoComputadora = ( deck, puntosMinimos, puntosJugadores, puntosHTML, divCartasJugadores) => {
    let puntosComputadora =0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores );
    } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21 ) );

    determinarGanador(puntosJugadores);
}