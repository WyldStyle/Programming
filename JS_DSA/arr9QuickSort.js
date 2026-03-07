let arr = [-1, 5, -33, 5761, 3989, 576, 78, 394, 57, 38, 399, 57, 588, 342, 0];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
let arr1 = [1, 2, 3, 4, 5,7, 6];
quickSortSammieBae(arr1, 0, arr1.length - 1);
console.log(arr1);

// ashutosh's
function quickSort(arr, start, end) {
  if (end <= start) {
    return;
  }
  const breakPoint = swapPivotAndRepairArr(arr, start, end);
  quickSort(arr, start, breakPoint - 1);
  quickSort(arr, breakPoint + 1, end);
}

function swapPivotAndRepairArr(arr, start, end) {
  const pvtIdx = end;
  const pvtEle = arr[pvtIdx];
  let swapIdx = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pvtEle) {
      if (swapIdx < i) {
        swap(arr, swapIdx, i);
      }
      swapIdx++;
    }
  }
  if (swapIdx < pvtIdx) {
    swap(arr, swapIdx, pvtIdx);
  }
  return swapIdx;
}

function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// ------------Sammie Bae's QuickSort Middle Element----
function quickSortSammieBae(arr, left, right) {
  let brkindex;
  // if(left < right) also works;
  if (arr.length > 1) {
    brkindex = quickPartition(arr, left, right);

    if (left < brkindex - 1) {
      quickSortSammieBae(arr, left, brkindex - 1);
    }
    if (brkindex < right) {
      quickSortSammieBae(arr, brkindex, right);
    }
  }
  return arr;
}

function quickPartition(arr, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (pivot < arr[right]) {
      right--;
    }

    if (left <= right) {
      swap1(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
}

function swap1(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  // return arr;
}

//removing worst case problem in quicksort;
// there's a problem here resolve it;
// let arr3 = [2, 3, 542, 2, 2, 6, 57, 34, 2, 57, 34, 3523, 4]
let arr3 = [1,2,3,2,4,3]
// let arr3 = [1, 2, 3, 4, 5,3]
// let arr3 = [2]
// let arr3 = [2,1];
// let arr3 = [5,4,3,2,1]
checkDescending(arr3);
console.log(arr3);

// worst case would be if the last element is > previous element
// for that well we have to cut the arr
// think how to remove that
function checkDescending(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < arr[i+1]) {
      return quickSortSBModified(arr);
    }
  }
  for(let i = 0; i < arr.length >> 1; i++){
    swap(arr,i, arr.length - 1 - i);
  }
}
function quickSortSBModified(arr, left = 0, right = arr.length - 1) {
  if (arr.length > 1) {
    let [brkindex,swapped] = quickPartitionSBMod(arr, left, right);
    if(!swapped) return arr;
    if (left < brkindex - 1) quickSortSBModified(arr, left, brkindex - 1);
    if (brkindex < right) quickSortSBModified(arr, brkindex, right);
  }
  // return arr;
}

function quickPartitionSBMod(arr, left, right) {
  let pivot = arr[(left + right) >> 1],swapped = 0
  while (left <= right) {
    while (arr[left] <= pivot) { left++; } // dont have to add brackets
    while (arr[right] > pivot) { right--; }
    if (left < right) {
      swap(arr, left, right);
      left++; right--;
      swapped++;
    }
  }
  return [left,swapped]
}
// function swap(arr, left, right) {
//   let temp = arr[left];
//   arr[left] = arr[right];
//   arr[right] = temp;
// }