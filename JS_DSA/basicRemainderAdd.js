/*function miss69(n)
{
  if (n % 69 == 0)
  {
    return 0;
  }
  else {
    let rem = n % 69;
    let rem2 = 69 - (rem);
    return rem < rem2? rem: rem2;
  }
}*/


var topper = function (num) {

  if (num <= 69) {
    return 69 - num;
  }
  if (num % 69 == 0) {
    return 0;
  }
  else if (69 > 0) {
    let rem = num % 69;
    let rem2 = 69 - (rem);
    if ((num + rem) % 69 == 0) {
      return rem;
    }
    else return rem2;
  }
}
let n = 167;
console.log(topper(n));