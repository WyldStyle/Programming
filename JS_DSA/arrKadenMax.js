
// let arr = [-1, 5, -33, 5761, 3989, 576, 78, 394, 57, 38, 399, 57, 588, 342, 0];
// let arr = [1, 2, -4, 5, 3, 8, -2];

let arr = [-1,5,6 ,3,25,6,-7,-7, 4,4,4];
// let arr = [-2, -3, 4, -2 -1,1, -3, 5, -3]
// let arr = [-1, -2, -3, -4, -5];
function maxInArr(arr) {
  if (Math.max.apply(null, arr) < 0) {
    return Math.max.apply(null, arr);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr.shift();
    }
    else if (arr[i] > 0) {
      break;
    }
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 0) {
      arr.pop();
    }
    else if (arr[i] > 0) {
      break;
    }
  }
console.log(arr)
  let partialSum = 0, maxSum = 0;
  for (let j = 0; j < arr.length; j++) {
    partialSum += arr[j];
    arr.unshift();
    if (partialSum > maxSum) {
      maxSum = partialSum;
    }
    if (partialSum < 0) {
      partialSum = 0;
    }
  }
  return maxSum;
}
console.log(maxInArr(arr))