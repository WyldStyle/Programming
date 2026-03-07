function checkPrime(num) {
  if (num <= 1) {
    return false;
  }
  else if (num <= 3) {
    return true;
  }
  else if(num == 5)
  {
    return true;
  }
  else if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0) {
    return false;
  }
  else {
    for (let i = 7; i * i <= num; i += 6) {
      if (num % i == 0 || num % (i - 2) == 0) {
        return false;
      }
    }
  }
  return true;
}

function basicPrimeFactorisation(n, arr) {
  if (checkPrime(n)) {
    arr.push(n);
    return arr;
  }
  else if (n == 1) {
    arr.push(1);
    return arr;
  }
  else if (n % 2 == 0) {
    arr.push(2);
    n = n / 2;
  }
  else if (n % 3 == 0) {
    arr.push(3);
    n = n / 3;
  }
  else if( n % 5 == 0)
  {
    arr.push(5);
    n = n / 5;
  }
  else if (n >= 25) {
    for (let i = 7; i * i <= n; i += 6) {
      if (n % i == 0) {
        arr.push(i);
        n = n / i;
        break;
      }
      if (n % (i - 2) == 0) {
        console.log('here')
        arr.push(i -2);
        n = n / (i - 2);
        break;
      }
    }
  }
  return basicPrimeFactorisation(n, arr);
}
 function primeFactors(n){
 // Print the number of 2s that divide n
 while (n%2 == 0) {
 console.log(2);
 n = n/2;
 }

 // n must be odd at this point. So we can skip one element
// Note i = i +2)
 for (var i = 3; i*i <= n; i = i+2) {
  // console.log(n,i)
 // While i divides n, print i and divide n
 while (n%i == 0) {
 console.log(i);
 n = n/i;
 }
 }
 // This condition is to handle the case when n is a prime number
 // greater than 2
 if (n > 2) {
 console.log(n);
 }
 }
let arr = [];
// console.log(checkPrime(5))
console.log(basicPrimeFactorisation(50,[]))

// console.log(basicPrimeFactorisation(142383492, arr))
// console.log(primeFactors(675))
// basicPrimeFactorisation(142383492, arr)
// basicPrimeFactorisation(29,[])
// basicPrimeFactorisation(208163,[])
// console.log(basicPrimeFactorisation(5,[]))



function primeFactorisation(n){
  let i = 2;
  while(n >= i){
    while(n % i == 0){
      console.log(i);
      // n = Math.trunc(n / i);
      n = n / i;
    }
    i++;
  }
}