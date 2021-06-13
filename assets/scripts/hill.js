//* Encrypts plaintext with key using Hill Cipher
function hillCipherEncrypt(key, plainText) {
    let n = 3;
    let k = genrateKeyMatrix(key, n);
    let det = determinantOfMatrix(k, n);
    if (det == 0) {
        console.log("determininat of matrix doesnot exist");
        return false;
    }
    let cipherText = multiplyMatrices(k, plainText, n, n, n, 1);
    matrixModulus(cipherText, 26, n, 1);
    return cipherText;

}

//* Decrypts ciphertext with key using Hill Cipher 
function hillCipherDecrypt(key, cipherText) {
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
    let plainText = multiplyMatrices(inverseKey, cipherText, n, n, n, 1);
    matrixModulus(plainText, 26, n, 1);
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