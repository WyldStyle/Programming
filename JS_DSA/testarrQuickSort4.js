let arr = [ -1, 5, -33, 5761, 3989, 576, 78, 39, 394, 57, 38, 399, 57, 588, 342, 0];
// repairArr(arr, 15);
// console.log(arr)
// // function findCorrectIdxOfPivot(arr, idx) {
// //   let correctIdx = 0;
// //   for (let i = 0; i < arr.length; i++){
// //     if (arr[i] < arr[idx]) {
// //       correctIdx++;
// //     }
// //   }
// //   return correctIdx;
// // }

// function repairArr(arr, pvtIdx) {
//   const pvtEle = arr[pvtIdx]
//   let swpIdx = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= pvtEle){
//       p1++;
//     } else {

//     }
//   }
//   swap(arr, p1, pvtIdx);
// }

// function swap(arr, idx1, idx2){
//   const temp = arr[idx1]
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// }

// [2, -1, 5, 3, 9, 4]
// [2, -1, 3, 5]

function quickSort(inputArr, start, end) {
	console.log(start, end);
	console.log(inputArr.slice(start, end + 1));
	if (start >= end) {
		return;
	} else {
		let rIdx = findRightIdx(inputArr, end);
		console.log(rIdx);
		swap(inputArr, rIdx, end);
		console.log(inputArr);
		repairArray(inputArr, rIdx);
		console.log(inputArr);
		quickSort(inputArr, start, rIdx - 1);
		quickSort(inputArr, rIdx + 1, end);
	}
}

function findRightIdx(array, idx) {
	let rIdx = 0, temp = array[idx], len = array.length;
	for (let i = 0; i < len; i++) {
		if (array[i] < temp) {
			rIdx++;
		}
	}
	return rIdx;
}

function swap(array, i, j) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

function repairArray(array, idx) {
	let i = 0, j = array.length - 1;
	let pivotElement = array[idx];
	while (i < idx && j > idx) {
		if (array[i] >= pivotElement && array[j] <= pivotElement) {
			swap(array, i, j);
			i++, j--;
		} else if (array[i] < pivotElement) {
			i++;
		} else if (array[j] > pivotElement) {
			j--;
		}
		console.log(array);
	}
}
quickSort(arr);
console.log(arr)