import {valorCarta} from './index';
/**
 * Devuelve el valor de la carta
 * @param {Array<string>} carta VAlor de la carta
 * @param {Array<string>} turno turno del jugador
 * @param {Number} puntosJugadores puntos de los jugadores
 * @param {Number} puntosHTML puntos a agregar en el documentohtml
 * @returns {Array<Number>} Devuelve los puntos de los jugadores
 */
export const acumularPuntos = ( carta, turno, puntosJugadores, puntosHTML ) =>{
    puntosJugadores[turno]= puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}