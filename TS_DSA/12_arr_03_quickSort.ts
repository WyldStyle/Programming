function quickPartition(arr:Array<number>, left:number, right:number){
let pivot = arr[Math.floor((left+right)/2)];
while(left<=right){
    while(arr[left]<pivot){
        left++;
    }
    while(pivot < arr[right]){
        right--;
    }
    if(left <=right){
        swap(arr,left,right);
        left++; right--;
    }
}
return left;
}

function quickSort (arr:Array<number>, left:number, right:number){
    let brkIdx;
    if(arr.length >1){
        brkIdx = quickPartition(arr,left,right);
    }
    if (left < brkIdx -1){
        quickSort(arr,left,brkIdx-1);
    }
    if(brkIdx < right){
        quickSort(arr,brkIdx,right);
    }
    return arr;
}

function swap (arr:Array<number>, left:number, right:number) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  // return arr;
}