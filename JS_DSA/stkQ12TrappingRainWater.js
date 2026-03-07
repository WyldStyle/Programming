// function trapRainWaterslug(height) {
//   let water = 0, [left, depth, right] = [0, 1, 2];
//   for (; left < height.length - 2; left++) {
//     if (height[left] == 0 || height[left] <= height[left + 1]) continue;
//     else if (height[height.length - 2] > height[height.length - 1]) {
//       height.length = height.length - 1; left--; continue;
//     }
//     else {
//       right = rightLimit(height, left);
//       depth = right - 1; let limit = height[left] < height[right] ? height[left] : height[right];
//       console.log(left, depth, right, limit, water);
//       while (depth > left) {
//         if (limit > height[depth]) water += limit - height[depth];
//         depth--
//       }
//       console.log(left, depth, right, limit, water);
//     }
//     left = right - 1;
//   }
//   return water;
// }
// function rightLimit(height, left) {
//   let right = left + 2, maxIdx = right;
//   while (right < height.length) {
//     if (height[left] <= height[right]) return right;
//     maxIdx = height[maxIdx] <= height[right] ? right : maxIdx;
//     right++;
//   }
//   return maxIdx;
// }

// function trapRainWaterslugger(height) {
//   let water = 0, [left, depth, right] = [arrRepair(height,0), 1, 2];
//   for (; left < height.length - 2; left++) {
//     if(height[left] <= height[left + 1]) continue;
//       right = rightLimit(height, left);
//       depth = right - 1; let limit = height[left] < height[right] ? height[left] : height[right];
//       console.log(left, depth, right, limit, water);
//       while (depth > left) {
//         if (limit > height[depth]) water += limit - height[depth];
//         depth--;
//       }
//       console.log(left, depth, right, limit, water);
//     left = right - 1;
//     }
//   return water;
// }


// function trapRainWater(height) {
//   let water = 0, count = 0;
//   let left = arrRepair(height, 0); let right = left + 1, leftMax = left;
//   for (; right < height.length; right++) {
//     // if (height[left] <= height[right]) {
//     //   console.log('here1');
//     //   console.log(left, right, '\n', height[left], height[right], 'water = ', water, '\n\n');
//     //   left = right; count = 0;
//     // }
//     // else {
//     //   console.log('here2');
//     //   console.log(left, right, '\n', height[left], height[right], 'water = ', water,);
//     //   water += height[left] - height[right]; console.log('added water',water);count++;
//     //   if (count > 1 && height[right] >= height[right + 1] || right == height.length - 1) {
//     //     water = water - (count * (height[left] - height[right]));
//     //     left = right; count = 0;
//     //   }
//     //     console.log(left, right, '\n', height[left], height[right], 'water = ', water, '\n\n');
//     // }

//     if(height[left] <= height[right]){
//       left = right; continue;
//     }
//     else{
//       water += height[left] - height[right];
//       count++;
//     if(right == height.length - 1){
//       water = water - (count * (height[left] - height[right]));
//     }
//     }
//   }
//   return water;
// }

// function arrRepair(height, left) {
//   for (let i = 0; i < height.length; i++) {
//     if (height[left] == 0 || height[left] <= height[left + 1]) { left++; continue; }
//     if (height[height.length - 2] >= height[height.length - 1]) { height.length = height.length - 1; continue; }
//     break;
//   }
//   return left;
// }


//leetCode 35 ms
var trap = function(height) {
    let n = height.length;
    let left = 0, right = n - 1, left_max = 0, right_max = 0, water = 0;
    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] > left_max) left_max = height[left];
            else water += left_max - height[left];
            left++;
        } else {
            if (height[right] > right_max) right_max = height[right];
            else water += right_max - height[right];
            right--;
        }
    }
    return water;
}

let chkArr1 = [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
[0, 1, 3, 4, 1, 2, 3, 1, 1, 1, 2, 4],
[0, 1, 3, 4, 1, 2, 3, 1, 1, 1, 2, 3],
[5, 4, 1, 2],
[4, 3, 3, 9, 3, 0, 9, 2, 8, 3],
[9, 6, 8, 8, 5, 6, 3],
[4, 2, 0, 3, 2, 5],
[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
[3, 3, 8, 6, 8, 9, 0, 6, 5, 9, 4, 8],
[5, 4, 2, 5, 7, 8, 6, 2, 9, 1, 6, 9, 1, 0, 3, 7, 7, 7, 3, 4, 7]]

function main(chkArr1) {
  for (let i = 0; i < chkArr1.length; i++) {
    // console.log(chkArr1[i],trap(chkArr1[i]),'\n\n');
    console.log(trap(chkArr1[i]));
  }
}
main(chkArr1);