function luckyNo(arr) {
  const luckyMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (luckyMap.has(arr[i])) {
      // luckyMap.set(i) = luckyMap.get(i) + 1; won't work
      luckyMap.set(arr[i], luckyMap.get(arr[i]) + 1);
    }
    else {
      luckyMap.set(arr[i], 1);
    }
  }
  console.log(luckyMap);
  // for(let i = luckyMap.size; i >= 0; i--)
  // {
  //   console.log(luckyMap.keys(i), luckyMap.values(i));
  //   if(luckyMap.keys(i) == luckyMap.values(i))
  //   return luckyMap.keys(i);
  // }
  let max = -1;
  for (let [num, freq] of luckyMap.entries()) {
    if (num == freq) {
      if (max < freq) {
        max = freq;
      }
    }
  }
  return max;
}

let arr = [2, 2, 3, 4];
console.log(luckyNo(arr))
console.log(findLucky(arr))


function findLucky(arr) {
  const map = new Map;
  let max = -1

  for (let i of arr) {
    map.set(i, map.get(i) + 1 || 1)
  }

  for (let [key, value] of map) {
    if (value == key) {
      max = Math.max(max, value)
    }
  }
  return max
};