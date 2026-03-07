class DoublyQueueNode {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class Queues {
  #head = null;
  #tail = null;
  #length = 0;


  appendLast_enqueue_push(data) {
    const newNodeLast =
      new DoublyQueueNode(data, this.tail, null);
    if (!this.#length) {
      this.#tail = newNodeLast;
      this.#head = newNodeLast;
    }
    else {
      this.#tail.next = newNodeLast;
      this.#tail = newNodeLast;
    }
    this.#length++;
  }
  deleteHead_dequeue_shift() {
    if (!this.#length) { return; }
    else if (this.#length == 1) {
      this.#head = null;
      this.#tail = null;
    }
    else {
      this.#head = this.#head.next;
      this.#head.prev = null;
    }
    this.#length--;
  }

  isEmpty() { return this.#length == 0; }

  peek() {
    if (this.#length) return this.#head.data;
    else return null;
  }
  emptyQ() {
    while (this.#length) {
      this.deleteHead_dequeue_shift();
    }
  }
  toArray() {
    let a = this.#head, arr = [];
    while (a) {
      arr.push(a.data);
      a = a.next;
    }
    return arr;
  }

}

function maxSlidingWindow(nums, k) {
  let q1 = new Queues(), maxWindow = [];
  let kmax = nums[0], kmaxIdx = 0, knxt = nums[1], knxtIdx = 1;
  let i = 0;
  while (i < k) {
    [i, kmax, kmaxIdx, knxt, knxtIdx] = maxAtPeek(q1, i, nums[i], kmax, kmaxIdx, knxt, knxtIdx);
    i++;
  }
  maxWindow.push(q1.peek());
  while (i < nums.length) {
    [i, kmax, kmaxIdx, knxt, knxtIdx] = maxAtPeek(q1, i, nums[i], kmax, kmaxIdx, knxt, knxtIdx);
    if (i == kmaxIdx + k) {
      kmax = knxt; kmaxIdx = knxtIdx;
      knxtIdx = kmaxIdx + 1; knxt = nums[knxtIdx];
      while (q1.peek() != kmax && !q1.isEmpty()) {
        q1.deleteHead_dequeue_shift();
      }
    }
    maxWindow.push(q1.peek());
    i++;
  }
  return maxWindow;
}

function maxAtPeek(q1, i, x, kmax, kmaxIdx, knxt, knxtIdx) {
  if (x > kmax) {
    kmax = x, kmaxIdx = i;
    knxt = nums[i + 1], knxtIdx = i + 1;
    q1.emptyQ();
  }
  else if (i > knxtIdx && x > knxt) {
    knxt = x; knxtIdx = i;
  }
  q1.appendLast_enqueue_push(x);
  return [i, kmax, kmaxIdx, knxt, knxtIdx];
}

// trying better than leetcode without using any stack;
function maxSlidingWindow1(nums, k) {
  let kmax = nums[0], kmaxIdx = 0, knxt = nums[1], knxtIdx = 1, maxWindow = [];
  let i = 0
  while (i < k) {
    let x = nums[i];
    if (x > kmax) {
      kmax = x, kmaxIdx = i;
      knxt = nums[i], knxtIdx = i + 1;
    }
    else if (i > knxtIdx && x > knxt) {
      knxt = x, knxtIdx = i;
    }
    i++;
  }
  maxWindow.push(kmax);
  while (i < nums.length) {
    let x = nums[i];
    if (x > kmax) {
      kmax = x, kmaxIdx = i;
      knxt = nums[i], knxtIdx = i + 1;
    }
    else if (i > knxtIdx && x > knxt) {
      knxt = x, knxtIdx = i;
    }

    if (i == k + kmaxIdx) {
      kmax = knxt, kmaxIdx = knxtIdx;
      knxtIdx = kmaxIdx + 1, knxt = nums[knxtIdx];
    }
    maxWindow.push(kmax);
    i++;
  }
  return maxWindow;
}
let nums = [1, 3, -1, -3, 5, 3, 6, 7]
console.log(maxSlidingWindow(nums, 3));
console.log(maxSlidingWindow1(nums, 3));
// let nums = [1, -1];
// console.log(maxSlidingWindow(nums, 1));
// console.log(maxSlidingWindow1(nums, 1));

/*leetcode
var maxSlidingWindow = function(nums, k) {
    const res = [];
    let left = 0;
    let right = 0;
    const q = [];

    while (right < nums.length) {
        while (q.length > 0 && nums[right] > nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(right);

        if (left > q[0]) {
            q.shift();
            //since it is doint unshift use linkedList Stack to perform better
        }

        if (right + 1 >= k) {
            res.push(nums[q[0]]);
            left++;
        }
        right++;
    }

    return res;    
}; 
*/