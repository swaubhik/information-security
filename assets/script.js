
function ceaserCipherEncrypt(text, shift){
    //Cipher Text
    let cipherText = "";
    for(let i = 0; i < text.length; i++)
    {
        let character = text[i];
        if(character == " ")
        {
            cipherText += String.fromCharCode(character.charCodeAt(0));
        }
        else if(character == character.toUpperCase())
        {
            //Converting index to 0 then applying mod 26
            let char = String.fromCharCode(((character.charCodeAt(0) + shift - 65) % 26) + 65);
            cipherText += char;
        }
        else if(character != character.toUpperCase())
        {
            let char = String.fromCharCode(((character.charCodeAt(0) + shift - 97) % 26) + 97);
            cipherText += char;
        }
        else
        {
            cipherText += character;
        }
    }
    return cipherText;
}


function ceaserCipherDecrypt(text, shift){
    //Plain Text
    let plainText = "";
    for(let i = 0; i < text.length; i++)
    {
        let character = text[i];
        if(character == " ")
        {
            plainText += String.fromCharCode(character.charCodeAt(0));
        }
        else if(character == character.toUpperCase())
        {
            let char = String.fromCharCode(((character.charCodeAt(0) - shift - 65) % 26) + 65);
            plainText += char;
        }
        else if(character != character.toUpperCase())
        {
            let char = String.fromCharCode(((character.charCodeAt(0) - shift - 97) % 26) + 97);
            plainText += char;
        }
        else
        {
            plainText += character;
        }
        
    }
    return plainText;
}

let text = "EXXEGO EXSRGI";
let shift = 4;
let result = ceaserCipherDecrypt(text, shift);
console.log("Text  : " + text);
console.log("Shift : " + shift);
console.log("Cipher: " + result);
    
