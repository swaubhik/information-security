/* <script src='https://cdnjs.cloudflare.com/ajax/libs/bignumber.js/4.0.0/bignumber.min.js'></script>? */
// Using ES for loading library
const BigNumber = require('bignumber.js');

function generateKey() {
    // 1. Choose to distinct prime numbers p and q 
    // They are kept secret
    var p = getPrimeIn(11, 61);
    var q = getPrimeIn(11, 61);

    // 2. Compute n = p * q
    var n = p * q;

    // 3. Find euler's totient function of n also known as carmichael function
    // It says the no. of k where 1 <= k <= n and k is relativel prime to n i.e gcd(k, n) = 1
    // For prime numbers λ(p) = p - 1
    var etf = (p - 1) * (q - 1);

    // 4. Choose an integer 'e' such that 1 < e < λ(n) and gcd(e, λ(n)) = 1 i.e they are co-prime
    var e = getPrimeIn(3, etf);

    // 5. Determine 'd' such that d ≡ e^−1 (mod λ(n))
    var d = calcD(e, etf);

    //Public Key is (e, n)
    //Private Key is (d, n)
    return {
        e,
        d,
        n
    };
}


function rsaEncrypt(input, e, n) {
    // Gets all key values but will use only public key for encryption
    // Convert to BigNumber for the library
    // var m = new BigNumber(input);
    var m = input;

    // Encryption using { m^{e} equiv c{ mod {n}}}
    var c = m.toPower(e);
    c = c.modulo(n);
    return c;
}

function rsaDecrypt(input, d, n) {
    //Gets all key values but will use only private key for decryption
    // Convert to BigNumber for the library
    // var c = new BigNumber(input);
    var c = input;

    // Decryption using { c^{d} equiv (m^{e})^{d} equiv m{ mod {n}}}
    var m = c.toPower(d);
    m = m.modulo(n);
    return m;
}

// To check if a number is a prime (primality testing)
function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

// To generate random prime integers
function getPrimeIn(min, max) {
    var arr = [min];
    for (var i = min + 2; i <= max; i += 2) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    var t = Math.round(Math.random() * (arr.length - 1));
    return arr[t];
}

// To calculate the d value of the private key
function calcD(e, phin) {
    for (var d = 1; d < phin; d++) {
        var temp = new BigNumber(e).times(d);
        temp = temp.modulo(phin);
        if (temp == 1) {
            return d;
        }
    }
}



var { e, d, n } = generateKey();
let plainText = 65;
console.log(e);
console.log(d);
console.log(n);
let cipherText = rsaEncrypt(plainText, e, n);
console.log(cipherText);
console.log(rsaDecrypt(cipherText, d, n));

