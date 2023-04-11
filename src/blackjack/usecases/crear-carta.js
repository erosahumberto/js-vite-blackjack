/**
 * Se crea la carta
 * @param {String} carta Carta pedida
 * @param {Number} turno Que jugador pertence el turno
 */
export const crearCarta = ( carta, turno, divCartasJugadores ) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    imgCarta.alt = carta;
    divCartasJugadores[turno].append(imgCarta);
}