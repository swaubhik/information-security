function Create2DArray(rows) {
    var arr = [];
    for (var i=0;i<rows;i++) {
       arr[i] = [];
    }
    return arr;
  }
  
  function transKeyCalc(key){
    var temp = "";
    for(var i=0;i<key.length;i++){
      if(temp.indexOf(key[i]) < 0){
        temp = temp + "" + key[i];
      }
    }
    var ascii = [];
    for (i = 0; i < temp.length; i++) {
      ascii.push(temp.charCodeAt(i));
    }
    var ascii2 = _.map(ascii, _.clone);
    ascii2.sort(function(a, b){return a-b});
    for(i=0; i<ascii2.length; i++){
      ascii[ascii.indexOf(ascii2[i])] = i;
    }
    return ascii;
  } 
  
  function encrypt(){
    var key = document.getElementById('key').value;
    document.getElementById('output').value = '';
    var op = '';
    var ip = document.getElementById('input').value;
    var encrKey = transKeyCalc(key);
    var m = encrKey.length;
    var n = Math.ceil( ip.length / m );
    var totalLetters = n*m;
    var noOfHashes = totalLetters - ip.length;
    var hashes = '';
    for(var i=0;i<noOfHashes;i++){
      hashes = hashes + "#";
    }
    var plaintext = ip + hashes;
    var arr = Create2DArray(n);
    for(var i=0;i<n;i++){
      for(var j=0;j<m;j++){
        arr[i].push(plaintext[(i*m)+j]);
      }
    }
    var temp=0;
    for(var j=0;j<m;j++){
      temp = encrKey[j];
      for(var i=0;i<n;i++){
        op = op + "" + arr[i][temp];
      }
      op = op + " ";
    } 
    document.getElementById('output').value = op;
    
  }
  encrypt(key); 