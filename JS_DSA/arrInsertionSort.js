/*function insertionSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      for (let j = i + 1; j >= 0; j--) {
        if (arr[j - 1] > arr[j]) {
          arr = swap(arr, j);// calling swap function
        }
        else { continue; }
      }
    }
    else { continue; }
  }
  console.log(arr);
}

function swap(arr, index) {
  let c = arr[index];
  arr[index] = arr[index - 1];
  arr[index - 1] = c;
  return arr;


}
  let arr = [-99, 3, 6, 32, 56, 3, 6, 867, 54, 76, 4535, 45, 86, -3, 64, 0, -33];
  console.log(insertionSort(arr));*/
  
  'use strict';

process.stdin.setEncoding('utf-8');

/**
 * @param {number[]} arr
 * @param {number} length
 * @return {number[]}
 */
function sort_array(arr,length){
/*Function to sort the array in ascending order
After sorting return the sorted array */
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j + 1] < arr[j]) {
        arr = swap(arr, j);
      }
    }
  }
  return arr;
}

function swap(arr, j) {
  let c = arr[j];
  arr[j] = arr[j + 1];
  arr[j + 1] = c;
  return arr;
}

//Dont change anything below. If changed click on reset.
async function readInput() {
        let inputString = '';
        var output=[];
        var input=[];
        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
            const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
            var length=parseInt(inputArr[0]);
            for(var i =0;i<length;i++)
            {
                input[i]=parseInt(inputArr[i+1]);
            }
            output = sort_array(input,length)
            for(var i=0;i<output.length;i++)
            {
                console.log(output[i]);
            }   
            process.exit();
            
        })
        

}
readInput();