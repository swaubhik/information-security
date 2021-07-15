//* Playfair Encryption Algorithm
function playfairEncrypt(plainText, keyPhrase) {
    plainText = sanitize(plainText);
    const keyTable = generateKeyTable(keyPhrase);
    const charPos = getCharPositions(keyTable);

    var cipherText = [];

    for (let i = 0; i < plainText.length; i = i + 2) {
        // Repeating letters or odd letters are filled with filler letter,
        // 'X' or 'Z' is used as filler letter
        if (plainText[i] == plainText[i + 1] || i == plainText.length - 1) {
            if (plainText[i] == "X") {
                plainText.splice(i + 1, 0, "Z");
            }
            else {
                plainText.splice(i + 1, 0, "X");
            }
        }

        // Two plaintext letter that fall in the same row of the matrix are each replaced by the
        // letter to the right, with the  first element of the row cirularly following the last
        if (charPos[plainText[i]].row == charPos[plainText[i + 1]].row) {
            const x1 = charPos[plainText[i]].row;
            const y1 = (charPos[plainText[i]].col + 1) % 5;
            const x2 = x1;
            const y2 = (charPos[plainText[i + 1]].col + 1) % 5;

            cipherText[i] = keyTable[x1][y1];
            cipherText[i + 1] = keyTable[x2][y2];
        }

        // Two plaintext letter that fall in the same column are each replaced by the letter beneath, with the 
        // top element of the column circularly following the last
        else if (charPos[plainText[i]].col == charPos[plainText[i + 1]].col) {
            const x1 = (charPos[plainText[i]].row + 1) % 5;
            const y1 = charPos[plainText[i]].col;
            const x2 = (charPos[plainText[i + 1]].row + 1) % 5;
            const y2 = y1;

            cipherText[i] = keyTable[x1][y1];
            cipherText[i + 1] = keyTable[x2][y2];
        }

        // Otherwise, each plaintext letter in a pair is replaced by the letter that lies in its own
        // row and the letter that lies in its own row and the column occupied by the other plaintext letter
        else {
            const x1 = charPos[plainText[i]].row;
            const y1 = charPos[plainText[i + 1]].col;
            const x2 = charPos[plainText[i + 1]].row;
            const y2 = charPos[plainText[i]].col;

            cipherText[i] = keyTable[x1][y1];
            cipherText[i + 1] = keyTable[x2][y2];
        }
    }

    return cipherText.join("");
}

function playfairDecrypt(cipherText, keyPhrase) {
    cipherText = sanitize(cipherText);
    const keyTable = generateKeyTable(keyPhrase);
    const charPos = getCharPositions(keyTable);

    var plainText = [];

    // If cipherText has odd number of letters then remove the last letter
    if (cipherText.length % 2 != 0) {
        cipherText.pop();
    }

    for (let i = 0; i < cipherText.length; i = i + 2) {
        // Two plaintext letter that fall in the same row of the matrix are each replaced by the
        // letter to the left, with the  last element of the row cirularly following the first
        if (charPos[cipherText[i]].row == charPos[cipherText[i + 1]].row) {
            const x1 = charPos[cipherText[i]].row;
            const y1 = charPos[cipherText[i]].col ? charPos[cipherText[i]].col - 1 : 4;
            const x2 = x1;
            const y2 = charPos[cipherText[i + 1]].col ? charPos[cipherText[i + 1]].col - 1 : 4;
            plainText[i] = keyTable[x1][y1];
            plainText[i + 1] = keyTable[x2][y2];
        }

        // Two plaintext letter that fall in the same column are each replaced by the letter upward, with the 
        // last element of the column circularly following the first
        else if (charPos[cipherText[i]].col == charPos[cipherText[i + 1]].col) {
            const x1 = charPos[cipherText[i]].row ? charPos[cipherText[i]].row - 1 : 4;
            const y1 = charPos[cipherText[i]].col;
            const x2 = charPos[cipherText[i + 1]].row
                ? charPos[cipherText[i + 1]].row - 1
                : 4;
            const y2 = y1;
            plainText[i] = keyTable[x1][y1];
            plainText[i + 1] = keyTable[x2][y2];
        }

        // If the letters are not on the same row or column, replace them with the letters on the 
        // same row respectively but at the other pair of corners of the rectangle defined by the original pair.
        else {
            const x1 = charPos[cipherText[i]].row;
            const y1 = charPos[cipherText[i + 1]].col;
            const x2 = charPos[cipherText[i + 1]].row;
            const y2 = charPos[cipherText[i]].col;

            plainText[i] = keyTable[x1][y1];
            plainText[i + 1] = keyTable[x2][y2];
        }
    }
    return plainText.join("");
}


function generateKeyTable(keyPhrase) {
    keyPhrase = sanitize(keyPhrase);
    let uniqueLetters = new Set(keyPhrase);
    for (let i = 0; i < 26; i++) {
        uniqueLetters.add(String.fromCharCode(65 + i));
    }
    uniqueLetters.delete("J");
    uniqueLetters = Array.from(uniqueLetters);

    let keyTable = [];
    while (uniqueLetters.length) {
        keyTable.push(uniqueLetters.splice(0, 5));
    }
    return keyTable;
}

function getCharPositions(keyTable) {
    let positions = [];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            positions[keyTable[i][j]] = { row: i, col: j };
        }
    }
    return positions;
}


function sanitize(input) {
    return input
        .toUpperCase()
        .replace(/[^A-Z]/g, "")
        .replace("J", "I");
}

let input = "kon motherchod humra";
let key = "chutiya";
let output = playfairEncrypt(input, key);
console.log(output);
console.log(playfairDecrypt(output, key));







