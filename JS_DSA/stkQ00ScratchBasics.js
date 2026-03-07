// ------------------------  S   T   A   C   K   S -----------------------
class Stacks {
  #array = [];
  constructor(array) {
    this.#array = [];
    if (array) this.#array = array;
  }
  getBufferSlice = function () {
    return this.#array.slice();
  }

  isEmpty = function () {
    return this.#array.length == 0;
    // == checks and returns true/ false
  }
  peekLast = function () {
    return this.#array[this.#array.length - 1];
  } // returns the last element without removing it
  push = function (newestValue) {
    // return this.array.push(value)
    // this.array.push(newestValue);
    this.#array[this.#array.length] = newestValue;
    return this.#array.length;
  }
  pop = function () {
    // return this.array.pop();
    let lastEle = this.#array[this.#array.length - 1];
    this.#array.length = this.#array.length - 1;
    return lastEle;
  }
}

{ // remove parentheses to display o/p
  let stack1 = new Stacks([5, 592, 84, 85, 32, 23]);
  console.log(stack1);
  console.log(stack1.peekLast());
  console.log(stack1.push(71));
  console.log(array);
}

// Accessing nth element from Top use Pop
// Topmost element is 1st element (not 0th element)
function PopTopAccess(stack, n) {
  //copy the new arr
  let bufferArray = stack.getBufferSlice();

  if (n <= 0) throw 'error';

  // if a large no of LIFO opn is to be performed 
  // converting array into stacks
  // will give faster results
  let bufferStack = new Stacks(bufferArray);

  // we're converting stack1 into buffer_array then
  // converting into buffer_stacks because
  //  we can't directly copy stack1 into buffer_stack

  while (--n !== 0) {
    // --n decrements n till 
    // n-1 th elements are popped out
    bufferStack.pop();
    // console.log(n, bufferStack.pop())
  }
  return bufferStack.pop();
  // returns the nth popped element
}

let stack1 = new Stacks([5, 592, 32, 23]);
console.log(stack1);
console.log(PopTopAccess(stack1, 2));
// console.log(stack1.array[3],'here');
// after setting all value # to private 
// you can't access middle elements


// Searching an Element
function stackSearch(stack, element) {
  let bufferArray = stack.getBufferSlice();
  let bufferStack = new Stacks(bufferArray);
  while (!bufferStack.isEmpty()) {
    if (bufferStack.pop() === element) {
      return true;
    }
  }
  return false;
}



// ===========================  Q   U   E   U   E   S ==========================
//  FIRST in QUEUE, LAST on STACK
class Queues {
  constructor(array = []) {
    this.array = array ? array : this.array
    // if class in invoked using new this constructor
    // will be called and if new instance provides
    // an array it will set this.array to the new instance's array
    // otherwise this.array which already contains default class's
    // array will continue to be assisgned.
  }

  getBufferSlice = function () {
    return this.array.slice();
    // creates a copy by slicing from 0 to length - 1
  }
  isEmpty = function () {
    return array.length == 0;
  }
  peekFirst = function () {
    return this.array[0];
  }
  // enqueueUnshift = function (firstInQ) {
  //   // return this.array.unshift(firstInQ);
  //   for (let i = this.array.length; i > 0; i--) {
  //     this.array[i] = this.array[i - 1];
  //   }
  //   this.array[0] = firstInQ;
  //   return this.array.length;
  // }
  // enqueue is not unshift - it means adding a new customer
  // at the end of queue i.e Enqueue = Push
  enqueuePush = function (lastAdded) {
    this.array[length] = lastAdded;
  }
  dequeueShift = function () {
    // return this.array.shift();
    let firstOutQ = this.array[0];
    for (let i = 1; i < this.array.length; i++) {
      this.array[i - 1] = this.array[i];
    }
    this.array.length = this.array.length - 1;
    return firstOutQ;
  }
  // Shift n Unshift removes n adds the element at zero indexes and
  // then shifts remaining indexes down consecutively, all other elements in the array need
  // to have their indexes altered, and this takes O(n). 
  // With a linked-list implementation, as this can be reduced to O(1)
}

// remove parentheses to see o/p
console.log('\n Q starts here');
let queue1 = new Queues([5, 35, 21, 62, 1, 3]);
console.log(queue1.dequeueShift());
console.log(queue1.enqueueUnshift(7));


function bottomShiftAccess(queue, n) {
  let buffer_array = queue.getBufferSlice();
  let buffer_queue = new Queues(buffer_array);
  while (--n !== 0) {
    buffer_queue.dequeueShift();
  }
  return buffer_queue.dequeueShift();
}

function queueSearch(queue, element) {
  let buffer_array = queue.getBufferSlice();
  let buffer_queue = new Queues(buffer_array);
  while (!buffer_queue.isEmpty) {
    if (buffer_queue.dequeueShift() === element) {
      return true;
    }
  }
  return false;
}

// consoling
console.log(queueSearch(queue1, 5));
console.log(bottomShiftAccess(queue1, 3));

