function bitWiseAdd(a, b) {
  let carry = 0;
  while (b != 0) {
    carry = (a & b);
    a = a ^ b;
    b = carry << 1;
  }
  return a;
}
let a = 4294950529, b = 16;
console.log(a, `+`, b, `=`, bitWiseAdd(a, b))

//-------------Subtraction
function bitWiseSubtract(a, b) {
  return bitWiseAdd(a, bitWiseNegate(b))
}

function bitWiseNegate(b) {
  return (bitWiseAdd(~b, 1));
}

console.log(a, `-`, b, `=`, bitWiseSubtract(a, b))

//**************Multiply
// IDEA:  don't do 5 * -7, but do -7 * 5 
// because 5 has 3 set on bits while -7 has 32 set on bits 

function bitWiseMultiply(a, b) {
  if (b < 0) {
    a = bitWiseNegate(a)
    b = bitWiseNegate(b);
  }
  let product = 0;
  while (b != 0) {
    if (b & 1) {
      product = bitWiseAdd(a, product)//don't use product += product will add extra a
    }
    a = a << 1; // in non bit world remember it like
    b = b >> 1; // a * b = (a * 2) * ( b / 2);
  }
  return product;
}
console.log(a, `*`, b, `=`, bitWiseMultiply(a, b))


// /////////////// Division////////////////////
function bitWiseDivide(a, b) {
//   // console.log(a, b)
// if( a <= -2147483647)
// {
//   a = -2147483647;
// // console.log(a);
// }
//  if( b <= -2147483647)
//  {
//   b = -2147483647;
//  }

//   if (b == 1)
//   {
//     return a;
//   }
  let quotient = 0, neg = 0;
  if (a < 0) {
    a = bitWiseNegate(a);
    neg = !neg;
  }
  
  if (b < 0) {
    b = bitWiseNegate(b);
    neg = !neg;
  }
  if (b != 0) {
    while (a >= b) {
      a = bitWiseSubtract(a, b)// subtracting until a <= b
      quotient++; // quotient = bitWiseAdd(quotient, 1);
      console.log(a, b, quotient)
    }
  }
  if (neg) {
    quotient = bitWiseNegate(quotient);
  }
  if (quotient <= -2147483647){
    return quotient + 1;
  }
  return quotient;
}
console.log(a, `/`, b, `=`, bitWiseDivide(a, b));
console.log(bitWiseDivide(-2147483648,-1))
console.log(bitWiseNegate(-2147483647))
console.log(bitWiseNegate(-2147483648))
console.log(bitWiseMultiply(-3,-2))
