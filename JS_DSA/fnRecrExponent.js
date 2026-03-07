const exponent = function (n, pow) {
  let result = null;
  if (pow > 0) {
    //return n * (exponent(n, pow - 1)); // slower runs n 6 times
    if (pow % 2 == 0) {
      result = exponent(n, pow / 2)
      return result * result;
    }
    else {
      result = exponent(n, Math.floor(pow / 2));
      return result * result * n
    }
  }
  else if (pow < 0) {
    pow = pow * -1;
    return 1 / exponent(n, pow);
  }
  else return 1;
}
console.log(exponent(5, -6))
console.log(exponent( 3,500))