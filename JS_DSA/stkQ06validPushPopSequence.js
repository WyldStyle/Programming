
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

function pushPopSequence(pushed, popped){
  let pushStack = new Stacks();
  let poppedIdx = 0;
  let k = pushed.length + popped.length;
  for(let i = 0; i < k; i++){
    console.log(pushStack.peek(), popped[poppedIdx]);
    if(pushStack.peek() == popped[poppedIdx]){
      pushStack.deleteTail_pop();
      poppedIdx++;
    }
    else{
      pushStack.appendLast_push(pushed[i - poppedIdx]);
    }
  }
    return pushStack.isEmpty();
}
let pushed = [1,2,3,4,5], popped = [4,3,5,2,1];
console.log(pushPopSequence(pushed,popped));