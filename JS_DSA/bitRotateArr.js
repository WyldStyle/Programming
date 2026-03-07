function bitRotateArrRight(nums, k) {
  if (k % nums.length == 0) {
    return nums;
  }
  k = k % nums.length;
  for (; k > 0; k--) {
    nums.unshift(nums.pop());
    // console.log(nums)
  }
  return nums;
}
// let nums = [5, 4, 64, 7, 6, 2, 16];

// console.log(bitRotateArrRight(nums, 0))
/////

function bitRotateArrLeft(nums, k) {
  k = k % nums.length;
  for (; k > 0; k--) {
    nums.push(nums.shift());
    console.log(nums)
  }
  return nums;

let nums = [1,2,3,4,5]
console.log(bitRotateArrRight(nums, 7))