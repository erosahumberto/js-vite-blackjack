/**
 * Esta funcion me permite tomar una carta
 * @param {Array<string>} deck es un areglo de string
 * @returns {String} retorna la carta sacada del deck
 */

export const pedirCarta = (deck) => {
    if(!deck || deck.length === 0){
        throw new Error ('No hay cartas en el deck');
    }
    return deck.pop();
}