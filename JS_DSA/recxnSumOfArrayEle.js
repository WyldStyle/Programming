
const recxnSumArrEle = (arr, index) => {
  if (index === arr.length - 1) {
    console.log(`Base Case: index is ${index}`);
    return arr[arr.length - 1]
  }
  console.log(`At index ${index}`);
  const total = arr[index] + recxnSumArrEle(arr, index + 1);
  console.log(`Total at index: ${index} is ${total}`);
  return total;
}

const recxnSumArrEleReverse = (arr, index) => {
  if (index == 0) return arr[0];
  let total = arr[index] + recxnSumArrEleReverse(arr, index - 1);
  return total;
}

function sumArrEle(arr, index = 0) {
  // if(index == arr.length) return 0; also works
  if (index == arr.length - 1) return arr[index]
  // traverses one less time;
  else {
    let sum = arr[index] + sumArrEle(arr, index + 1);
    return sum;
  }
}

function sumArrEle1(arr, index = 0, sum = 0) {
  // if(index == arr.length - 1) return arr[index];
  if (index == arr.length) return sum;
  else {
    return sum += arr[index] + sumArrEle1(arr, index + 1, sum);
  }
}
let arr1 = [1, 2, 3, 4, 5]
console.log(sumArrEle(arr1));
console.log(sumArrEle1(arr1));

let arr = [1, 2, 5, 6, 7]
// console.log(sum1(arr,0, arr.length - 1));
console.log(recxnSumArrEle(arr, 0));
console.log(recxnSumArrEleReverse(arr, arr.length - 1));

// Al Swegart - this code doesn't make it faster but
// it enables parallel processing i.e. CPUs don't have to wait
// for the sum of previous half of element and hence multiple 
// CPUs can work together;
function sumDivConq(numbers) {
  if (numbers.length === 0) { // BASE CASE
    return 0;
  } else if (numbers.length === 1) { // BASE CASE
    return numbers[0];
  } else { // RECURSIVE CASE
    let mid = Math.floor(numbers.length / 2);
    let leftHalfSum = sumDivConq(numbers.slice(0, mid));
    let rightHalfSum = sumDivConq(numbers.slice(mid, numbers.length + 1));
    return leftHalfSum + rightHalfSum;
  }
}