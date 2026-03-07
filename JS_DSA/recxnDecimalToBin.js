// Time complexity O(log(n) base 2)
const deciToBin = (n) => {
  if(n == 0) return '0';
  else if(n== 1) return '1';
  else{
    let binStr = deciToBin(Math.floor(n/2)) + `${n % 2}`
    return binStr;
  }
}
console.log(deciToBin(232));

function deciToBin(n){
  if(n == 0) return 0;
  if(n == 1) return 1;
  let str = '' + n % 2;
  return deciToBin(n >> 1) + str;
}