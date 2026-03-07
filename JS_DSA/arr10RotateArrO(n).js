// function rotateArr(nums, k) {
//   if (k > nums.length) {
//     if ( k % nums.length == 0)
//     {
//       return nums;
//     }
//     k = k % nums.length;
//   }
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (i < k) {
//       arr[i] = nums[nums.length - k + i];
//     }
//     else arr[i] = nums[i - k];
//   }
//   return arr;
// }
// let nums = [1, 4, 6, 7, 73, 34, 6, 3, 8, 8]
// let nums = [1,2,3,4,5,6, 7,8,9,10,11,12,13,14, 15]
// // function rotateArr(nums,k)
// // {
// //   for (let i = 1; i <= k; i++)
// //   {
// //     nums.splice(0,0,nums.pop());
// //   }
// //   return nums;
// // }

// time limit exceeded
// as unshifting is n-1 time complexity every time
// function rotateArr(nums, k){
//   k = k % nums.length;
//   while(k > 0){
//     nums.unshift(nums.pop());
//     k--;
//   }
//   return nums;
// }


let nums = [1, 2, 3, 4, 5, 6, 7];

// works here but doesn't works on LeetCode
// function rotateArr(nums, k){
//   k = k % nums.length;
//   if(k > 0){
//     nums =  nums.slice(nums.length - k).concat(nums.slice(0,nums.length - k - 1))
//   }
//   // return nums;
//   console.log(nums);
// }

// 90ms
// function rotateArr(nums, k) {
//   k = k % nums.length;
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (i < k) {
//       arr[i] = nums[nums.length -1 - i]
//     }
//      else{
//       if(i == k){ arr.reverse()}
//       arr[i] = nums[i - k];
//     }
//   }
//   return arr;
// }

// won't work
// function rotateArr(nums, k){
//   let arr = nums;
//   // nums.length = 0;
//   // nums = []; 
//   // this will make nums point to a different value
//   // but outside this function
//   // nums will point to same 
//   // array initialised at beginning i.e [1,2,3,5,4,6,7]
//   k = k % arr.length;
//   let idx = 0;
//   for(let i = arr.length - k; i < arr.length; i++){
//     nums[idx] = arr[i];
//     idx++;
//   }
//   console.log(arr);
//   console.log(nums);
//   for(let i = 0; i <= arr.length - k - 1; i++){
//     nums[idx] = arr[i];
//     idx++;
//   }
//   console.log(nums);
// }

// // 80ms
// function rotateArr(nums, k) {
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     arr[i] = nums[i];
//   }
//   let idx = 0;
//   for (let i = arr.length - k; i < arr.length; i++) {
//     nums[idx] = arr[i];
//     idx++;
//   }
//   for (let i = 0; i <= arr.length - k - 1; i++) {
//     nums[idx] = arr[i];
//     idx++;
//   }
// }

function rotateArr(nums, k){
  k = k % nums.length;
  reverseArrEle(nums,0,nums.length - k - 1);
  reverseArrEle(nums,nums.length - k)
  reverseArrEle(nums)
}

function reverseArrEle(nums, idx1 = 0, idx2 = nums.length - 1){
  while(idx1 <= idx2)
{ 
  let temp = nums[idx1];
  nums[idx1] = nums[idx2];
  nums[idx2] = temp;
  idx1++;
  idx2--;
 }
}

function rotateArrLeetCode(nums, k)
// fastest Solution
{ 
 k %= nums.length;
    nums.unshift(...nums.splice(nums.length - k, k));
 }


// console.log(nums)
// console.log(rotateArr(nums, 1));
// console.log(rotateArr(nums, 2));
// console.log(rotateArr(nums, 3));
console.log(rotateArrLeetCode(nums,3));
console.log(nums);
// console.log(rotateArr(nums, 4));
// console.log(rotateArr(nums, 5));
// console.log(rotateArr(nums, 6));
// console.log(rotateArr(nums, 7));
// console.log(rotateArr(nums, 8));
// console.log(rotateArr(nums, 9));
// console.log(rotateArr(nums, 10));
// console.log(rotateArr(nums, 11));
// console.log(rotateArr(nums, 12));
// console.log(rotateArr(nums, 13));
// console.log(rotateArr(nums, 14));
// console.log(rotateArr(nums, 15));
// console.log(rotateArr(nums, 16))
