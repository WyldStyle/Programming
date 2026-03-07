function mergeSort(arr) {
  console.log(arr);
  if (arr.length == 1) {
    return arr;
  }
  else {
    let [leftArr, rightArr] = breakArr(arr); // array destructuring 
    //console.log('leftArr = ',leftArr ,'              rightArr = ',rightArr)
    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }
}

function breakArr(arr) {
  let leftArr = [], rightArr = [];
  const mid = Math.ceil(arr.length / 2)
  for (let idiv = 0; idiv < arr.length; idiv++) {
    if (idiv < mid) {
      leftArr[idiv] = arr[idiv];
    }
    else {
      rightArr[idiv - mid] = arr[idiv];
    }
  }
  return [leftArr, rightArr];
}


function merge(arr1, arr2) {
  const [arrLong, arrShort] = getLengthWiseArr(arr1, arr2);
  let j = 0, k = 0, mergedArr = [];
  while (j < arrLong.length && k < arrShort.length) {
    if (arrLong[j] < arrShort[k]) {
      mergedArr[k + j] = arrLong[j];
      j++;
    }
    else {
      mergedArr[k + j] = arrShort[k];
      k++;
    }
  }
  if (j < arrLong.length) {
    for (; j < arrLong.length; j++) {
      mergedArr[k + j] = arrLong[j];
    }
  }
  else if (k < arrShort.length) {
    for (; k < arrShort.length; k++) {
      mergedArr[k + j] = arrShort[k];
    }
  }
  return mergedArr;
}

function getLengthWiseArr(arr1, arr2) {
  if (arr1.length >= arr2.length) {
    return [arr1, arr2];
  } else {
    return [arr2, arr1]
  }
}

let arr1 = [3, 5, 7], arr2 = [-1, 0, 1, 2, 3, 6, 9]
 let arr3  = [8,9, 8, 7.24, -5, 0, -5, 88, 99,-9, Infinity];

//let arr3 = [3, 1, -1, 2]
// console.log(mergeSort(arr3));
//console.log(merge([-1], [2]))


// Merge Sort Sammie Bae
function mergeSort(arr){
  if(arr.length <2) return arr;
  let mid = arr.length >> 1;
  return merge(mergeSort(arr.slice(0,mid)), mergeSort(arr.slice(mid)))
}

function merge(leftA, rightA){
  let leftIdx = 0, rightIdx = 0;
  let mergedArr = [];
  while(leftIdx < leftA.length && rightIdx < rightA.length){
    leftA[leftIdx] < rightA[rightIdx] ? mergedArr.push(leftA[leftIdx++]) :
    mergedArr.push(rightA[rightIdx++]);
  }
  let remLeft = leftA.slice(leftIdx),
  remRight = rightA.slice(rightIdx);
  return mergedArr.concat(remLeft).concat(remRight);
}