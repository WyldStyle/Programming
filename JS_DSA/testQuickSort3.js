function testarrQuickSort3(arr, start, end)
{
  if (end - start <= 1)
  {
    return;
  }
  let pivotIndexInitial = arr.length % 2 == 0? arr.length/2 : (arr.length+1)/2;
  let pivot = arr[pivotIndexInitial];
  arr = swaptoLast( arr, pivotIndexInitial);
   let correctIdx = pivotedArr(arr, pivot);
  testarrQuickSort3(arr, start, correctIdx);
  testarrQuickSort3(arr, correctIdx, end);

}


function pivotedArr(arr, pivot)
{
  let swapCounter = 0, index = 0;
  for (index = 0; index < arr.length; index++)
  {
    if ( arr[index] > pivot)
    {
      continue;
    }
    else if ( arr[index] < pivot)
    {
      if ( swapCounter == 0 && arr[0] < pivot)
      {
        swapCounter++;
        continue;
      }
      else if ( swapCounter >= index )
      { 
        //console.log(arr[swapCounter])
        swapCounter++;
        continue; }

      else
      {
        arr = swap(index, swapCounter);
        swapCounter++;
      }
    }
  }
  arr = swap( index - 1, swapCounter);
  return swapCounter;
}

function swap(index,swapCounter)
{
  let d = arr[index];
  arr[index] = arr[swapCounter];
  arr[swapCounter] = d;
  return arr;
}
function swaptoLast(arr, pivotIndexInitial)
{
  let c = arr[pivotIndexInitial];
  arr[pivotIndexInitial] = arr[arr.length - 1];
  arr[arr.length-1] = c;
  return arr;
}

//let arr = [5555, 1000, -1, 5, -33, 5761, 3989, 576, 78, 39, 394, 57, 38, 399, 57, 588, 342];
// let arr = [5555, -1, 5, -33, 5761, 3989, 576, 78, 39, 394, 57, 38, 399, 57, 588, 342];
let arr = [ -1, 5, -33, 5761, 3989, 576, 78, 39, 394, 57, 38, 399, 57, 588, 342, 0];
// let arr = [-1, 5, -33, 5761, 3989, 576, 78, 39, 394, 57, 38, 399, 57, 588, 342];

console.log(arr.length)
console.log(testarrQuickSort3(arr)); 

// [5, 2, -1, 9, 5, -2, 1]

// [-1, 2, 5, 9, 5, -2, 1]
// [-1, -2, 5, 9, 5, 2, 1]
// [-1, -2,| 1,| 9, 5, 2, 5]
// [-1, -2]      [9, 5, 2, 5]
// [-1, -2]      [2,| 5,| 9, 5]
// [-2, -1]              [9, 5]
//                        [5, 9]
//                        [1, 2, -1, 5]
// //[ -1, 5, -33, 5761, 3989, 576, 78, 39, 394, 57, 38, 399, 57, 588, 342, 0];

// for (let i = 0; i < arr.length; i++)
// {

// }
