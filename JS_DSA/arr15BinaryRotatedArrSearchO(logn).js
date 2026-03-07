// function binaryRotatedArrSearch(arr, target) {
//   let brkIdx = binarySearchIdx(arr, 0, arr.length - 1, target);
//   console.log(brkIdx)
//   if (brkIdx == undefined) {
//     return binarySearch(arr, 0, arr.length - 1, target);
//   }
//   else {
//     let idx1 = binarySearch(arr, 0, brkIdx, target);
//     if (idx1 !== -1) {
//       return idx1;
//     }
//     let idx2 = binarySearch(arr, brkIdx + 1, arr.length - 1, target);
//     console.log(idx2)
//     if (idx2 !== -1) {
//       return idx2;
//     }
//     else {
//       return -1;
//     }
//   }
// }

// function binarySearch(arr, left, right, target) {
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] == target) {
//       return mid;
//     }
//     else if (arr[mid] < target) {
//       left = mid + 1;
//     }
//     else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }

// function binarySearchIdx(arr, left , right, target) {
//   let mid = Math.floor((left + right) / 2);
//   console.log(left, mid, right, arr[mid], arr[mid + 1])
// if (arr[mid] > arr[mid + 1]) {
//   return mid;
// }
// else if (left >= mid || mid >= right) {
//   return;
// }

// else {
//   binarySearchIdx(arr, left, mid - 1, target);
//   binarySearchIdx(arr, mid + 1, right, target);
// }
// }

// let arr = [8, 9, 10, 11, 12, 13,14, 15, 16, 17, 1, 2, 3, 4,  5, 6, 7]
// let arr = [1, 3, 5]
// let arr = [3,1]
// console.log(binaryRotatedArrSearch(arr, 1))

// let arr = [5,1,3];
// console.log(binaryRotatedArrSearch(arr, 5))

/*
There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated 
at an unknown pivot index k (1 <= k < nums.length) such that the 
resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] 
(0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at 
pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, 
return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1

Constraints:

    1 <= nums.length <= 5000
    -104 <= nums[i] <= 104
    All values of nums are unique.
    nums is an ascending array that is possibly rotated.
    -104 <= target <= 104
*/

// leetCode
var search = function (nums, target) {
  let [left, right] = [0, nums.length - 1]

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    console.log(left, mid, nums[mid], right);

    if (target == nums[mid])
      return mid

    if (nums[left] <= nums[mid]) {
      if (target > nums[mid] || target < nums[left])
        left = mid + 1
      else
        right = mid - 1
    } else {
      if (target < nums[mid] || target > nums[right])
        right = mid - 1
      else
        left = mid + 1
    }

  }
  return -1
};




function binaryRotatedArrSearchKids(arr,target){
  // how kids will do it
  let a=  arr.indexOf(target);
  return a > -1 ? a : -1;
}


//my solution with explanation 36ms
// for more clearance see diag 
function binaryRotatedArrSearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = left + right >> 1;
    console.log(arr[left], arr[mid], arr[right]);

    if (target == arr[mid]) return mid;

    else if(arr[left] <= target && target <= arr[right]){ 
      // target = 2, [1,2,3,4,5,6]
      if(arr[mid] < target) left = mid + 1;
      else if(target < arr[mid]) right = mid - 1;
    }
    else {
      if(arr[left] <= arr[mid]){
        if(target > arr[mid] || target <= arr[right]) left = mid+1;
        // [6,7,8,9,10,1,2,3], arr[mid] = 9, target = 10 or 2
        else if(arr[left] < target && target< arr[mid]) right = mid -1;
        // target = , i.e arr[left] < target < arr[mid]
      }
      else if(arr[left] > arr[mid]){
        if(target > arr[right] || target < arr[mid]) right = mid -1;
        // [8,9,10,11,1,2,3,4,5,6,7], arr[mid] = 2, target = 10 or 1
        else if(arr[mid] < target && target < arr[right]) left = mid+1;
        // target = 5, i.e arr[mid] < target && target < arr[right];
      }
    }
  }
  return -1;
}


// avg 65 ms see how using && makes program slower
function binaryRotatedArrSearch1(arr, target){
  let left = 0, right = arr.length - 1;
  while(left <= right){
    let mid = left + right >> 1;
    console.log(arr[left], arr[mid], arr[right]);
    
    if(arr[mid] == target) return mid;

    else if(arr[left] <= arr[mid]){
      if(arr[left] <= target && target < arr[mid]) right = mid -1;
      else left = mid +1;
    }
    else if(arr[left] > arr[mid]){
      if(arr[mid] < target && target <= arr[right]) left = mid+1;
      else right = mid - 1;
    }
  }
  return -1;
}

// let arr = [8,9,10,11,1,2,3,4,5,6,7]
// let arr = [6,7,8,9,10,11,1,2,3,4]
// let arr = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 1, 2, 3, 4, 5, 6, 7]
// let arr = [4,5,6,7,0,1,2]
// let arr = [1, 3, 5]
let arr = [3,1]
console.log(binaryRotatedArrSearch1(arr,3));
// console.log(binaryRotatedArrSearch(arr, 1));
// console.log(search(arr,1));
// console.log(binarySearch(arr,0,arr.length - 1, 8));