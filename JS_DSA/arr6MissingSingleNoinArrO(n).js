// Given an Array (arr) of size n. It only contains elements from range [1,n].
// return the missing element

function missingNoinArr(arr) {
  for (let i = 1; i <= arr.length + 1; i++) {
    if (arr.includes(i) == false) {
      return i;
    }
  }
};
// let arr = [3, 0, 1];
// console.log(missingNoinArr(arr));

let arr = [1,2]
function missingNumberNew(arr) {
  const n = arr.length + 1;
  let arrSum = 0;
  const totalSum = n * (n + 1) / 2;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  return totalSum - arrSum;
}
console.log(missingNumberNew(arr));