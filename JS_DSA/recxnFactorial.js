function iterativeFac(n){
  let fac = 1, i = 1;
  while(i <= n){
    fac *= i; i++;
  }
  return fac;
}
console.log(iterativeFac(5));

function recxnFac(n){
  let fac = n;
  if(n < 2) return 1; // no more function calls
  else return fac *= recxnFac(n - 1);
}

function recxnFac1(n, x){
  let fac = x;
  if(x == n) return n;
  else return fac *= recxnFac1(n, x+1)
}
console.log(recxnFac(5));
console.log(recxnFac1(5, 1));
