let arr = [1, 2, 3, 4, 5]
console.log(closestArr(arr,4,3));
function closestArr(arr,k,x) {
  let resArr = [];
  let idx = binarySearch(arr,x );
  if (idx) {
    let left = idx, right = idx+1
    while (k) {
      if (arr[left] <= arr[right]) {
        resArr.push(arr[left]);
        left--
      }
      else {
        resArr.push(arr[right]);
        right++
      }
      k--;
    }
  }
  else{
    x--; let  numIdx;
    while(x){
      numIdx = binarySearch(arr,x)
      if(numIdx) break;
      x--;
    }
    console.log(numIdx);
    while(k){
      resArr.push(arr[numIdx])
      numIdx--
      k--;
    }
  }
  return resArr;
}
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else if (target < arr[mid]) right = mid - 1;
  }
  return false;
}

function findClosestElements(arr, k, x) {
    let left = 0;
    let right = arr.length - k;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return arr.slice(left, left + k);
}
// Binary Search, Sorting, Two-Pointer, Sliding Window, Recursion,Frequency Counter