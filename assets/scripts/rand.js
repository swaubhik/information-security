function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandom(n, min, max) {
    for (let i = 0; i < n; i++) {
        console.log(getRndInteger(min, max));
    }
}

generateRandom(10, 0, 10);