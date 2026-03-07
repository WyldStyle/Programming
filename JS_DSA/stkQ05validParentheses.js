function stkValidParentheses(s){
  const brktCh3ckr =  new Stacks();
  const brktmap = new Map();
  brktmap.set(')','(');
  brktmap.set('}','{');
  brktmap.set(']','[');
  for (let i = 0; i < s.length; i++){
    console.log(brktCh3ckr.toArray());
    let b = s.charAt(i);
    if(b == '(' || b == '{' || b == '[') brktCh3ckr.appendLast_push(b);
    else if(!brktCh3ckr.isEmpty()){
    if(brktmap.get(s.charAt(i)) == brktCh3ckr.peek()){
      brktCh3ckr.deleteTail_pop();
    }
    else return false;
  }
  else return false;
  }
  return brktCh3ckr.isEmpty();
}

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
  // toArray(){
  //   let a = this.#head;
  //   let arr = [];
  //   while(a){
  //     arr.push(a.data);
  //     a = a.next;
  //   }
  //   return arr;
  // }
}

// const s = '({[]})'
// const s = ']'
const s = '(])'
console.log(stkValidParentheses(s));