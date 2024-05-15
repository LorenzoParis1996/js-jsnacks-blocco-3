let quantityNumbers = Number.parseInt(prompt('quanti elementi desideri?'), 10);

let emptyArray = [];

if (Number.isNaN(quantityNumbers) || quantityNumbers > 40 || quantityNumbers < 5) {
    quantityNumbers = 10;
}

for (let i = 0; i < quantityNumbers; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    emptyArray.push(randomNumber);
}

console.log(emptyArray.slice(-5));