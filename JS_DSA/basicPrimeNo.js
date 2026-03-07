// function checkPrime(num) {
//   if (num <= 1 || num == 4) {
//     return false;
//   }
//   else if (num <= 3) {
//     return true;
//   }
//   else { // prime no = 6k + 1 and k <= sqrt(num)
//     for (let i = 1; i * i <= num; i++) {
//       console.log(i)
//       if (6 * i + 1 == num || 6 * i - 1 == num)
//         return true;
//     }
//   }
//   return false;
// } ------------ runs 33 times


// console.log(checkPrime(208163))
console.log(checkPrime(169))

// runs two times for 1111
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
    // since i is starting from 5 or 7 and incremented by 6 it will never check
    // for multiples of 2 and 3 
    return false;
  }

  else if (num % 5 == 0 || num % 7 == 0 || num % 11 == 0) {
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
    for (let i = 7; i * i <= num; i += 6) { // but if this is used you have to give statement for 5,7 & 11 also
      if (num % i == 0 || num % (i - 2) == 0) {
        return false;
      }
    }
  }
  console.log(num);
  return true;
}



function primeCheck(n) {
  if (n < 2) return false;
  else if (n < 4) return true;
  else if (n==5) return true;
  else if (n % 2 == 0 || n % 3 == 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
  return true;
}