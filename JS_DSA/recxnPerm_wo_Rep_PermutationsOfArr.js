let count = 0;
//Sammie Bae
const permutationOfArray = (arr, current, end) => {
  if (current == end) {
    console.log(arr);
  }
  else {
    for (let i = current; i <= end; i++) {
      console.log(i, arr[current], arr[i]);
      swap(arr, current, i)  // swap(arr,i,current)
      permutationOfArray(arr, current + 1, end)
      swap(arr, i, current); // swap(arr,current,i)
    }
  }
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp;
}

let arr = ['a', 'b', 'c'];
// permutationOfArray(arr,0,arr.length - 1)

//Al Swegart
function getPerms(chars, index) {
  if (chars.length === 1) return [chars];
  let permutations = [];
  let head = chars[0];
  let tail = chars.substring(1);
  let tailPermutations = getPerms(tail, index + 1);

  for (let tailPerm of tailPermutations) {
    for (let i = 0; i < tailPerm.length + 1; i++) {
      let newPerm = tailPerm.slice(0, i) + head + tailPerm.slice(i);
      permutations.push(newPerm);
    }
  }
  return permutations;
}

// console.log(getPerms('abc',0));
// console.log(getPerms(arr.join(""),0));

let recxnNo = 0, returned = 0, total = 0;
//uncomment this to see the working of Sammie Bae's prog
// function perXmenArrayUsingSwap(arr, current = 0, end = arr.length - 1) {
//   total++;
//   if (current == end) {
//     returned++;
//     console.log('at end', 'total',total, arr)
//   }
//   else {
//     recxnNo++;
//     for (let index = current; index <= end; index++) {
//       console.log(`current is ${current} ${arr[current]} index is ${index} ${arr[index]}`)
//       swap(arr, current, index);
//       console.log(`swapped current ${current} [${arr[current]}] & index ${index} [${arr[index]}]`,arr)
//       perXmenArrayUsingSwap(arr, current + 1);
//       console.log(`current is ${current} ${arr[current]} index is ${index} ${arr[index]}`)
//       swap(arr, index, current);
//       console.log(`swapped again current ${current} [${arr[current]}] & index ${index} [${arr[index]}]`,arr)

//     }
//   }
//       console.log(arr, total);
// }
// perXmenArrayUsingSwap(arr, recxnNo);
// console.log(total, returned, recxnNo);