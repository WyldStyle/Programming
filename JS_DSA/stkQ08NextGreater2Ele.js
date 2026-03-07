
// ------------------- S T A C K S -----------------
class StacksNode {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
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
function nextGreaterElementslug(nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i + 1; j <= nums.length; j++) {
      if (j == nums.length & count < 2) { j = 0; count++ }
      if (nums[i] < nums[j] && count < 2) { arr.push(nums[j]); break; }
      else if (count == 2) { arr.push(-1); break; }
    }
  }
  return arr;
}

function nextGreaterElementThreeStacks(arr) {
  const elementArr = [], indexArr = [], stack = [];
  let i = 0;
  while (stack.length < arr.length && i < arr.length) {
    if(i + 1 == arr.length) i = 0;
    while (elementArr.length > 0 && elementArr[elementArr.length - 1] < arr[i]) {
      stack[indexArr.pop()] = arr[i];
      elementArr.pop();
    }
    elementArr.push(arr[i]);
    indexArr.push(i);
    i++;
  }
  return stack;
}
// leetCode
var nextGreaterElementsLeetCode = function (nums) {
  let n = nums.length;
  let stack = [];
  let result = new Array(n).fill(-1)
  for (let i = 0; i < 2 * n; i++) {
    while (stack.length && nums[i % n] > nums[stack[stack.length - 1]]) {
      result[stack.pop()] = nums[i % n]
    }
    stack.push(i % n)
  }
  return result;
};

function nextGreaterElements(nums) {
  const n = nums.length, idxStack = new Stacks(), resArr = new Array(n).fill(-1);
  for (let i = 0; i < 2 * n; i++) {
    while (!idxStack.isEmpty() && nums[i % n] > nums[idxStack.peek()]) {
      resArr[idxStack.deleteTail_pop()] = nums[i % n];
    }
    idxStack.appendLast_push(i % n);
  }
  return resArr;
}
let nums = [100, 1, 11, 1, 120, 111, 123, 1, -1, -100];
console.log(nextGreaterElementsLeetCode(nums));
console.log(nextGreaterElements(nums));
