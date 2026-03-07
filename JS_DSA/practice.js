function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;
  else {
    let breakPoint = quickPartition(arr, start, end);
    quickSort(arr, start, breakPoint - 1);
    quickSort(arr, breakPoint + 1, end);
  }
}
function quickPartition(arr, start, end) {
  let pivotIdx = end, pivot = arr[end],
    swapIdx = start, pivotSetBit = bitCount(pivot)
  for (let i = start; i < end; i++) {
    // console.log(arr);
    if (bitCount(arr[i]) < pivotSetBit) {
      if (swapIdx < i) swap(arr, swapIdx, i);
      swapIdx++;
    }
    if (bitCount(arr[i]) == pivotSetBit) {
      if (arr[i] < pivot) {
        if (swapIdx < i) swap(arr, swapIdx, i)
        swapIdx++;
      }
    }
  }
  if (swapIdx < pivotIdx) swap(arr, swapIdx, pivotIdx);
  return swapIdx;
}

function bitCount(n, count = 0) {
  for (; n; count++) n = n & n - 1;
  return count;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp;
}

let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]
quickSort(arr)
console.log(arr);