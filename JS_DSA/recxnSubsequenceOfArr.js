const subseqOfArr = (arr = [],tempArr = [], current = 0) => {
  for(let i = current; i < arr.length; i++){
    tempArr.push(arr[i]);
    console.log(tempArr);
    subseqOfArr(arr,tempArr,i+1)
    tempArr.pop();
  }
}
subseqOfArr([1,2,3]);