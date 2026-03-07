/*
Given an unsorted array Arr of size N of positive integers. 
One number 'A' from set {1, 2,....,N} is missing and one number
 'B' occurs twice in array. Find these two numbers.
Input:
N = 2
Arr[] = {2, 2}
Output: 2 1
Explanation: Repeating number is 2 and 
smallest positive missing number is 1.
Input:
N = 3
Arr[] = {1, 3, 3}
Output: 3 2
Explanation: Repeating number is 3 and 
smallest positive missing number is 2.
*/
// 1 + 2 + 3 = 6
// 1+ 3 + 3 = 7 - 3 = 4
// 6 - 4 = 2
// 1+1+3 = 5
// 6-5 = 1


function missing_n_Double(arr) {
  const n = arr.length, setArr = new Set();

  const sumN = n * (n + 1) / 2;
  let sumArr = 0, repeatedNum = null, missingNo = null;

  for (let i = 0; i < n; i++) {
    sumArr += arr[i];
    if (!setArr.has(arr[i])) setArr.add(arr[i]);
    else repeatedNum = arr[i];
  }
  missingNo = (sumN - (sumArr - repeatedNum));
  // let difference = Math.abs(sumN - sumArr);
  // missingNo = sumArr > sumN ? repeatedNum - difference : repeatedNum + difference;

  return [repeatedNum, missingNo]
}
// let arr = [1, 2, 3, 3]
let arr = [1, 1, 2, 4]
console.log(missing_n_Double(arr));
