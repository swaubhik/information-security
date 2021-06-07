//Returns A % B (Supports negative number as well)
function modulo(a, b){
    if (b < 1)
    {
        console.log("The second value should be greater than 0");
    }
    let mod = 0;
    let c = Math.floor(a / b);
    mod = a - (b * c);
    return mod;
}
