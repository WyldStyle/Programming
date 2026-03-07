
// console.time('hey');
// console.log(Math.pow(3,5));
// console.timeEnd('hey');

console.time('exp1');
console.log(recxnExponent(3, 5));
console.timeEnd('exp1');

function recxnExponent(a, b) {
  let result = 0;
  if (b == 0) return 1;
  if (b == 1) return a;
  if (b % 2) {
    result = recxnExponent(a, Math.floor(b / 2)); // b >> 1 looks cool
    // console.log('Odd Power result',result, b);
    return result * result * a;
  }
  else {
    result = recxnExponent(a, b / 2);
    // console.log(' even power result',result, b);
    return result * result
  }
}

function recxnExponent1(a, b) {
  if (b == 0) return 1;
  if (b == 1) return a;
    if (b % 2 == 0) {
      return recxnExponent1(a * a, b >> 1)
    }
    if (b % 2 == 1) {
      return a * recxnExponent1(a * a, b >> 1)
    }
  }
console.log(recxnExponent1(2, 7));

function iterativeExpOnRecursiveInsight(a, b){
  if(b == 0) return 1
  let stack = [], prod = 1;
  while(b){
    if(b % 2) stack.push(1);
    else stack.push(0);
    b = Math.floor(b / 2);
  }
  while(stack.length){
    if(stack.pop()) prod = prod * prod * a;
    else prod = prod * prod;
  }
  return prod;
}
console.log(iterativeExpOnRecursiveInsight(3,7));