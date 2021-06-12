//Returns A % B (Supports negative number as well)
function modulo(a, b) {
  if (b < 1) {
    console.log("The second value should be greater than 0");
    return false;
  }
  let mod = 0;
  let c = Math.floor(a / b);
  mod = a - (b * c);
  return mod;
}

//*Returns a * b matrices

function multiplyMatrices(mat1, mat2, m1, n1, m2, n2) {
  if (n1 != m2) {
    // XxZ & ZxY => XxY
    console.log("Row != Column");
  }
  let x, i, j;
  let result = new Array(m1);
  for (i = 0; i < m1; i++)
    result[i] = new Array(n2);
  for (i = 0; i < m1; i++) {
    for (j = 0; j < n2; j++) {
      result[i][j] = 0;
      for (x = 0; x < m2; x++) {
        result[i][j] += mat1[i][x] * mat2[x][j];
      }
    }
  }
  return result;
}

//*Return Multiplicative Inverse Modulo value
function multInverse(a, b) {
  if (a < 0) {
    a = modulo(a, b);
  }
  if (b < 0) {
    console.log("The second value should be greater than 0");
    return false;
  }
  var a1 = 1; var b1 = 0;
  var a2 = 0; var b2 = 1;
  var a3 = b; var b3 = a;
  let loop = true;
  while (loop) {
    if (b3 == 0) {
      loop = false;
      console.log("No inverse is available.");
      return false;
    }
    if (b3 == 1) {
      loop = false;
      let num = modulo(b2, b);
      return num;
    }
    let c = Math.floor(a3 / b3);
    var t1 = a1 - (b1 * c);
    var t2 = a2 - (b2 * c);
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


//* CoFactor
function getCofactor(mat, temp, p, q, n) {
  let i = 0, j = 0;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (row != p && col != q) {
        temp[i][j++] = mat[row][col];
        if (j == n - 1) {
          j = 0;
          i++;
        }
      }
    }
  }
}

//* Determinant
function determinantOfMatrix(mat, n) {
  let D = 0;
  if (n == 1)
    return mat[0][0];
  let temp = new Array(n);
  for (let i = 0; i < n; i++) {
    temp[i] = new Array(n);
  }
  let sign = 1;
  for (let f = 0; f < n; f++) {
    getCofactor(mat, temp, 0, f, n);
    D += sign * mat[0][f] * determinantOfMatrix(temp, n - 1);
    sign = -sign;
  }
  return D;
}

// //! Do not delete
// let mat = [
//   [6, 24, 1],
//   [13, 16, 10],
//   [20, 17, 15]
// ];
// let n = 3
// let temp = new Array(n);
// for (let i = 0; i < n; i++) {
//   temp[i] = new Array(n);
// }
// //! Do not delete
// getCofactor(mat, temp, 0, 0, n);
// console.log(determinantOfMatrix(temp, n - 1));



// This function stores transpose of A in B
function transpose(mat1, mat2, n) {
  var i, j;
  for (i = 0; i < n; i++)
    for (j = 0; j < n; j++)
      mat2[i][j] = mat1[j][i];
}

function scalarMatrixMultiplication(mat, value, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      mat[i][j] = mat[i][j] * value;
    }
  }
}

// Driver code

var mat1 = [
  [6, 24, 1],
  [13, 16, 10],
  [20, 17, 15]
];

let n = 3
let mat2 = new Array(n);
for (let i = 0; i < n; i++) {
  mat2[i] = new Array(n);
}

transpose(mat1, mat2, 3);
console.table(mat2);


