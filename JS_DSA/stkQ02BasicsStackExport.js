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

const stack1 = new Stacks();
// stack1.appendLast_push(5);
// stack1.appendLast_push(6);
// stack1.appendLast_push(7);
// stack1.appendLast_push(8);
// stack1.appendLast_push(9);
// // stack1.deleteTail_pop();
// console.log(stack1.toMap());
// // console.log(stack1.check);
console.log(stack1.peek());
export { Stacks };
export { StacksNode };