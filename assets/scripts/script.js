//To get index of the encryption or decryption algotithm
function getEncryptIndex() {
  let index = document.getElementById("encyrptChoice").selectedIndex;
  return index;
}
function getDecryptIndex() {
  let index = document.getElementById("decryptChoice").selectedIndex;
  return index;
}

//To reset form elements
function resetForm1() {
  document.getElementById("form1").reset();
}
function resetForm2() {
  document.getElementById("form2").reset();
}

//To get text from input cell
function getEncryptInput() {
  let text = document.getElementById("encryptPlainText").value;
  return text;
}
function getDecryptInput() {
  let text = document.getElementById("decryptCipherText").value;
  return text;
}

//To get key value
function getEncryptKey() {
  let key = document.getElementById("encryptKey").value;
  return key;
}
function getDecryptKey() {
  let key = document.getElementById("decryptKey").value;
  return key;
}

//To write text to output cell
function setEncryptOutput(output) {
  document.getElementById("encryptCipherText").value = output;
}
function setDecryptOutput(output) {
  document.getElementById("decryptPlainText").value = output;
}

//ENCRYPT FUNCTION
function encrypt() {
  let text = getEncryptInput();
  let choice = getEncryptIndex();

  if (choice == 0) {
    let key = parseInt(getEncryptKey());
    if (isNaN(key) || key < 1 || key > 25) {
      alert("The Key Value should be 1 - 25");
      return false;
    }
    let cipherText = caeserCipherEncrypt(text, key);
    setEncryptOutput(cipherText);
  }
  if (choice == 2) {
    let key = getEncryptKey();
    if (typeof key != "string" || key.length != 9)
    {
      alert("The Key should be string of length 9!!!");
      return false;
    }
    let cipherText = hillCipherEncrypt(key, text);
    setEncryptOutput(cipherText);
    if(text.length % 3 != 0) {
      alert("Please ignore after " + text.length.toString() + "  character!!");
      return false;
    }
  }
}

//DECRYPT FUNCTION
function decrypt() {
  let text = getDecryptInput();
  let choice = getDecryptIndex();

  if (choice == 0) {
    let key = parseInt(getDecryptKey());
    if (isNaN(key) || key < 1 || key > 25) {
      alert("The Key Value should be 1 - 25");
      return false;
    }
    let plainText = caeserCipherDecrypt(text, key);
    setDecryptOutput(plainText);
  }
  else if (choice == 2) {
    let key = getDecryptKey();
    if (typeof key != "string" || key.length != 9)
    {
      alert("The Key should be string of length 9!!!");
      return false;
    }
    let plainText = hillCipherDecrypt(key, text);
    setDecryptOutput(plainText);
  }
}
