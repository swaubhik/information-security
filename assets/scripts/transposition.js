let input = "kon motherchod humra maal ko phaswala";
let encodedStr = "";
let key = 52314;
function encode(str) {
  let finalStr = "";
  let manipulationArr = [];
  let lineArr = [];
  let keyStr = key.toString();

  let currStr = keyStr + str.replace(/\s/g, " ");
  let totalLines = Math.round(currStr.length / keyStr.length);

  for (let i = 1; i <= currStr.length; i++) {
    lineArr.push(currStr[i - 1]);
    if (i % keyStr.length === 0 && i > 0) {
      manipulationArr.push(lineArr);
      lineArr = [];
    }
  }

  if (manipulationArr.length - 1 < totalLines) manipulationArr.push(lineArr);

  let aux = "";
  for (let i = 0; i < manipulationArr.length; i++) {
    for (let j = 0; j < manipulationArr[0].length - 1; j++) {
      if (manipulationArr[0][j + 1] < manipulationArr[0][j]) {
        for (let h = 0; h < manipulationArr.length; h++) {
          aux = manipulationArr[h][j];
          manipulationArr[h][j] = manipulationArr[h][j + 1];
          manipulationArr[h][j + 1] = aux;
        }
      }
    }
  }

  manipulationArr.shift(manipulationArr[0]);

  aux = 0;
  for (let line of manipulationArr) {
    if (typeof manipulationArr[0][0] == "undefined") return "";
    for (let char of line) {
      if (!char) char = " ";
      finalStr += char;
    }
    aux++;
  }

  return finalStr;
}

function decode(str) {
  let finalStr = "";
  let currStr = str.replace(/;/g, " ");
  let manipulationArr = [];
  let keyStr = key.toString();

  let totalLines = Math.round(currStr.length / keyStr.length);

  for (let i = 0; i < totalLines; i++) manipulationArr.push([]);

  if (manipulationArr.length * keyStr.length < currStr.length) manipulationArr.push([]);

  let aux = 0;
  let index = 0;
  for (let char of currStr) {
    manipulationArr[index][aux] = char;
    if (aux < key.toString().length - 1) aux++;
    else {
      index++;
      aux = 0;
    }
  }

  for (let line of manipulationArr) {
    for (let i = 0; i < keyStr.length; i++) {
      finalStr += line[keyStr[i] - 1];
    }
  }

  return finalStr.replace(/~/g, "").replace(/undefined/g, "");
}

console.log(encode(input));
console.log(decode(encode(input)));
