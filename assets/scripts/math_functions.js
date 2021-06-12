//Returns A % B (Supports negative number as well)
function modulo(a, b){
    if (b < 1)
    {
        console.log("The second value should be greater than 0");
        return false;
    }
    let mod = 0;
    let c = Math.floor(a / b);
    mod = a - (b * c);
    return mod;
}


//Return Multiplicative Inverse Modulo value
function multInverse(a, b){
    if (a < 0)
    {
        a = modulo(a, b);
    }
    if (b < 0){
        console.log("The second value should be greater than 0");
        return false;
    }
    var a1 = 1; var b1 = 0;
    var a2 = 0; var b2 = 1;
    var a3 = b; var b3 = a;
    let loop = true;
    while(loop)
    {
        if (b3 == 0)
        {
            loop = false;
            console.log("No inverse is available.");
            return false;
        }
        if (b3 == 1)
        {
            loop = false;
            let num = modulo(b2, b);
            return num;
        }
        let c = Math.floor(a3 / b3);
        var t1 = a1 - (b1 * c);
        var t2 = a2 - (b2 *c );
        var t3 = a3 - (b3 * c);
        a1 = b1;
        a2 = b2;
        a3 = b3;
        b1 = t1;
        b2 = t2;
        b3 = t3;
        loop = true;
    }  
}