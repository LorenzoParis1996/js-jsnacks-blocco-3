const frigorifero = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
const pesca = frigorifero.push('pesca');

let found = false;

for (let index = 0; index < frigorifero.length; index++) {
    if (frigorifero[index] === 'cocomero') {
        found = true
    }
}

if (found) {
    console.log('Trovato! Devo solo preparare il cocktail.');
} else {
    console.log('Oh no, devo uscire a comprare il cocomero!');
}