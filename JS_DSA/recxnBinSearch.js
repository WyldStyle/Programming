// const binSearchRecxn = (arr,target, left = 0, right = arr.length - 1) => {
//   let mid = ((left + right) / 2) >> 1;
//   console.log(mid);
//   if(left > right) return -1;
//   if(arr[mid] == target) return mid;
//   else{
//     if(arr[mid] < target) left = mid + 1;
//     if( target < arr[mid]) right = mid - 1;
//     binSearchRecxn(arr, left, target, right);
//   }
// }

function binSearchRecxn(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  let mid = Math.floor((left + right) / 2)
  if (arr[mid] == target) return mid;
  else if (arr[mid] < target) {
    return binSearchRecxn(arr, target, mid + 1, right);
  }
  else if (target < arr[mid]) {
    return binSearchRecxn(arr, target, left, mid - 1)
  }
}

let arr = [1, 3, 5, 7, 9]
console.log(binSearchRecxn(arr, 7));