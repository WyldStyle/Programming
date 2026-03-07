function minJumps(hurdles) {
  let jump = 0;
  if (hurdles[0] > hurdles.length) {
    jump++;
    return jump;
  }
  for (let i = 0; i < hurdles.length; i++) {
    if (findSmallHurdles(hurdles, i)) {
      jump++;
      i = hurdles[i] + i;
      if (hurdles[hurdles[i] + i] > hurdles.length - i - 1) {
        jump++;
        console.log('here jump')
        return jump;
      }
    }
  }
  return jump;
}
function findSmallHurdles(hurdles, i) {
  if (hurdles[hurdles[i] + i] != 0) {
    return true;
  }
  else { return false; }
}
let arr = [6, 7, 9, 0];
//let arr = [3,4, 10, 3 ,4]
//let arr = [3, 4, 10, 3, 4, 5, 3, 2, 2, 3, 2];
console.log(minJumps(arr))

//
