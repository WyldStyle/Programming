function maxSumArr(arr5) {
  console.log(arr5);
  let partialSum = 0, maxSum = 0;
  for (let index = 0; index < arr5.length; index++) {

    if (Math.max.apply(null, arr5) < 0) {
      // console.log(Math.max.apply(null, arr5));
      // return; 
      return Math.max.apply(null, arr);
    }
    partialSum += arr5[index];
    maxSum = Math.max(partialSum, maxSum);
    // console.log(partialSum + "   maxSum = " + maxSum)
    if (partialSum < 0) {
      partialSum = 0;
    }
  }
  return maxSum;
}
let arr5 = [-1, -2, 1, 2, 4, -5, 6, 9, 8, -9, -10, 21, -2, -2];

//let arr5 = [1, 2, -4, 5, 3, 8, -2];

//let arr5 = [-1,5,6 ,3,25,6,-7,-7, 4,4,4];
//let arr5 = [-2, -3, 4, -2 -1,1, -3, 5, -3]
//let arr5 = [-1, -2, -3, -4, -5];
console.log(maxSumArr(arr5));
console.log(maxSubArrSum(arr5));


function maxSubArrSum(arr) {
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}