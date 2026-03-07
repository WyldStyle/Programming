// -------------------- Q U E U E S -------------------- 
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
    if (!this.#length) { return null; }
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

  #toMap() {
    let a = this.#head, i = 0;
    const theMap = new Map();
    while (a) {
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

const queue1 = new Queues();
queue1.appendLast_enqueue_push(5);
queue1.appendLast_enqueue_push(6);
queue1.appendLast_enqueue_push(7)
queue1.appendLast_enqueue_push(4);
queue1.deleteHead_dequeue_shift();
console.log(queue1.toMap());



export { DoublyQueueNode };
export { Queues };