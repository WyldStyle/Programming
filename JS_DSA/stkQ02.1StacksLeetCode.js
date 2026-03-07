
class StacksNode {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class MinStack {
  #head = null;
  #tail = null;
  #length = null;
  // check = null
  #min = null;


  push(data) {
    const newNodeLast =
      new StacksNode(data, this.#tail, null);
    if (!this.#length) {
      this.#head = newNodeLast;
      this.#tail = newNodeLast;
      this.#min = data;
    }
    else {
      this.#tail.next = newNodeLast;
      this.#tail = newNodeLast;
      if (data < this.#min) this.#min = data;
    }
    this.#length++;
  }

  getMin() { return this.#min; }

 pop(data) {
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

    let a = this.#head; this.#min = null;
    while(a && this.#length){
      if(a.data < this.#min) this.#min = a.data;
      a = a.next;
    }
    return popppedEle;
  }
  top() {
    return this.#length == 0 ? null : this.#tail.data;
  }
}
var obj = new MinStack();
obj.push(-2)
obj.push(0)
obj.push(-3)
console.log(obj.getMin());
console.log(obj.top());
obj.pop();
console.log(obj.getMin());