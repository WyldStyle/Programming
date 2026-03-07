function printArr(currIdx) {
  if (currIdx == arr.length - 1) {
    console.log(arr[currIdx]);
    return;
  }
  console.log(arr[currIdx]);
  printArr(currIdx + 1);
}
let arr = [1, 2, 3, 4, 5];
printArr(0);
