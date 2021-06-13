//* Encrypts plaintext with key using Hill Cipher
function hillCipherEncrypt(key, text) {
    let cipherText = "";
    let n = 3;
    let k = genrateKeyMatrix(key, n);
    let det = determinantOfMatrix(k, n);
    if (det == 0) {
        console.log("determininat of matrix doesnot exist");
        return false;
    }
    let counter = 0;
    while (counter < text.length) {
        plainText = genrateTextMatrix(text, n, counter);
        counter += 3;
        let returnText = multiplyMatrices(k, plainText, n, n, n, 1);
        matrixModulus(returnText, 26, n, 1);
        let partialText = genrateText(returnText, n);
        cipherText += partialText;
    }
    return cipherText;
}

//* Decrypts ciphertext with key using Hill Cipher 
function hillCipherDecrypt(key, text) {
    let plainText = "";
    let n = 3;
    let k = genrateKeyMatrix(key, n);
    let detDecrypt = determinantOfMatrix(k, n);
    if (detDecrypt == 0) {
        console.log("determininat of matrix doesnot exist");
        return false;
    }
    detDecrypt = modulo(detDecrypt, 26);
    let detInverse = multInverse(detDecrypt, 26);
    let inverseKey = adJointMatrix(k, n);
    matrixModulus(inverseKey, 26, n, n);
    scalarMatrixMultiplication(inverseKey, detInverse, n);
    matrixModulus(inverseKey, 26, n, n);
    let counter = 0;
    while (counter < text.length) {
        cipherText = genrateTextMatrix(text, n, counter);
        counter += 3;
        let returnText = multiplyMatrices(inverseKey, cipherText, n, n, n, 1);
        matrixModulus(returnText, 26, n, 1);
        let partialText = genrateText(returnText, n);
        plainText += partialText;
    }
    return plainText;
}

//* Returns Key Matrix for Hill Cipher
function genrateKeyMatrix(k, n) {
    let counter = 0;
    let key = new Array(n);
    for (let i = 0; i < n; i++) {
        key[i] = new Array(n);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let character = k[counter];
            if (character == character.toUpperCase()) {
                key[i][j] = character.charCodeAt(0) - 65;
            }
            else if (character != character.toUpperCase()) {
                key[i][j] = character.charCodeAt(0) - 97;
            }
            counter++;
        }
    }
    return key;
}

//* Returns Text Matrix for Hill Cipher
function genrateTextMatrix(text, n, counter) {
    let plainText = new Array(n);
    for (let i = 0; i < n; i++) {
        plainText[i] = new Array(1);
    }
    for (let i = 0; i < n; i++) {
        let character = text[counter];
        if (counter >= text.length)
        {
            plainText[i][0] = 0;
        }
        else if (character == character.toUpperCase()) {
            plainText[i][0] = character.charCodeAt(0) - 65;
        }
        else if (character != character.toUpperCase()) {
            plainText[i][0] = character.charCodeAt(0) - 97;
        }
        counter++;
    }
    return plainText;
}

//* Returns Text from Text Matrix
function genrateText(textMatrix, n) {
    let partialText = "";
    for (let i = 0; i < n; i++) {
        let char = String.fromCharCode(textMatrix[i][0] + 65);
        partialText += char;
    }
    return partialText;
}


// let txt = "swaubhik";
// let txt2 = "MIETFJMUU";
// let key = "debojeeet"; 
// // console.log(hillCipherEncrypt(key, txt));
// console.log(hillCipherDecrypt(key, txt2));

// let ans = "SWAUBHIKA";



