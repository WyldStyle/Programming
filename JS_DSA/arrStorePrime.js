/*function storePrime(n) {
    let np = 0, fac = 0; let arrPrime = [];
    for (let i = 1; i > 0; i++) {
        fac = 0;
        for (let j = 1; j <= i; j++) {
            //console.log(j);
            if (i % j == 0) {
            fac++;
            //console.log(fac);
            }
         
        }
        if (fac == 2) {
                arrPrime.push(i)
                np++;
            } 
            if (np == n)
        {break;}
    }
    console.log(arrPrime);
    return;
}
let n = 5;
storePrime(n);*/


function checkPrime(num) {
  if (num <= 1) {
    return false;
  }
  else if (num <= 3) {
    return true;
  }
  else if (num == 5) {
    return true;
  }
  else if (num % 2 == 0 || num % 3 == 0) {
    return false;
  }
  else if (num % 5 == 0 || num % 6 == 0) {
    return false;
  }
  else {
    // for (let i = 5; i * i <= num; i += 6) { 
    //   // 5 = 6k - 1 so the nxt no will be 6k + 1 i.e difference of +2
    //   console.log(i, i - 2)
    //   if (num % i == 0 || num % (i + 2) == 0) {
    //     return false;
    //   }
    // }
    for (let i = 7; i * i <= num; i += 6) { 
      if (num % i == 0 || num % (i - 2) == 0) {
        return false;
      }
    }
  }
  return true;
}

function prime(noOfPrimes) {
  if (!noOfPrimes) { return null; }
  let arr = [];
  for (let i = 2; arr.length < noOfPrimes; i++) {
    if (checkPrime(i)) { arr.push(i) };
  }
  return arr;
}
console.log(prime(25));