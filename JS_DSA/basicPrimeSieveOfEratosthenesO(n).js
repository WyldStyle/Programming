//Given an integer n, return the number of prime numbers that are strictly less than n.
function PrimeNoSieveOfEratosthenesdraft1(n) {
  if (n < 3) {
    return 0;
  }

  const numberMap = new Map();
  let notPrimes = 0;
  let runcount = 0;
  for (let i = 2; i <= n; i++) {
    numberMap.set(i, true);
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (numberMap.get(i)) {
      for (let j = i * i; j <= n; j = j + i) {
        runcount++;
        if (numberMap.get(j)) {
          numberMap.set(j, false);
          notPrimes++;
        }
      }
    }
  }
  // return numberMap;
  // return n- 1 - notPrimes;
  return ['runcount = ', runcount, 'noOfPrimes = ', n - 1 - notPrimes];
}

// console.log(PrimeNoSieveOfEratosthenesdraft1(100000));
// console.log(countPrimes(100000))
console.log(PrimeNoSieveOfEratosthenesDraft2(100))
// console.log(PrimeNoSieveOfEratosthenesFastest(956150))

// ----------------leetCode---------
function countPrimes(n) {
  if (n < 3) return 0;

  const count = new Uint8Array(n); //typed array U = unsigned Integer
  let resPrime = 1;
  let runcountOuter = 0, runcountInner = 0;

  for (let i = 3; i < n; i += 2) // removing even no....seel l-43
  {
    runcountOuter++;
    if (!count[i]) {
      resPrime++;
      for (let j = i * i; j < n; j += 2 * i) //cleverly removes even no. setting
      {
        count[j] = 1;
        runcountInner++;
      }
    }
  }

  // return resPrime;
  // return count
  return ['runcountOuter = ', runcountOuter, 'runcountInner = ', runcountInner, 'noOfPrimes = ', resPrime];
};
// my code 
function seiveOfEratosthenes(n){
  let arr = [];
  if(n < 3) return 0;
  for(let i = 0; i <= n ; i++){
    arr.push(0);
    // arr.push(i) to see what's happening
  }
  let count = 1;
  for(let j = 3; j <= n; j +=2){
    if(!arr[j]) count++;
    for(let k = j *j; k <= n; k += j)
    arr[k] = 1;
  }
  return count;
}

function PrimeNoSieveOfEratosthenesDraft2(n) {
  if(n < 3)
  {
    return 0;
  }

  const numberMap = new Map();
  numberMap.set(2,true);
  
  let notPrimes = Math.trunc(n / 2 - 1), noOfPrimes = 0;
  let runcountOuter = 0, runcountInner = 0;

  for (let i = 3; i < n; i += 2) {
    numberMap.set(i, true)
  }

  for (let i = 3; i < Math.sqrt(n); i += 2) {
    runcountOuter++;
    if (numberMap.get(i)) {
      for (let j = i * i; j < n; j += 2 * i) {
        runcountInner++;
        if (numberMap.get(j)) {
          // numberMap.set(j, false)
          numberMap.delete(j)
          notPrimes++;
        }
      }
    }
  }
  console.log(numberMap);
  return numberMap.size
  // return numberMap;
}

// function PrimeNoSieveOfEratosthenesFastest(n) {

//   let k, numberMap = new Map(), noOfPrimes = 2, notPrimes = 0,
//     runcountInner = 0, runcountOuter = 0;

//   numberMap.set(2, 0);
//   numberMap.set(3, 1);
//   numberMap.set(4, 2)
//   if (n < 5 && n > 1) {
//     return numberMap.get(n);
//   }

