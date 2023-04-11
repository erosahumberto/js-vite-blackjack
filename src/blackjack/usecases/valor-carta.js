/**
 * Regresa el valor de la carta pedida
 * @param {String} carta Ejemplo ['1C', '2D', '3H', '4S']
 * @returns {Number} Regresa el valor de la carta pedida
 */
export const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length -1);
    return ( isNaN(valor)) ?
            ( valor === 'A') ? 11: 10
            : valor * 1; 
}