//To get index of the encryption or decryption algotithm
function getIndex(selection){
    let index = document.getElementById(selection).selectedIndex;
    return index;
  }

//To reset form elements
function resetForm(form){
    document.getElementById(form).reset();
}

//To get text from input cell
function getInput(elementID){
    let text = document.getElementById(elementID).value;
    return text;
}

//To write text to output cell
function setOutput(elementID, output){
    document.getElementById(elementID).value = output;
}


//ENCRYPT FUNCTION
function encrypt(){
    let inputForm = "encyptPlainText";
    let outputForm = "encryptCypherText";
    let dropDown = "encryptChoice";
    let keyForm = "encryptKey";

    let text = getInput(inputForm);
    let choice = getIndex(dropDown);
    

    if(choice == 0)
    {
        let key = getInput(keyForm);
        let cipherText = caeserCipherEncrypt(text, key);
        setOutput(outputForm, cipherText);
    }
}

//DECRYPT FUNCTION
function decrypt(){
    let inputForm = "";
    let outputForm = "";
    let dropDown = "";
    let keyForm = "";

    let text = getInput(inputForm);
    let choice = getIndex(dropDown);
    
    if(choice == 0)
    {
        let key = getInput(keyForm);
        let cipherText = caeserCipherDecrypt(text, key);
        setOutput(outputForm, cipherText);
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
    
