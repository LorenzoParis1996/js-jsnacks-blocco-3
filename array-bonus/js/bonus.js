let shortArray = [1, 2, 3, 4];
let longArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

while (shortArray.length < longArray.length) {
    longArray.push(shortArray());

    shortArray++
    longArray++
}

console.log(shortArray, longArray);