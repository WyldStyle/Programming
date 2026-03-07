 
function bitNumToHEXdoesntwork(n, hex) {
  if (n < 0) {
    //  n = n >>> 0;  won't work because bitDivide w
    // works for 32 bit only while / works for 64 bit
    // n = n + 2 ** 32; same as n >>> 0
    return TwoScomplement(n, '');
  }
console.log(n);
  let [quotient, remainder] = bitWiseDivide(n, 16);
  if (quotient < 16) {
    if (quotient == 0)
    {
      return hex = remainderToString(remainder); 
    }
    hex = remainderToString(quotient) + remainderToString(remainder) + hex;
    // return parseInt(hex,16).toString(16); will also return string in 16 and decimal no so no use
    return hex;
  }
  hex = remainderToString(remainder) + hex;
  // console.log(remainderToString(remainder),hex, quotient)
  return bitNumToHEX(quotient, hex);
}


function TwoScomplement(n, hex) {
  let hexN = '', compNum = 0, carry = 0;
  if ( n < -2147483647)
  {
    n = Math.abs(n)
    return bitNumToHEX(n, '')
  }
  else {n = bitWiseNegate(n);}
  hex = '0' + bitNumToHEX(n, '');

  for (let i = (hex.length - 1); i >= 0; i--) {
    if (i == hex.length - 1) {
      // compNum = hexNtoComp(hex.charAt(i)) + 1;
      compNum = bitWiseAdd(hexNtoComp(hex.charAt(i)), 1)
      if (compNum == 16) {
        carry = 1;
        compNum = 0;
      }
    }
    else {
      // compNum = hexNtoComp(hex.charAt(i)) + carry;
      compNum = bitWiseAdd(hexNtoComp(hex.charAt(i)), carry)
      if (compNum == 16) {
        carry = 1;
        compNum = 0;
      }
      else{ carry = 0;}
    }
    hexN = remainderToString(compNum) + hexN;
    
  }
  // console.log( hexN)
  if( hexN.length < 8){
  for (let j = 0; j < 8 - hex.length; j++) {
    hexN = 'f' + hexN;
  }
}
  return hexN;
}

function hexNtoComp(letter) {
  let eqNum = 0;
  switch (letter) {
    case 'f':
      eqNum = 0;
      break;
    case 'e':
      eqNum = 1;
      break;
    case 'd':
      eqNum = 2;
      break;
    case 'c':
      eqNum = 3;
      break;
    case 'b':
      eqNum = 4;
      break;
    case 'a':
      eqNum = 5;
      break;
    default:
      eqNum = 15 - Number(letter);
      break;
  }
  return eqNum;
}

function remainderToString(remainder) {
  let remToStr = '';
  switch (remainder) {
    case 10:
      remToStr = 'a';
      break;
    case 11:
      remToStr = 'b'
      break;
    case 12:
      remToStr = 'c';
      break;
    case 13:
      remToStr = 'd';
      break;
    case 14:
      remToStr = 'e';
      break;
    case 15:
      remToStr = 'f';
      break;
    default:
      remToStr = remainder.toString();
      break;
  }
  return remToStr;
}

function bitWiseDivide(a, b) {
  let neg = 0, quotient = 0;
  if (a < 0) {
    a = bitWiseNegate(a);
    neg++;
  }
  if (b < 0) {
    b = bitWiseNegate(b);
    neg++;
  }
  if (b != 0) {
    while (a >= b) {
      a = bitWiseSubtract(a, b)
      quotient++;
    }
  }
  if (neg == 1) {
    quotient = bitWiseNegate(quotient);
  }
  return [quotient, a];
}

function bitWiseAdd(a, b) {
  let carry = 0;
  while (b != 0) {
    carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
}

function bitWiseNegate(a) {
  return bitWiseAdd(~a, 1);
}

function bitWiseSubtract(a, b) {
  return bitWiseAdd(a, bitWiseNegate(b))
}
console.log(bitNumToHEX(-1))
// console.log(bitNumToHEX(16,''))
// console.log(bitNumToHEX(-214748367, ''));
// console.log(bitNumToHEX(-2147483648, '')) giver max call stack size exceeded
// console.log(bitNumToHEX(-2147483648, ''))
// console.log(bitWiseDivide( 4294950529, 16))

function bitNumToHEX(n) {
  const mapN = new Map();
  mapN.set(10, 'a');
  mapN.set(11, 'b')
  mapN.set(12, 'c');
  mapN.set(13, 'd');
  mapN.set(14, 'e');
  mapN.set(15, 'f');

  if (n < 0) {
    n = n >>> 0; // n >>> 0  is same as n += 2 ** 32
    //  what if 64 bit no
  }
  let rem = 0, hexStr = '';
  while (n > 0) {
    rem = n % 16;
    hexStr = (rem > 9 ? mapN.get(rem) : rem) + hexStr;
    n = Math.floor(n / 16);
  }
  return hexStr;
}
console.log(bitNumToHEX(-1));



/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  let result = '';
  let hexMap = {
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f',
  }

  if(num===0) return '0';
  if(num<0) num+= 2**32;
  // num = num >>> 0; same as adding 2 ** 32;
  console.log(num)

  while(num>0) {
    let rem = num%16;
    result = (rem>=10 ? hexMap[rem] : rem.toString()) + result;
    num = Math.floor(num/16);
  }
  return result;
}
// console.log(toHex(-2147483648))
// console.log(toHex(2147483648))
// console.log(toHex(-1))
// console.log(toHex(1))