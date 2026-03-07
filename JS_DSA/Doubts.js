console.log(`(100 >>> 0).toString(2) = `(100 >>> 0).toString(2))
console.log(`why 100 >>> 32 == 100? What does >>> 32 even means`)

console.log('Node.js is printing 8 as 1000 but we know that it aint possible \
bcuz 8 need atleast 5 bit')
console.log( "how to check if no is negative without using < 0, just using bit operators for eg -8 and 0")

function bitSetBitCount(num) {
  let i = 0;
  for (; num; i++) {
    num &= bitWiseSubtract(num, 1);
  }
  return i;
  'works fine for +e no but doesn't ' works for -ve no whereas'

function hammingWeight(v)
{
  let c; // count the no of set bits
  for ( c = 0; v; c++) // until v becomes 0
  {
    v &= v-1; // clear least significant bit
  }
  return c;
}
console.log(hammingWeight(-312));
'this works for both +ve n negative no'

'converting array to object check this link
'https://stackoverflow.com/questions/4215737/convert-array-to-object'