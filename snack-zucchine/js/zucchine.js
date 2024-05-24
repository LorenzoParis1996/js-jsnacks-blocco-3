const zucchine = [
    {
        varieta: 'uno',
        peso: 3,
        lunghezza: 12
    },
    {
        varieta: 'due',
        peso: 2,
        lunghezza: 14
    },
    {
        varieta: 'tre',
        peso: 1,
        lunghezza: 5
    },
    {
        varieta: 'quattro',
        peso: 5,
        lunghezza: 3
    },
    {
        varieta: 'cinque',
        peso: 3,
        lunghezza: 10
    },
    {
        varieta: 'sei',
        peso: 8,
        lunghezza: 8
    },
    {
        varieta: 'sette',
        peso: 10,
        lunghezza: 16
    },
    {
        varieta: 'otto',
        peso: 7,
        lunghezza: 13
    },
    {
        varieta: 'nove',
        peso: 4,
        lunghezza: 3
    },
    {
        varieta: 'dieci',
        peso: 9,
        lunghezza: 7
    }
];

let sum = 0;

zucchine.forEach(element => {
    sum += element.peso
});

console.log(sum);

const zucLunghe = [];
const zucCorte = [];

for (let index = 0; index < zucchine.length; index++) {
    const element = zucchine[index];
    if (element.lunghezza < 8) {
        zucCorte.push(element)
    } else if (element.lunghezza > 8) {
        zucLunghe.push(element)
    }
}

console.log(zucCorte);
console.log(zucLunghe);
