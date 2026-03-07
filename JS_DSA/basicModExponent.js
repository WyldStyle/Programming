function modularExponent(x, y, p) {
  //my function
  let firstRem = x % p, mod = 1;
  for (y; y > 0; y--) {
    mod *= firstRem;
    if (mod > p) {
      mod = mod % p;
    }
  }
  return mod % p;
}

//Sammie Bae's function
function modularExponentiation(base, exponent, modulus) {
  if (modulus == 1) return 0;

  var value = 1;

  for (var i = 0; i < exponent; i++) {
    value = (value * base) % modulus;
  }
  return value;
}
console.log(modularExponentiation(50,77,23))
console.log(modularExponent(50, 77, 23))
console.log((50 ** 77) % 23)

function safeIntCheck()
{
if((50**10) < Number.MAX_SAFE_INTEGER){
  return true; } // true upto 50 ** 9
  else return false;
}
console.log(safeIntCheck())