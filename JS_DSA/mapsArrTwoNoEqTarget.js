let nums = [2, 7, 11, 15, 11];
console.log(twoSum(nums, 13))

function twoSum(nums, target) {
  const mapOfArr = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (mapOfArr.has(target - nums[i])) {
      return [mapOfArr.get(target - nums[i]), i]
    }
    mapOfArr.set(nums[i], i);
  }
}