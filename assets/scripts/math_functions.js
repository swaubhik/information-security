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

//*Returns a * b matrices

function multiplyMatrices(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length) {
    throw new Error("Should be in 2-D array format");
  }
  let x = a.length,
    z = a[0].length,
    y = b[0].length;
  if (b.length !== z) {
    // XxZ & ZxY => XxY
    throw new Error(
      "number of columns in the first matrix should be the same as the number of rows in the second"
    );
  }
  let productRow = Array.apply(null, new Array(y)).map(
    Number.prototype.valueOf,
    0
  );
  let product = new Array(x);
  for (let p = 0; p < x; p++) {
    product[p] = productRow.slice();
  }
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      for (let k = 0; k < z; k++) {
        product[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return product;
}

//*Return Multiplicative Inverse Modulo value
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