// function bitAltBits1010(n)
// {
//   let a = 0, b = 0, count = 0;
//   while ( n != 0)
//   {
//     if (( n & 1) ^ ((n >> 1) & 1))
//     {
//       n = n >> 2;
//     }
//     else return false;
//   }
//   return true;
// }
// function bitWiseAdd(a, b)
// {
//   let carry = 0;
//   while(b != 0)
//   {
//     carry = a & b;
//     a = a ^ b;
//     b = carry << 1;
//   }
//   return a;
// }
// function bitAltBits10109(n)
// {
//   while (n != 0)
//   {
//     if (bitWiseAdd((n & 1), ))
//   }
// }


// function bitAltBits1010(n)
// {
//   if ( n & ( n << 1) || ((( n & 1) ^ ((n >> 1) & 1)) == 0))
//   {
//     return false;
//   }
//   return true;
// }
// console.log(bitAltBits1010(5))

// function bitAltBits1010(n) {
//   while (n != 0) {

//     let bit1 = (n) & 1, bit2 = ((n >> 1) & 1);
//     if (bit1 === bit2) {
//       return false;
//     }
//     n = n >> 1;
//   }
//   return true;
// }

// function bitAltBits1010(n) {
//   while (n != 0) {
//     if (n == 2 || n == 1) {
//       if ((n & 1) == ((n >> 1) & 1)) {
//         return false;
//       }
//     }
//     else {
//       if ((n & 1) == ((n >> 1) & 1) || ((n & 1) ^ ((n >> 2) & 1)) == 1) {
//         return false;
//       }
//       n = n >> 1;
//     }
//     n = n >> 1;
//   }
//   return true;
// }

/* Given a positive integer, check whether it has alternating bits: 
namely, if two adjacent bits will always have different values.*/

// beats 100%
function bitAltBits1010(n)
{
  while(n != 0)
  {
    if( n == 1 || n == 2 || n == 5 || n == 10)
    {
      return true;
    }
    else { 
    let bit1 = n & 1, bit2 = (n >> 1) & 1;
    let bit3 = (n >> 2) & 1, bit4 = ( n >> 3) & 1;
      if( bit1 === bit2 || ( bit1 ^ bit3) == 1 || bit1 === bit4)
      { return false;}
      n = n >> 3;
    }
  }
  return true;
}


function bitAltBits10101(n) {
  if (n < 0) {
    return false;
  }
  while (n != 0) {
    if (n == 1 || n == 2 || n == 5 || n == 10) {
      return true;
    }
    else {
      console.log(n.toString(2))
      if ((n & 1) == ((n >> 1) & 1)) {
        return false;
      }
    }
    n = n >> 2;
  }
  return true;
}

console.log(bitAltBits10101(10))
