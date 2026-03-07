// don't use
function oddSubArrSum(arr) {
  let sum = 0, sum1 = 0; let testArr = [];
  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (i % 2 == 0 && j % 2 == 0) {
        sum1 += sum;
        testArr.push(sum);
      }
      if (i % 2 != 0 && j % 2 != 0) {
        sum1 += sum;
        testArr.push(sum);
      }

    }
  }
  return sum1;
}

function arrSumOddLengthSubarrays(arr) {
  let totalSumOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    let partialSum = 0;
    for (let j = i; j < arr.length; j++) {
      partialSum += arr[j];
      if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
        totalSumOdd += partialSum;
      }
    }
  }
  return totalSumOdd;
}

/* 
[ 1, 2 , 3, 4, 5]
1
1 + 2 not req
1 + 2 + 3
1 + 2 + 3 + 4 not req
1 + 2 + 3 + 4 + 5

2
2 + 3 not req
2 + 3 + 4
2 + 3 + 4 + 5 not req

3
3 + 4 not req
3 + 4 + 5

4
4 + 5 not req

5

concept: find out the no of times current number is used and multiply by that no
*/

  // let arraysStartingWithCurrentNum = arr.length - i;
  // let arraysMid&EndingWithCurrentNum = i + 1;
  // half of them are odd and half of them are even
  // for i = 3, total 9 subarry, 4 even not req, 5 odd req so Math.ceil

  // this is time wise faster
function arrSumOddLengthSubarraysFastest(arr) {
  let sum = 0; 
  for (let i = 0; i < arr.length; i++) {
  sum += Math.ceil((arr.length- i) * (i + 1) / 2) * arr[i];
  }
  return sum;
}

//this is memory wise faster
function arrSumOddLengthSubarraysFastest(arr) {
  let sum = 0, delC = 0, k = arr.length;
  for (let i = 0; i < k; i++) {
    sum += Math.ceil((k - delC) * (delC + 1) / 2) * arr[0];
    arr.shift();
    delC++;
    console.log(i, sum, arr);
  }
  return sum;
}
  let arr = [1, 2, 3, 4, 5];
  oddSubArrSum(arr);
  console.log(oddSubArrSum(arr));
console.log(arrSumOddLengthSubarraysFastest(arr))