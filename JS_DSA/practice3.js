"use strict"
function makePrime(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    let j = 1, changed;
    while (j <= k) {
      if (checkPrime(arr[i] + j)) {
        arr[i] = arr[i] + j;
        changed = true;
        break;
      }
      j++;
    }
    if (!changed) arr[i] = -1;
  }
  return arr;
}

function checkPrime(n) {
  if (n < 2) return false;
  if (n < 4) return true;
  if (n % 2 == 0 || n % 3 == 0) return false;
  if (n == 5) return true;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % i + 2) return false;
  }
  return true;
}

const arr = [1, 2, 3, 4, 5]
console.log(makePrime(arr, 2));