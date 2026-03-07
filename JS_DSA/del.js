function bitWiseAdd(a, b) {
  while (b != 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
}

// console.log(bitWiseAdd(-3, -1))
function bitWiseNegate(a) {
  return ~a + 1;
}

function bitWsiseSubtract(a, b) {
  return bitWiseAdd(a, bitWiseNegate(b));
}

// console.log(bitWsiseSubtract(3.23, 44))
function bitwiseMultiply(a, b) {
  if (b < 0) {
    a = bitWiseNegate(a);
    b = bitWiseNegate(b);
  }
  let product = 0;
  while (b != 0) {
    product += a;
    b = b >> 1;
  }
  return product;
}
// console.log(bitwiseMultiply(-5, -8));

function bitWiseDivide(a, b) {
  let neg = 0;
  if (a < 0) {
    a = bitWiseNegate(a);
    neg = !neg;
  }
  if (b < 0) {
    b = bitWiseNegate(b);
    neg = !neg;
  }
  let quotient = 0;
  while (a >= b) {
    // a = a - b;
    a = bitWsiseSubtract(a, b);
    quotient = bitWiseAdd(quotient, 1);
  }
  if (neg) {
    return bitWiseNegate(quotient);
  }
  else {
    return quotient;
  }
}
console.log(bitWiseDivide(-15, 3));