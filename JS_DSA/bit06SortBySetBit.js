// function bitSetBitCount(num) {
//   let i = 0;
//   for (; num; i++) {
//     num &= bitWiseSubtract(num, 1);
//   }
//   return i;
// }
// function bitWiseAdd(a, b) {
//   let carry = 0;
//   while (b != 0) {
//     carry = a & b;
//     a = a ^ b;
//     b = carry << 1;
//   }
//   return a;
// }

// function bitWiseNegate(a) {
//   return bitWiseAdd(~a, 1);
// }

// function bitWiseSubtract(a, b) {
//   b = bitWiseNegate(b);
//   return bitWiseAdd(a, b);
// }

// // function quickSort(arr, 0, arr.length-1) see this is invalid can't declare like this
// function quickSort(arr, start, end)
// {
//   if (end <= start )
//   {
//     return;
//   }
//   const breakPoint = swapPivotandRepairArr(arr, start, end);
//   quickSort(arr, start, breakPoint -1);
//   quickSort(arr,breakPoint+1, end)
// }

// function swapPivotandRepairArr(arr, start, end)
// {
//   const pvtIdx = end;
//   const pvtEle = arr[end];
//   let swapIdx = start;
//   for (let i = start; i < end; i++)
//   {
//     console.log(`here`, start, end, arr[i], bitSetBitCount(arr[i]), pvtEle)
//     if (bitSetBitCount(arr[i]) < bitSetBitCount(pvtEle))
//     {
//       if(swapIdx < i){
//       swap(arr, swapIdx, i);
//       }
//       swapIdx++;

//     }
//     if (bitSetBitCount(arr[i]) == bitSetBitCount(pvtEle))
//     {
//       if(arr[i] < pvtEle)
//       {
//         if(swapIdx < i)
//         {
//           swap (arr, swapIdx, i)
//         }
//         swapIdx++;
//       }
//     }
//   }
//   if (swapIdx < pvtIdx)
//   {
//     swap(arr, swapIdx, pvtIdx)
//   }
//   return swapIdx;
// }
// function swap ( arr, idx1, idx2)
// {
//   arr[idx1] = arr[idx1] ^ arr[idx2];
//   arr[idx2] = arr[idx1] ^ arr[idx2];
//   arr[idx1] = arr[idx2] ^ arr[idx1];
//   return arr;
// }
// let arr = [1, 5, 10, 7, 8, 9, 3, 15, 63,9, -1]

// console.log(quickSort(arr, 0, arr.length -1));
// console.log(arr);

// upper code compacted in distributable form
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;
  else {
    let breakPoint = quickPartition(arr, start, end);
    quickSort(arr, start, breakPoint - 1);
    quickSort(arr, breakPoint + 1, end);
  }
}
function quickPartition(arr, start, end) {
  let pivotIdx = end, pivot = arr[end],
    swapIdx = start, pivotSetBit = bitCount(pivot)
  for (let i = start; i < end; i++) {
    // console.log(arr);
    if (bitCount(arr[i]) < pivotSetBit) {
      if (swapIdx < i) swap(arr, swapIdx, i);
      swapIdx++;
    }
    if (bitCount(arr[i]) == pivotSetBit) {
      if (arr[i] < pivot) {
        if (swapIdx < i) swap(arr, swapIdx, i)
        swapIdx++;
      }
    }
  }
  if (swapIdx < pivotIdx) swap(arr, swapIdx, pivotIdx);
  return swapIdx;
}

function bitCount(n, count = 0) {
  for (; n; count++) n = n & n - 1;
  return count;
}

function swap(arr, idx1, idx2) {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp;
}

// let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]
let arr2 = [10,2,4,6,2,5,29,192,3 ,23,15]
quickSort(arr2)
console.log(arr2);