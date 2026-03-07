function iterativeFibo(n) {
  if (n < 2) return n;
  let a = 0, b = 1, fibArr = [];
  for (let i = 0; i < n; i++) {
    fibArr.push(a + b)
    a = b; b = fibArr[fibArr.length - 1];
  }
  return fibArr
}
console.time('itiHey')
console.log(iterativeFibo(10));
console.timeEnd('itiHey')

function recxnFibo(n, count = 0, a = 0, b = 1, arr = []) {
  if (count == n) return arr;
  else {
    arr.push(a + b);
    count++
    return recxnFibo(n, count, b, arr[arr.length - 1], arr);
  }

}
console.time('hey');
// let arr = [];
console.log(recxnFibo(1));
console.timeEnd('hey')

 function getNthFiboBetterSammieBae(n, lastlast = 0, last = 1) {
 if (n == 0) {
 return lastlast;
 }
 if (n == 1) {
 return last;
 }
 return getNthFiboBetterSammieBae(n-1, last, lastlast + last);
 }
console.time('sammieBae')
console.log(getNthFiboBetterSammieBae(10));
console.timeEnd('sammieBae')