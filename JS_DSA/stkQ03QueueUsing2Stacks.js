// import { StacksNode } from "./stkQ02BasicsStackExport";
// import { Stacks } from "./stkQ02BasicsStackExport";
// ------------------- S T A C K S -----------------
// class StacksNode {
//   constructor(data, prev, next) {
//     this.data = data;
//     this.prev = prev;
//     this.next = next;
//   }
// }

// class Stacks {
//   #head = null;
//   #tail = null;
//   #length = 0;
//   // check = null

//   appendLast_push(data) {
//     const newNodeLast =
//       new StacksNode(data, this.#tail, null);
//     if (!this.#length) {
//       this.#head = newNodeLast;
//       this.#tail = newNodeLast;
//     }
//     else {
//       this.#tail.next = newNodeLast;
//       this.#tail = newNodeLast;
//     }
//     this.#length++;
//     return this.#length;
//   }

//   deleteTail_pop() {
//     if (!this.#length) { return null; }
//     let poppedElement = this.#tail;
//     if (this.#length == 1) {
//       this.#head = null;
//       this.#tail = null;
//     }
//     else {
//       this.#tail = this.#tail.prev;
//       this.#tail.next = null;
//     }
//     this.#length--;
//     return poppedElement;
//   }
//   isEmpty() { return this.#length === 0; }

//   peek() { return this.#tail; }

//   #toMap() {
//     let a = this.#head, i = 0;
//     const theMap = new Map();
//     while (a) {
//       theMap.set(i, a.data);
//       a = a.next;
//       i++;
//     }
//     return theMap;
//   }

//   access(nthEle) {
//     return this.#toMap.get(nthEle);
//   }

//   search(findMe) {
//     return this.#toMap.has(findMe);
//   }

//   toMap() {
//     return this.#toMap();
//   }
// }

// class TwoStacksQueue {
//   // data = data;
//   stack1 = new Stacks();
//   stack2 = new Stacks();

//   appendLast_enqueue_push(data) {
//     if (this.stack2.isEmpty()) {
//       this.stack1.appendLast_push(data);
//       return;
//     }
//     else {
//       while (!this.stack2.isEmpty()) {
//         this.stack1.appendLast_push(this.stack2.deleteTail_pop());
//       }
//       this.stack1.appendLast_push(data);
//     }
//   }
//   deleteTail_dequeue_pop() {
//     while (!this.stack1.isEmpty()) {
//       this.stack2.appendLast_push(this.stack1.deleteTail_pop());
//     }
//     return this.stack2.deleteTail_pop();
//   }
//   toMapQ() {
//     return this.stack2.toMap();
//   }
//   peek() {
//     return this.stack2.peek();
//   }
// }



// what I submitted on LeetCode
class StackNode {
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
  #size = 0;
  firstEle = null;
  lastEle = null;
  constructor(size) {
    this.#size = size;
  }
  push(data) {
    if (data == null) return;
    if (this.#length == this.#size) return;
    const newNode = new StackNode(data, this.#tail, null);
    if (!this.#length) {
      this.#head = newNode;
      this.#tail = newNode;
    }
    else {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
    this.#length++;
    this.firstEle = this.#head.data;
  }

  pop() {
    if (this.#length == 0) return;
    let poppedElement = this.#tail.data;
    if (this.#length == 1) {
      this.#head = null;
      this.#tail = null;
    }
    else {
      this.#tail = this.#tail.prev;
      this.#tail.next = null;
    }
    this.#length--;
    if(this.#tail != null) this.lastEle = this.#tail.data;
    return poppedElement;
  }
  peek() {
    if (this.#length) return this.#tail.data;
    else return null;
  }
  isEmpty() { return this.#length == 0; }

  toArray() {
    let a = this.#head, arr = [];
    while (a) {
      arr.push(a.data);
      a = a.next;
    }
    return arr;
  }
}

class MyQueue {
  #stack1 = new Stacks();
  #stack2 = new Stacks();

  push(data) {
    if (this.#stack2.isEmpty()) {
      this.#stack1.push(data);
    }
    else {
      while (!this.#stack2.isEmpty()) {
        this.#stack1.push(this.#stack2.pop());
      }
      this.#stack1.push(data);
    }
  }
  pop() {
    while (!this.#stack1.isEmpty()) {
      this.#stack2.push(this.#stack1.pop());
    }
    return this.#stack2.pop();
  }
  empty() {
    return this.#stack1.isEmpty() && this.#stack2.isEmpty();
  }
  peek() {
    if (this.#stack2.isEmpty()) return this.#stack1.firstEle;
    else if(this.#stack1.isEmpty()) return this.#stack2.lastEle;
  }
  toArray(){
    while(!this.#stack2.isEmpty()){
      this.#stack1.push(this.#stack2.pop());
    }
    return this.#stack1.toArray();
  }
}
// const stack1 = new Stacks();
// console.log(stack1.peek());
// console.log(stack1.isEmpty());
// stack1.push(5);
// stack1.push(6);
// stack1.push(7);
// console.log(stack1.toArray());

const myQueue = new MyQueue();
myQueue.push(5)
myQueue.push(6)
myQueue.push(7)
console.log(myQueue.pop());
// console.log(myQueue.toArray());
console.log(myQueue.peek());
console.log(myQueue.pop());
console.log(myQueue.peek());
console.log(myQueue.empty());
console.log(myQueue.peek());
console.log(myQueue.pop());
console.log(myQueue.empty());