//   if (n % 6 == 5) {
//     k = Math.floor(n / 6 + 1)
//   }
//   else {
//     k = Math.floor(n / 6);
//   }
//   for (let i = 1; i <= k; i++) {
//     if (6 * i != n) {
//       numberMap.set(6 * i - 1, true);
//       numberMap.set(6 * i + 1, true);
//     }
//     else if (6 * i == n) {
//       numberMap.set(6 * i - 1, true);
//     }
//   }
//   let altcounter = 0;
//   for (let j = 5; j < Math.sqrt(n); j++) {
//     if (numberMap.get(j)) {
//       let k = j * j;
//       let _2x4xcounter = 1
//       for(; k <= n; k += 2 * j)
//       {
//         // console.log(j, k , altcounter, _2x4xcounter, runcountOuter, runcountInner, numberMap.get(k));
//         if( (altcounter == 1 && _2x4xcounter == 0 && _2x4xcounter !== 1) || (altcounter == 0 && _2x4xcounter == 1 &&_2x4xcounter !== 1))
//         {
//           k += 2 * j;
//         }
//         numberMap.delete(k);
//         _2x4xcounter = !_2x4xcounter;
//         runcountInner++;
//       }
//       altcounter = !altcounter;
//       runcountOuter++;
//     }
//   }
//   numberMap.delete(4);
//   // return ['runcountOuter = ', runcountOuter, 'runcountInner = ',
//   //   runcountInner, 'notPrimesinMap = ', notPrimes, 'noOfPrimes = ', numberMap.size]
//   return numberMap;
// }
// function divisible(mapN) {
//   let arr = [];
//   for (let no of mapN.keys()) {
//     if (no % 13 == 0) {
//       arr.push(no);
//     }
//   }
//   // console.log('div by 11', arr)
//   return arr;
// }

// function notPrimes()
// {
//   const mapdraft2 = PrimeNoSieveOfEratosthenesDraft2(10000);
//   const mapfastest = PrimeNoSieveOfEratosthenesFastest(10000);
//   // console.log(mapdraft2.size)
//   // console.log(mapdraft2, mapfastest)
//   // console.log(typeof mapdraft2);
//   console.log(mapfastest);
//     let couter = 0; 
//   for (let key of mapfastest.keys())
//   {
//     // console.log(mapfastest.get(key));
//     if(mapdraft2.get(key) == false)
//     {
//       couter++;
//       // console.log('here')
//       // console.log(key, couter);
//     }
//   }
// }
// notPrimes();
function PrimeNoSieveOfEratosthenesFastest(n) {

  let k, numberMap = new Map(), notPrimes = 0,
    runcountInner = 0, runcountOuter = 0;

  numberMap.set(2, 0);
  numberMap.set(3, 1);
  numberMap.set(4, 2)
  if (n < 2) {
    return 0;
  }
  if (n < 5 && n > 1) {
    return numberMap.get(n);
  }

  if (n % 6 == 5 && n != 5) {
    k = Math.floor(n / 6 + 1)
  }
  else {
    k = Math.floor(n / 6);
  }

  numberMap.delete(4)
  for (let i = 1; i <= k; i++) {
    if (6 * i != n) {
      if (6 * i - 1 < n) {
        numberMap.set(6 * i - 1, true);
      }
      if (6 * i + 1 < n) {
        numberMap.set(6 * i + 1, true);
      }
    }
    else if (6 * i == n) {
      numberMap.set(6 * i - 1, true);
    }
  }
  for (let num of numberMap.keys()) {
    runcountOuter++;
    if (num > Math.sqrt(n)) {
      break;
    }
    if (numberMap.get(num)) {
      for (let j = num * num; j < n; j += 2 * num) {
        numberMap.delete(j);
        runcountInner++;
      }
    }
  }
  // console.log(numberMap)
  return ['runcountOuter = ', runcountOuter, 'runcountInner = ',
    runcountInner, 'notPrimes = ', notPrimes, 'noOfPrimes = ', numberMap.size]
}



// if no of primes upto n e.g. 25 primes upto 100
function seiveOfEratosthenes(n){
  let noOfPrimes = 0;
  if(n < 2) return 0;
  let arr = new Array(n+1).fill(1);
  for(let i = 4; i <= n; i+=2){
    arr[i] = 1;
  }
  noOfPrimes++;
  for (let j = 3; j <= n; j+=2) {
    if(arr[j]) noOfPrimes++;
    for(let k = j *j; k <= n; k+= j){
      arr[k] = 0;
    }
  }
  return noOfPrimes;
}

console.log(seiveOfEratosthenes(101));