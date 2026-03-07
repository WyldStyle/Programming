
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
function solve(A) {
  let q1 = new Queues(), b = A.charAt(0);
  let charSet = new Set();
  q1.appendLast_enqueue_push(A.charAt(0));
  charSet.add(A.charAt(0));
  for (let i = 1; i < A.length; i++) {
    if (charSet.has(A.charAt(i))) {
      if(q1.peek() == A.charAt(i)) q1.deleteHead_dequeue_shift();
      if(!q1.isEmpty()) b += q1.peek();
      else b+='#'
    }
    else {
      if(!q1.isEmpty()) b += q1.peek();
      else b+=A.charAt(i);
      q1.appendLast_enqueue_push(A.charAt(i));
      charSet.add(A.charAt(i))
    }
  }
  return b;
}
console.log(solve('aaaaababacdc'));