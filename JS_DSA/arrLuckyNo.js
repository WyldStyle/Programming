// function luckyNo(arr) {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     let count = 0;
//     for (let j = 0; j <= arr.length - 1; j++) {
//       if (arr[i] == arr[j]) {
//         count++;
//       }
//     }
//     if (arr[i] == count) {
//       return arr[i];
//     }
//   }
//   return 'no lucky num';
// }
let arr = [2, 3, 2, 3, 1, 2, 3];
console.log(luckyNo(arr));

function luckyNo(arr) {
  const countMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (countMap.get(arr[i])) {
      countMap.set(arr[i], countMap.get(arr[i]) + 1);
    }
    else {
      countMap.set(arr[i], 1);
    }
    console.log(countMap)
  }
  console.log(countMap.keys());
  for (let key of countMap.keys()) {
    if (key === countMap.get(key));;;;;;;; {
      return key;
    }
  }
  // console.log(countMap);
}
