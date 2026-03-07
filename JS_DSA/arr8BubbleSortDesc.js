function arrBubbleSortDesc(arr, length) {
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        arr = swapBubble(arr, j);
      }
    }
  }
  return arr;
}

function swapBubble(arr, j) {
  let c = arr[j];
  arr[j] = arr[j + 1];
  arr[j + 1] = c;
  return arr;
}

let arr = [-1, 5, 2, 6, 66, 2, -22, 66, 43, 6, 2, 6, 8];
console.log(arrBubbleSortDesc(arr, arr.length));