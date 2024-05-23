const listaAuto = [
    {
        marca: 'fiat',
        modello: '500',
        alimentazione: 'metano'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'benzina'
    },
    {
        marca: 'fiat',
        modello: 'abarth',
        alimentazione: 'diesel'
    },
    {
        marca: 'fiat',
        modello: 'family',
        alimentazione: 'gpl'
    },
    {
        marca: 'fiat',
        modello: 'electro',
        alimentazione: 'elettrico'
    },
    {
        marca: 'ford',
        modello: 'fiesta',
        alimentazione: 'diesel'
    },
    {
        marca: 'ford',
        modello: 'focus',
        alimentazione: 'benzina'
    },
    {
        marca: 'ford',
        modello: 'kuga',
        alimentazione: 'metano'
    },
    {
        marca: 'ford',
        modello: 'puma',
        alimentazione: 'gpl'
    },
    {
        marca: 'ford',
        modello: 'ecosport',
        alimentazione: 'elettrico'
    },
    {
        marca: 'seat',
        modello: 'ibiza',
        alimentazione: 'diesel'
    },
    {
        marca: 'seat',
        modello: 'leon',
        alimentazione: 'benzina'
    },
    {
        marca: 'seat',
        modello: 'arona',
        alimentazione: 'metano'
    },
    {
        marca: 'seat',
        modello: 'tarraco',
        alimentazione: 'gpl'
    },
    {
        marca: 'seat',
        modello: 'eco',
        alimentazione: 'elettrico'
    }

];

console.log(listaAuto);


const alBenzina = listaAuto.filter((benza) => {
    if (benza.alimentazione === 'benzina') {
        return true
    }

});

console.log(alBenzina);