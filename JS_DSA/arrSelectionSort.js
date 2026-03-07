function selectionSort1(arr) {
  let i = 0;
  while (i < arr.length) {
    let j = i, min = arr[j], minIdx = j;
    while (j < arr.length) {
      if (min > arr[j]) {
        min = arr[j];
        minIdx = j;
      }
      j++;
    }
    if(minIdx != i) swap(arr,i,minIdx);
    i++;
  }
}
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function arrSelectionSort(arr, length) {
  for (let i = 0; i < length; i++) {
    arr = maxIndex(arr, length, i);
  }
  return arr;
}

function maxIndex(arr, length, i) {
  let max = -Infinity, maxIndex = i;
  for (let j = i; j < length; j++) {
    // console.log(arr)
    //console.log('max = '+max,'   arr[j]  = ',arr[j])
    if (max < arr[j]) {
      max = arr[j];
      maxIndex = j;
    }
  }
  if (maxIndex == i) {
    return arr;
  }
  else {
    return (swap(arr, maxIndex, i));
  }
}

function swap(arr, maxIndex, i) {
  let c = arr[i];
  arr[i] = arr[maxIndex];
  arr[maxIndex] = c;
  return arr;
}

//let arr = [4, 5, 1, 88, -5, 0]

let arr = [-99, 3, 6, 32, 56, 3, 6, 867, 54, 76, 4535, 45, 86, -3, 64, 0, -33]
//let arr = [2]
console.log(arrSelectionSort(arr, arr.length));
//arrSelectionSort(arr, arr.length)