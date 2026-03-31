function mergeSort(arr:Array){
    if (arr.length < 2) return arr; //arr.length == 1;
    let mid = arr.length >> 1; 
  return merge(mergeSort(arr.slice(0,mid)), mergeSort(arr.slice(mid)))
}

function merge(leftA:Array, rightA:Array){
    let leftIdx = 0, rightIdx = 0, mergedArr = [];
    while(leftIdx < leftA.length && rightIdx < rightA.length){
        leftA[leftIdx] < rightA[rightIdx] ? 
        mergedArr.push(leftA[leftIdx++]):
        mergedArr.push(rightA[rightIdx++]);
       //it pushes the element and then increment the indexes. 
    }
    let remLeft = leftA.slice(leftIdx),
    remRight = rightA.slice(rightIdx);
    return mergedArr.concat(remLeft).concat(remRight);
}
function main(arr:Array){
    console.log(mergeSort(arr));
}
    
main([13,5.2,3232,32,23,54,1,-1,-3])
    