
class DoublyQueueNode {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class CircularQueues {
  #head = null;
  #tail = null;
  #length = 0;


  appendLast_enqueue_push(data) {
    const newNodeLast =
      new DoublyQueueNode(data, this.#tail, this.#head);
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
    if (!this.#length) { return null; }
    else if (this.#length == 1) {
      this.#head = null;
      this.#tail = null;
    }
    else {
      this.#head = this.#head.next;
      this.#head.prev = null;
      this.#tail.next = this.#head;
    }
    this.#length--;
  }

  isEmpty() { return this.#length == 0; }

  peek() { return this.#head.data; }

  #toMap() {
    let a = this.#head, i = 0;
    const theMap = new Map();
    theMap.set(0, a.data);
    i++; a = a.next;
    while (a != this.#head) {
      theMap.set(i, a.data);
      i++;
      a = a.next;
    }
    return theMap;
  }
  access(nthEle) {
    return this.#toMap.get(nthEle);
  }
  search(findMe) {
    return this.#toMap.has(findMe);
  }
  // accessing and searching nth element in queue 
  // requires to call dequeue n no of times
  // so either we create a buffer array
  // here I've created a private map

  toMap() { // just for testing purpose
    return this.#toMap();
  }
}

//what I submitted on LeetCode
class DoublyQueueNode {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}
class MyCircularQueue {
  #head = null;
  #tail = null;
  #length = 0;
  #size = 0;
  constructor(size){
    this.#size = size;
  }


 enQueue(data) {
  if(data == null) return false;
  if(this.isFull()) return false;
    const newNodeLast =
      new DoublyQueueNode(data, this.#tail, this.#head);
    if (!this.#length) {
      this.#tail = newNodeLast;
      this.#head = newNodeLast;
    }
    else {
      this.#tail.next = newNodeLast;
      this.#tail = newNodeLast;
    }
    this.#length++;
    return true;
  }

  deQueue() {
    // if (!this.#length) { return null; }
    if(this.#length == 0) return false;
    else if (this.#length == 1) {
      this.#head = null;
      this.#tail = null;
    }
    else {
      this.#head = this.#head.next;
      this.#head.prev = null;
      this.#tail.next = this.#head;
    }
    this.#length--;
    return true;
  }

  isEmpty() { return this.#length == 0; }
  isFull() { return this.#length == this.#size;}

  Front() {
    if(this.#length) return this.#head.data
    else return -1
  }
  Rear(){
    if(this.#length) return this.#tail.data;
    else return -1;
  }
}
const queue1 = new Queues();
queue1.appendLast_enqueue_push(5);
queue1.appendLast_enqueue_push(6);
queue1.appendLast_enqueue_push(7)
queue1.appendLast_enqueue_push(4);
queue1.deleteHead_dequeue_shift();
console.log(queue1.toMap());