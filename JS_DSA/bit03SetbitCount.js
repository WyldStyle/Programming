function hammingWeightslow(n) {
  let count1 = 0;
  while (n != 0) {
    if (n & 1) {
      count1++;
    }
    n = n >> 1;
  }
  return count1;
}



////////////////////////
function hammingWeight(num) {
  let c = 0; // count the no of set bits
  for (; num; c++) // until num becomes 0
  {
    num &= num - 1; // clear least significant bit
  }
  return c;
}
console.log(hammingWeight(-312));