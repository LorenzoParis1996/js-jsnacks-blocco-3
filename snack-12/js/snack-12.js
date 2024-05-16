
function lunghezzaParola(lunghezzaUno, lunghezzaDue) {

    let risultatoUno = lunghezzaUno.length === lunghezzaDue.length;
    let risultatoDue = lunghezzaUno.length !== lunghezzaDue.length;

    if (risultatoUno) {
        return lunghezzaUno && lunghezzaDue;
    } else if (risultatoDue) {
        return lunghezzaUno < lunghezzaDue || lunghezzaDue < lunghezzaDue;
    }
}

risultatoUno = lunghezzaParola('ciao', 'hola');
risultatoDue = lunghezzaParola('tizio', 'caio');


