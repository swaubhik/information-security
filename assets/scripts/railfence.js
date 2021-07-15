// Encrypts plaintext with key using Railfence Technique
function railEncrypt(ip, key) {
    var op = "";
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

function railDecrypt(ip, key) {
    var op = ""
}

var input = "meet me after class";
var key = 2;
console.log(railEncrypt(input, key));