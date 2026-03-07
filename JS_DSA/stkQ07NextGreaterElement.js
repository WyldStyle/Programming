
/*The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

Example 1:
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

Example 2:
Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

Constraints:
    1 <= nums1.length <= nums2.length <= 1000
    0 <= nums1[i], nums2[i] <= 104
    All integers in nums1 and nums2 are unique.
    All the integers of nums1 also appear in nums2.
 
Follow up: Could you find an O(nums1.length + nums2.length) solution?
*/
class StacksNode {
  constructor(data = null, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  }
}

class Stacks {
  #head = null;
  #tail = null;
  #length = 0;
  // check = null

  appendLast_push(data) {
    const newNodeLast =
      new StacksNode(data, this.#tail, null);
    if (!this.#length) {
      this.#head = newNodeLast;
      this.#tail = newNodeLast;
    }
    else {
      this.#tail.next = newNodeLast;
      this.#tail = newNodeLast;
    }
    this.#length++;
  }

  deleteTail_pop(data) {
    if (!this.#length) { return null; }
    const popppedEle = this.#tail.data;
    if (this.#length == 1) {
      this.#head = null;
      this.#tail = null;
    }
    else {
      this.#tail = this.#tail.prev;
      this.#tail.next = null;
    }
    this.#length--;
    return popppedEle;
  }
  isEmpty() { return this.#length == 0; }

  peek() {
    return this.#length == 0 ? null : this.#tail.data;
    // if(!this.#length) return null;
    // else return this.#tail.data; }
  }

  #toMap() {
    let a = this.#head, i = 0;
    const stackMap = new Map();
    while (a) {
      stackMap.set(i, a.data);
      a = a.next;
      i++;
    }
    return stackMap;
  }

  access(nthEle) {
    return this.#toMap.get(nthEle);
  }

  search(findMe) {
    return this.#toMap.has(findMe);
  }

  toMap() {
    return this.#toMap();
  }
}


// var nextGreaterElement = function(nums1, nums2) {
//   let resArr = [];
//   for(let i = 0; i < nums1.length; i++){
//       resArr.push(search(nums1[i], nums2))
//   }  
//   return resArr;
// };
// function search(iEle, nums2){
//    for(let j = 0; j < nums2.length; j++){
//         if(nums2[j] == iEle){
//             for(let k = j+ 1; k < nums2.length; k++){
//                 if(nums2[k] > iEle) {
//                     return nums2[k];
//                 }
//             }
//         }
//     }
//     return -1;
// }

// 2nd try
function nextGreaterElement(nums1, nums2) {
  const nums2Map = new Map(), resArr = new Array(nums1.length).fill(-1);
  for (let i = 0; i < nums2.length; i++) {
    nums2Map.set(nums2[i], i);
  }
  for (let j = 0; j < nums1.length; j++) {
    for (let k = nums2Map.get(nums1[j]); k < nums2.length; k++) {
      if (nums2[k] > nums1[j]) { resArr[j] = nums2[k]; break; }
    }
  }
  return resArr;
}
// leetcode
var nextGreaterElement1 = function (nums1, nums2) {
  let stack = [];
  let map = new Map();
  for (const num of nums2) {
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    res.push(map.get(nums1[i]) || -1);
  }
  return res;
};

function nextGreaterElement3(nums1, nums2) {
  let numMap = new Map(), stack1 = new Stacks();
  for (let i = 0; i < nums2.length; i++) {
   
    while(!stack1.isEmpty() && nums2[i] > stack1.peek()){
      numMap.set(stack1.deleteTail_pop(), nums2[i]);
    }
    stack1.appendLast_push(nums2[i]);
  }
  let resArr = [];
  for (let j = 0; j < nums1.length; j++) {
    // numMap.has(nums1[j]) ? resArr.push(numMap.get(nums1[j])) : resArr.push(-1);
    resArr.push(numMap.get(nums1[j]) || -1);
  }
  return resArr;
}


// const nums1 = [1, 3, 5, 2,7, 4], nums2 = [6, 5, 4, 2, 1, 7, 5, 2, 3, 8]
// const nums1 = [1], nums2 = [1]
const nums1 = [7,3,4,5,6,2], nums2 = [5,8,1];

console.log(nextGreaterElement1(nums1, nums2));
console.log(nextGreaterElement(nums1, nums2));
console.log(nextGreaterElement3(nums1, nums2));