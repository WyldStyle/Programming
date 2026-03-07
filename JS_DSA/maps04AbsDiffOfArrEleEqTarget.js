let arr = [3,2,34,12,5,767,6,54,55]
console.log(absDiff(arr,6));

function absDiff(arr,target){
  const arrMap = new Map();
  // let j = 0;
  // while (j < arr.length) {
  //   arrMap.set(arr[j],j);
  //   j++;
  // }
  // j = 0;
  // while(j < arr.length){
  //   arrMap.delete(arr[j]);
  //   if(arrMap.has(arr[j] - target)) return [j, arrMap.get(arr[j] - target)]
  //   j++;
  // }
  while(arr.length){
    arrMap.set(arr[arr.length - 1], arr.length - 1);
    arr.length--;
  }
  for(let [element,index] of arrMap.entries()){
    arrMap.delete(element);
    if(arrMap.has(Math.abs(element - target))) return [index, arrMap.get(Math.abs(element - target))];
    if(arrMap.has(Math.abs(element+target))) return [index,arrMap.get(Math.abs(element+target))]
  }

}
