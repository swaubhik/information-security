//To get index of the encryption or decryption algotithm
function getEncryptIndex(){
    let index = document.getElementById("encyrptChoice").selectedIndex;
    return index;
}
function getDecryptIndex(){
    let index = document.getElementById("decryptChoice").selectedIndex;
    return index;
}

//To reset form elements
function resetForm1(){
    document.getElementById("form1").reset();
}
function resetForm2(){
    document.getElementById("form2").reset();
}

//To get text from input cell
function getEncryptInput(){
    let text = document.getElementById("encryptPlainText").value;
    return text;
}
function getDecryptInput(){
    let text = document.getElementById("decryptCipherText").value;
    return text;
}


//To get key value
function getEncryptKey(){
    let key = document.getElementById("encryptKey").value;
    return key;
}
function getDecryptKey(){
    let key = document.getElementById("decryptKey").value;
    return key;
}


//To write text to output cell
function setEncryptOutput(output){
    document.getElementById("encryptCipherText").value = output;
}
function setDecryptOutput(output){
    document.getElementById("decryptPlainText").value = output;
}


//ENCRYPT FUNCTION
function encrypt(){
    let text = getEncryptInput();
    let choice = getEncryptIndex();
    

    if(choice == 0)
    {
        let key = parseInt(getEncryptKey());
        if (isNaN(key) || key < 1 || key > 25) {
            alert("The Key Value should be 1 - 25");
            return false;
        }
        let cipherText = caeserCipherEncrypt(text, key);
        setEncryptOutput(cipherText);
    }
}

//DECRYPT FUNCTION
function decrypt(){
    let text = getDecryptInput();
    let choice = getDecryptIndex();
    

    if(choice == 0)
    {
        let key = parseInt(getDecryptKey());
        if (isNaN(key) || key < 1 || key > 25) {
            alert("The Key Value should be 1 - 25");
            return false;
        }
        let plainText = caeserCipherDecrypt(text, key);
        setDecryptOutput(plainText);
    }
}

//Ceaser Cipher Algorithm
function caeserCipherEncrypt(text, shift){
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


function caeserCipherDecrypt(text, shift){
    //Plain Text
    let plainText = "";
    shift = 26 - shift
    for(let i = 0; i < text.length; i++)
    {
        let character = text[i];
        if(character == " ")
        {
            plainText += String.fromCharCode(character.charCodeAt(0));
        }
        else if(character == character.toUpperCase())
        {
            let char = String.fromCharCode(((character.charCodeAt(0) + shift - 65) % 26) + 65);
            plainText += char;
        }
        else if(character != character.toUpperCase())
        {
            let char = String.fromCharCode(((character.charCodeAt(0) + shift - 97) % 26) + 97);
            plainText += char;
        }
        else
        {
            plainText += character;
        }
        
    }
    return plainText;
}
    
