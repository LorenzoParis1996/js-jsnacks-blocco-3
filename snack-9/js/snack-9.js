let emptyArray = [];


while (emptyArray.length < 6) {
    let number = Number.parseInt(prompt('type a number'), 10);
    if (Number.isNaN(number) !== true && number % 2 === 1) {
        emptyArray.push(number);
    }

}

console.log(emptyArray);