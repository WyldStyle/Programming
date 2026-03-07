function binarySearch(nums, target) {
  let low = 0, high = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((low + high) / 2);
    if (low > high || low < 0 || high > nums.length - 1) {
      return - 1;
    }
    if (nums[mid] == target) {
      return mid;
    }
    else {
      if (nums[mid] > target) {
        high = mid - 1;
      }
      else if (nums[mid] < target) {
        low = mid + 1;
      }
    }
    // console.log(mid, nums[mid])
  }
  return -1;
}

// let nums = [-1,0,3,5,9,12];
// console.log(binarySearch(nums, 9))

// let nums = [5]
// console.log(binarySearch(nums, -5))
// console.log(binarySearchSammieBae(nums, 5))

let nums = [1, 3];
console.log(binarySearch(nums,3))
console.log(binarySearchSammieBae(nums, 3))

function binarySearchSammieBae(nums, target) {
  let lowIdx = 0, highIdx = nums.length - 1;
  while (lowIdx <= highIdx) {
    let mid = Math.floor((lowIdx + highIdx) / 2);
    if (nums[mid] == target) {
      return mid;
    }
    else if (nums[mid] < target) {
      lowIdx = mid + 1;
    }
    else {
      highIdx = mid -1;
    }
  }
  return -1;
}