/*
Task details
You are Given an array Sorted in ascending order. 
Find the Starting and ending Position of a given Target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:
Input: nums = [5,7,7,8,8,8,8,8,8,10], target = 8
Output: [3,8]

Example 3:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

// function binaryElementIdxsSearch(arr, target) {
//   let firstMid = binarySearch(arr, 0, arr.length - 1, target)
//   if (firstMid === -1) {
//     return [-1, -1];
//   }
//   else {
//     return [leftIdxSearch(arr, 0, firstMid, target),
//     rightIdxSearch(arr, firstMid, arr.length - 1, target)];
//   }

// }

// function binarySearch(arr, left, right, target) {
//   // let left = 0, right = arr.length - 1;
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

// function leftIdxSearch(arr, left, mid, target) {
//   while (binarySearch(arr, left, mid - 1, target) != -1) {
//     // console.log('checking leftIdx')
//     mid = binarySearch(arr, left, mid - 1, target);
//   }
//   // console.log('mid', mid)
//   return mid;
// }

// function rightIdxSearch(arr, mid, right, target) {
//   while (binarySearch(arr, mid + 1, right, target) != -1) {
//     // console.log('checking right')
//     mid = binarySearch(arr, mid + 1, right, target);
//   }
//   return mid;

// }

// //2nd try - same thing better syntax
// function binarySearch(arr, left = 0,
//   right = arr.length - 1, target) {
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] == target) { return mid; }
//     else if (target < arr[mid]) { right = mid - 1; }
//     else if (target > arr[mid]) { left = mid + 1; }
//   }
//   return -1;
// }

// function findingleftIdx(arr, target, mid) {
//   let leftIdx = mid;
//   let searchingLeft = binarySearch(arr, 0, mid - 1, target);
//   while (searchingLeft !== -1) {
//     leftIdx = searchingLeft;
//     searchingLeft = binarySearch(arr, 0, searchingLeft - 1, target)
//     console.log(leftIdx);
//   }
//   return leftIdx;
// }

// function findingRightIdx(arr, target, mid) {
//   let rightIdx = mid;
//   let searchingRight = binarySearch(arr, mid + 1, arr.length - 1, target);
//   while (searchingRight !== -1) {
//     rightIdx = searchingRight;
//     searchingRight = binarySearch(arr, searchingRight + 1, arr.length - 1, target);
//   }
//   return rightIdx;
// }

// function repeatingEleIdx(arr, target) {
//   let mid = binarySearch(arr, 0, arr.length - 1, target);
//   if (mid == -1) { return -1; }
//   return [findingleftIdx(arr, target, mid), findingRightIdx(arr, target, mid)];
// }


// leetCode



// console.log();
// leetCode: Genius Solution;
var searchRange = function (N, T) {
  const find = (target, arr, left = 0, right = arr.length - 1) => {
    while (left <= right) {
      let mid = left + right >> 1
      if (arr[mid] < target) left = mid + 1
      else right = mid - 1
    }
    return left
  }
  let Tleft = find(T, N)
  if (N[Tleft] !== T) return [-1, -1]
  return [Tleft, find(T + 1, N, Tleft) - 1]
};



// let arr = [5, 7, 7, 8, 8, 8, 8, 8, 8, 10];
let arr = [1,1,1,1,1,1]
// let arr = [5,6,7,8,9,10];

// console.log(searchRange(arr, 8));



console.log(element_search(arr,8));

function idxSearch(arr, target, left = 0, right = arr.length - 1) {
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return left;
}

function element_search(arr,target){
  let leftIdx = idxSearch(arr,target);
  if(arr[leftIdx] !== target) return [-1,-1];
  return [leftIdx, idxSearch(arr,target + 1,leftIdx) - 1]
}