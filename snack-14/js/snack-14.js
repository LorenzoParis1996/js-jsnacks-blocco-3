let waitingTime = Number.parseInt(prompt('quanto vuoi aspettare?'), 10);

const timer = setInterval(function () {
    waitingTime--;
    console.log(waitingTime);
    if (waitingTime <= 0) {
        clearInterval(timer);
        console.log('tempo scaduto');
    }
}, 1000);

