/*
Task details
You are maintaining a register of students roll numbers which is a array the roll numbers can be in sorted or unsorted manner .
The task is to arrange all the roll numbers in ascending order , Find the number of changes required to do so
that number should be minimum

Example 1:
Input:
 nums = {2, 8, 5, 4}
Output: 1
Explanation: swap 8 with 4.

Input:
 nums = {10, 19, 6, 3, 5}
Output: 2
Explanation: swap 10 with 3 and swap 19 with 5.

Input:
 nums = {10, 19, 6, 5, 3}
Output: 3
Explanation: 
1st - swap 10 with 5
then swap 5 with 19
and then swap 19 with 3.

HINT:-
With Example :- {10,9,6,5,3}
    Sort the Array Given to you =>{3,5,6,10,19}
    In HashMap store the correct index of an element =>{3:0,5:1,6:2,10:3,19:4)
    Now since we know the index we can use the Last technique of rotate array concept. (when there is a cycle count will decrease by 1)
  */

// let arr = [5,2,1,4,3];
// let arr = [9, 7, 3, 2, 8, 4];
// let arr = [7, 10, 5, 6, 9, 11, 12, 8]
// let arr = [4,3,2,1,1]
// maps doesn't work
// console.log(howManySwaps(arr));
// function howManySwaps(arr) {
//   let unsortedArr = [];
//   for (let n = 0; n < arr.length; n++) {
//     unsortedArr[n] = arr[n];
//   }
//   const sortedArr = arr.sort((a, b) => a - b);

//   const unsortedMap = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     unsortedMap.set(sortedArr[i], unsortedArr[i]);
//   }
//   // console.log(unsortedMap)
//   let count = 0;
//   // .length = 0;

//   for (let i = 0; i < sortedArr.length; i++) {
//     if (unsortedMap.get(sortedArr[i]) == sortedArr[i]) {
//       console.log(unsortedMap.get(sortedArr[i]), sortedArr[i]);
//       continue;
//     }
//     else {
//       for (let j = i; j < sortedArr.length; j++) {
//         if (unsortedMap.get(sortedArr[j]) != sortedArr[j]) {
//           mapSwap(unsortedMap, sortedArr[j], unsortedMap.get(sortedArr[j]))
//           count++;
//         }
//         console.log(unsortedMap);
//       }
//     }
//   }
//   return count;
// }

// function mapSwap(unsortedMap, idx1, idx2) {
//   let temp1 = unsortedMap.get(idx1);
//   let temp2 = unsortedMap.get(idx2);
//   unsortedMap.set(idx2, temp1);
//   unsortedMap.set(idx1, temp2);
//   return unsortedMap;
// }



//ChatGpt

// function minSwapsToSort(arr) {
//   const n = arr.length;
//   const sortedArr = [...arr].sort((a, b) => a - b);
//   const visited = new Array(n).fill(false);
//   let swaps = 0;
// console.log(arr);
// console.log(sortedArr);
//   for (let i = 0; i < n; i++) {
//     if (visited[i] || arr[i] === sortedArr[i]) {
//       continue;
//     }

//     let cycleSize = 0;
//     let j = i;

//     while (!visited[j]) {
//       visited[j] = true;
//       j = arr.indexOf(sortedArr[j]);
//       cycleSize++;
//     }

//     if (cycleSize > 0) {
//       swaps += cycleSize - 1;
//     }
//   }

//   return swaps;
// }

// // Example usage:
// const arr1 = [1, 2, 1];
// const swaps1 = minSwapsToSort(arr1);
// console.log("Minimum number of swaps to sort arr1:", swaps1);

// // const arr2 = [4, 3, 2, 1, 1];
// const arr2 = [3,4,2,1,1]
// const swaps2 = minSwapsToSort(arr2);
// console.log("Minimum number of swaps to sort arr2:", swaps2);

function howManySwaps(arr) {
  let i = 0, swaps = 0;
  while (i < arr.length) {
    let j = i, min = arr[j], minIdx = j;
    while (j < arr.length) {
      if (min > arr[j]) {
        min = arr[j], minIdx = j;
      }
      j++;
    }
    if (minIdx != i) {
      swap(arr, i, minIdx);
      swaps++;
    }
    i++;
  }
  return swaps;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2]
  arr[idx2] = temp;
}

// let arr = [4, 3, 2, 1, 1];
let arr = [3, 4, 2, 1, 1]
console.log(howManySwaps(arr));