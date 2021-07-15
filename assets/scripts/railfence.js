// Encrypts plaintext with key using Railfence Technique
function railEncrypt(ip) {
    var op = "";
    var key = 2;
    var ip2 = ip.split(" ").join("");
    ip = ip2;
    var matrix = [];
    for (var i = 0; i < key; i++) {
        matrix.push([]);
    }
    var i = 0, j = 0, up = 0;
    while (i < ip.length) {
        if (j == (key - 1)) {
            up = 1;
        }
        else if (j == 0) {
            up = 0;
        }
        matrix[j].push(ip[i]);
        if (up == 0) {
            j++;
        }
        else {
            j--;
        }
        i++;
    }
    for (var i = 0; i < key; i++) {
        op = op + "" + matrix[i].join("");
    }
    return op;
}

function railDecrypt(ip) {
    var op = "";
    var key = 2;
    var ip2 = ip.split(" ").join("");
    ip = ip2;
    var matrix = [];
    for (var i = 0; i < key; i++) {
        matrix.push([]);
    }
    var i = 0, j = 0;
    while (i < ip.length) {
        if (i < (Math.ceil(ip.length / key))) {
            matrix[j].push(ip[i]);
        }
        else {
            matrix[j + 1].push(ip[i]);
        }
        i++;
    }
    var j = 0;
    for (let i = 0; i < (Math.ceil(ip.length / key)); i++) {
        j++;
        if (j < ip.length) {
            op = op + "" + matrix[0][i] + matrix[1][i];
            j++;
        }
        else {
            op = op + "" + matrix[0][i];
        }
    }
    return op;
}

var input = "kon motherchod humra maal ko phaswala";
var op = railEncrypt(input);
console.log(railEncrypt(input));
console.log(railDecrypt(op));