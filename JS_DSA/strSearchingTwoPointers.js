// function strStuAtEnd(nums)
// {
// let i = 0, j = nums.length - 1, positive = 0;
// let numsN= [], arrP = [];
// for(let i = 0; i < nums.length; i++)
// {
// if(nums[i] < 0)
// {
// numsN.push(nums[i]);
// }
// else { 
// numsP.push(nums[i]);
// }
// }
// return nums = arrP.concat(arrN);
// }
// let nums= [1, -1, 3, 2, -7, -5, 11, 6, -1];
// console.log(strStuAtEnd(nums))
// console.log(swap([1, 2], 0, 1))

// /////////   W A T C H    H I N T


// using 1 pointers -- 10 steps = nums.length -1
// function strStuAtEnd(nums) {
//   let i = 0, count = 0, j = nums.length
//   while (count < nums.length) {
//     if (nums[i] < 0) {
//       nums.push(Number(nums.splice(i, 1).toString()));
//       i--;
//       console.log(count,i, nums[i], `\n`, nums,`\n \n`)
//     }
//       console.log(count,i, nums[i], `\n`, nums)
//     i++;
//     count++;
//   }
//   return nums;
// }



//    using two pointers-- only 5 steps = Math.ceil(nums.length/2)
// but splice is O(n) so not effective
// function strStuAtEnd(nums) {
//   let i = 0, count = 0, j = nums.length - 1, iNeg = nums.length - 2, jNeg = nums.length - 2;
//   while (count <= Math.trunc(nums.length / 2)) {
//     // while(count < Math.ceil(nums.length /2))
//     if (nums[i] < 0) {
//       nums.splice(iNeg, 0, (Number(nums.splice(i, 1).toString())));
//       i--;
//       j--;
//       // console.log(`i < 0 `,count,i, nums[i],j,nums[j],`\n`, nums,`\n \n`)
//     }
//     if (nums[j] < 0) {
//       if (j !== nums.length - 1) {
//         nums.splice(jNeg, 0, (Number(nums.splice(j, 1).toString())));
//         // console.log(`nums[j] < 0 `,count,i, nums[i],j,nums[j], `\n`, nums)
//         j++;
//         iNeg--;
//         jNeg--;
//       }
//     }
//     i++;
//     j--;
//     count++;
//     // console.log(count)
//   }
//   return nums;
// }


// through Sharpner Hints... but order of negative no is not same
function strNegEleAtEnd(nums) {
  let i = 0, jPositive = 0;
  while (jPositive < nums.length) {
    if (nums[i] < 0) {
      if (jPositive > i && nums[jPositive] > 0) {
        swap(nums, i, jPositive);
        i++;
        console.log(nums)
      }
    }
    else if (nums[i] > 0) {
      i++;
    }
    jPositive++;
  }
  return nums;
}

function swap(nums, i, j) {
  nums[i] = nums[i] + nums[j];
  nums[j] = nums[i] - nums[j];
  nums[i] = nums[i] - nums[j];
  return nums;
}

const nums = [1, -2, -3, 3, 2, -7, -5, -9, 11, 6, -10, 13]
//1,3,2,11,6,-1,-2,-3,-7,-5,-9,-10
// console.log(strStuAtEnd(nums))
console.log(strNegEleAtEnd(nums))
// console.log(swap(nums,0,11))
