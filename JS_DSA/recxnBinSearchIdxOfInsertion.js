/*Find the index where a given element would be inserted into a given sorted array; */

// function binarrySearchIdxIterative(arr, target, left = 0, right = arr.length - 1) {
//   while (left <= right) {
//     let mid = Math.floor((left + right) /2 );
//     console.log(left ,mid, right);
//     if (arr[mid] <= target && target < arr[mid + 1]) return mid;
//     else if(arr[mid - 1] < target && target <= arr[mid]) return mid;
//     else if (arr[mid] < target) left = mid + 1;
//     else if (target < arr[mid]) right = mid - 1;
//   }
//   if(left == 0 && right <= left) return 0;
//   else return arr.length - 1
// }
// let arr = [1,3,5,7,9,11]
// let arr = [1,3,5,7]
// let arr = [1,3,5,6]
// let arr = [5]
// let arr = [1,5]
