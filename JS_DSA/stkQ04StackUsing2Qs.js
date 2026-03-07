
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
  length = 0;
  lastEle = null;


  appendLast_enqueue_push(data) {
    if (data == null) return;
    const newNodeLast =
      new DoublyQueueNode(data, this.tail, null);
    if (!this.length) {
      this.#tail = newNodeLast;
      this.#head = newNodeLast;
    }
    else {
      this.#tail.next = newNodeLast;
      this.#tail = newNodeLast;
    }
    this.length++;
    this.lastEle = this.#tail.data;
  }
  deleteHead_dequeue_shift() {
    if (!this.length) { return null; }
    let poppedElement = this.#head.data;
    if (this.length == 1) {
      this.#head = null;
      this.#tail = null;
    }
    else {
      this.#head = this.#head.next;
      this.#head.prev = null;
    }
    this.length--;
    if (this.length) this.lastEle = this.#tail.data;
    return poppedElement;
  }

  isEmpty() { return this.length == 0; }

  peek() { return this.#head.data; }

}


class MyStack {
  #q1 = new Queues();
  #q2 = new Queues();
  push(data) {
    if (this.#q2.isEmpty()) this.#q1.appendLast_enqueue_push(data);
    else if (this.#q1.isEmpty()) this.#q2.appendLast_enqueue_push(data);
  }
  pop() {
    if (this.#q2.isEmpty()) {
      while (this.#q1.length > 1) {
        this.#q2.appendLast_enqueue_push(this.#q1.deleteHead_dequeue_shift());
      }
      return this.#q1.deleteHead_dequeue_shift();
    }
    else if (this.#q1.isEmpty()) {
      while (this.#q2.length > 1) {
        this.#q1.appendLast_enqueue_push(this.#q2.deleteHead_dequeue_shift());
      }
      return this.#q2.deleteHead_dequeue_shift();
    }
  }
  top() {
    if (this.#q1.isEmpty()) return this.#q2.lastEle;
    else return this.#q1.lastEle;
  }
  empty() {
    return this.#q1.isEmpty() && this.#q2.isEmpty();
  }
}

const myStack = new MyStack();
myStack.push(1);
myStack.push(5);
myStack.push(4);
myStack.push(3);
console.log(myStack.top());
console.log(myStack.pop());
myStack.push(6);
console.log(myStack.top());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.top());
console.log(myStack.empty());
console.log(myStack.pop());
console.log(myStack.empty());