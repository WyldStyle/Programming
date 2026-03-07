function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        arr = swap(arr, j);
        console.log('i = ' + i + "  arr[i] = " + arr[i] + " j = " + j + ' arr[j] = ' + arr[j] +
          '  arr[j+1] = ' + arr[j + 1]);
        console.log(arr + '\n \n')
      }
    }
  }
  console.log(arr);
}

function swap(arr, j) {
  let c = arr[j];
  arr[j] = arr[j + 1];
  arr[j + 1] = c;
  return arr;
}

let arr = [-99, 3, 6, 32, 56, 3, 6, 867, 54, 76, 4535, 45, 86, -3, 64, 0, -33]
bubbleSort(arr);

function bubbleSort(arr){
  let i = 0;
  while(i < arr.length){
    // let j = 0;
    // while(j < arr.length){
    //   if(arr[i] < arr[j]) swap(arr,i,j) //ascending
    //   if(arr[i] > arr[j]) swap(arr,i,j) //descending
    //   j++;
    // }
    // these implement the principle of selection sort 
    // by placing the smallest/largest element 1st
    let j = i;
    while(j < arr.length){
      if(arr[i] > arr[j]) swap(arr,i,j)
      console.log(i,arr[i],j,arr[j],arr);
      j++;
    }
    i++;
  }
}