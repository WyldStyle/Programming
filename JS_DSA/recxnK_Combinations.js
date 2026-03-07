//since in Combinations, order doesn't matter, we have to
// traverse from root to leaves 
// ie in an Array just move arr[0] is root, arr[i] is parent
// and arr[i+1] to arr[arr.length - 1] is child

// kLengthCombinationsIterative(arr)
// console.log('see how it fails to print 1,3 so we will have to use n loops');
function kLengthCombinationsIterative(arr) {
  let i = 0, end = arr.length - 1;
  while (i <= end) {
    let j = i, tempArr = [];
    while (j <= end) {
      tempArr.push(arr[j])
      j++;
      console.log(tempArr);
    }
    i++;
  }
}


//permutations n combinations are possible with recursions only;
function kLengthCombinations(arr, current = 0, tempArr = [], end = arr.length - 1) {
  for(let i = current; i < arr.length; i++){
    tempArr.push(arr[i])
    console.log(tempArr);
    kLengthCombinations(arr,current+1,tempArr)
    tempArr.pop()
    current++;
  }
}

// let arr = [1, 2, 3,4];
let arr =  ['Gill','Virat','Bumrah','Siraj','Shafique','Rizwan','Ali','Iftikhar']
kLengthCombinations(arr)
