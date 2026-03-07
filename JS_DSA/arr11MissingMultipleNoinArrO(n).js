/*Given an Array (arr) of size n. It only contains elements from range [1,n].
Return an Array of all integers in the range [1,n] that do not appear in the array.
You Have to solve this question without using any extra array.
Hint:- Try using the last approach of rotate arrays Question
Example 1:Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Explanation:- All elements are present from 1 to 8 except 5 and 6.
Example 2:Input: nums = [1,1]
Output: [2]
Explanation:- Elements that should be present is 1,2 (because n is 2 ) but 2 is missing.
Constraints:n == nums.length1 <= n <= 10^51 <= nums[i] <= n
*/

// let arr = [1, 3, 4, 5, 6, 7, 9, 3, 5, 4];
let arr = [1, 2, 3, 5, 6, 7, 7]

function missingNOsinArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[Math.abs(arr[i]) - 1] > 0) {
      arr[Math.abs(arr[i]) - 1] = 0 - arr[Math.abs(arr[i]) - 1];
      // subtracting from 0 is faster than multiplying by -1;
    }
  }
  let res = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > 0) {
      res.push(j + 1);
    }
  }
  return res;
}
console.log(missingNOsinArr(arr));


function missing_elements(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let num = Math.abs(arr[i]);
    let idx = num - 1;
    arr[idx] = Math.abs(arr[idx]) * -1;
    console.log(arr)
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) res.push(i + 1);
  }
  return res;
  // Time Complexity: O(N)
  // Space Complexity: O(1)for(let k = arr.length; k > 0; k-- )
  //  space complexity is O(1) or O(n);
}


// function missing_elements1(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[Math.abs(arr[i]) - 1] > 0) {
//       arr[Math.abs(arr[i]) - 1] *= -1;
//     }
//   }
//   for (let j = arr.length - 1; j > 0; j--) {
//     if (arr[j] > 0) {
//       res.unshift(j + 1);
//     }
//     // arr.pop();
//     arr.length = arr.length - 1;
//   }
//   return res;
// }

// [-1, 3...]
// [-1, 3,-4,5...]
// [-1, 3, -4,-5, 6....]
// [-1, 3, 4,-5, -6, ....]
// console.log(missing_elements(arr))
// console.log(missing_elements1(arr))