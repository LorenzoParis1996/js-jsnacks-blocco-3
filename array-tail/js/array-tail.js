const quantityNumbers = Number.parseInt(prompt('quanti elementi desideri?'));

let randomNumbers = [];

randomNumbers = [Math.floor(Math.random() * 100) + 1];

for (i = 0; i < quantityNumbers; i++) {

    console.log(quantityNumbers, randomNumbers);
};