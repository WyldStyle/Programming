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

  isEmpty() { return this.#length == 0; }

  appendLast_push(data) {
    const newNode = new StackNode(data, this.#tail, null)
    if (!this.#length) {
      this.#head = newNode;
      this.#tail = newNode;
    }
    else {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
    this.#length++;
  }

  peek() {
    if(!this.#length) return null;
    else  return this.#tail.data;
  }

  deleteTail_pop() {
    if (this.#length == 0) { return null; }
    const poppedEle = this.#tail;
    if (this.#length == 1) {
      this.#head = null;
      this.#tail = null;
    }
    else {
      this.#tail = this.#tail.prev;
      this.#tail.next = null;
    }
    this.#length--;
    return poppedEle;
  }

  toMap() {
    let a = this.#head, i = 0;
    const stackMap = new Map();
    while (a) {
      stackMap.set(i, a.data)
      a = a.next;
      i++;
    }
    return stackMap;
  }
}

function adjacentDuplicateRemover(s){
const stack1 = new Stacks();
  for(let i = 0; i < s.length; i++){
    console.log(stack1.peek(), 'peeking here');
    if(stack1.peek() == s.charAt(i)){
      stack1.deleteTail_pop();
    }
    else stack1.appendLast_push(s.charAt(i));
  }
  const mappedStack = stack1.toMap();
  console.log(mappedStack);
  let s1 = '';
  for(let char of mappedStack.values()){
    s1 += char;
  }
  return s1;
}
let s = 'abbaczy'
console.log(adjacentDuplicateRemover(s));

function dupli(s){
  let arr = []; arr[0] = s.charAt(0);
  // for(let i = 1; i < s.length; i++){
  //   if(arr[arr.length - 1] == s.charAt(i)){
  //     arr.pop();
  //   }
  //   else {arr.push(s.charAt(i));}
  // }
  // return arr.join('');
  for(let x of s){
  arr[arr.length - 1] == x ? arr.pop(): arr.push(x)
}
return arr.join('');
}