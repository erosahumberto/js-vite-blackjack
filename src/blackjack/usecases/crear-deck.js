/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} deck 
 * @param {Array<string>} tiposDeCarta Ejemplo ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales Ejemplo ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */

export const crearDeck = (deck, tiposDeCarta, tiposEspeciales ) => {

    if( !tiposDeCarta) throw new Error('TiposDeCarta es obligatorio');

    deck= [];
    for( let i=2; i<=10; i++){
        for(let tipo of tiposDeCarta){
            deck.push( i + tipo );
        }
    }
    for(let tipo of tiposDeCarta){
        for(let esp of tiposEspeciales){
            deck.push( esp + tipo );
        }
    }
    function shuffle(array) {
        return [...array].sort(() => Math.random() - 0.5);
    }
    return shuffle(deck);
} 