class DoublyLinkedNode {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  #head = null;
  #tail = null;
  #length = 0;
  constructor(size = 10) {
    this.size = size;
  }

  isEmpty() { return this.#length == 0; }
  isNotEmpty() { return this.#length != 0; }
  isFull() { return this.#length == this.size; }
  isNotFull() { return this.#length != this.size; }

  insert(data, position) {
    if (this.isFull()) return;
    else if (this.isEmpty()) {
      const node = new DoublyLinkedNode(data);
      this.#head = node;
      this.#tail = node;
      this.#length++;
    }
    else if (position <= 0) { unshift(data); }
    else if (position >= this.#length - 1 || position == undefined) { this.push(data) }
    else insertMid(data, position);
  }
  unshift(data) {
    if (this.isEmpty()) this.insert(data, 0);
    else {
      const node = new DoublyLinkedNode(data, null, this.#head);
      this.#head.prev = node;
      this.#head = node;
      this.#length++;
    }
  }
  push(data) {
    if (this.isEmpty()) this.insert(data);
    else {
      const node = new DoublyLinkedNode(data, this.#tail, null);
      this.#tail.next = node;
      this.#tail = node;
      this.#length++;
    }
  }
  insertMid(data, position) {
    let a = this.#head;
    while (position - 1) {
      a = a.next;
      position--;
    }
    const node = new DoublyLinkedNode(data, a, a.next)
    a.next.prev = node;
    a.next = node;
    this.#length++;
  }

  deleteByIndex(idx) {
    if (this.isEmpty()) return;
    else if (this.#length == 1) {
      this.#head = null;
      this.#tail = null;
      this.#length++;
    }
    else if (idx <= 0) shift();
    else if (idx >= this.#length) pop();
    else {

    }
  }
  shift() {
    if (this.#length < 2) this.deleteByIndex(0);
    else {
      this.#head = this.#head.next;
      this.#head.prev = null;
      this.#length--
    }
  }
  pop() {
    if (this.#length < 2) this.deleteByIndex(1);
    else {
      this.#tail = this.#tail.prev;
      this.#tail.next = null;
      this.#length--;
    }
  }
  deleteMidIdx(idx) {
    let a = this.#head;
    while (idx - 1) {
      a = a.next;
      idx--;
    }
    a.next = a.next.next;
    a.next.prev = a;
    this.#length--;
  }

  deleteByShiftingNode(a) {
    a.data = a.next.data;
    a.next = a.next.next;
  }
  deleteByValue(val) {
    if (this.isEmpty()) return;
    let a = this.#head, idx = 0;
    while (a) {
      if (a.data == val) {
        if (this.#length < 3) this.deleteByIndex(idx);
        else if (idx == this.#length - 1) this.pop();
        else this.deleteByShiftingNode(a);
      }
      a = a.next;
      idx++;
    }
  }

  reverseList(a = this.#head){
    while(a){
      let temp = a.next;
      a.next = a.prev;
      a.prev = temp;
      a = a.prev;
    }
    this.#head = this.#tail;
    this.#tail = a;
  }
  toArray() {
    let a = this.#head, arr = [];
    while (a) {
      arr.push(a.data);
      a = a.next;
    }
    return arr;
  }
}

function main(){
  const lnkdList = new DoublyLinkedList();
  for(let i = 0; i < 7; i++){
    lnkdList.insert(i)
  }
  lnkdList.deleteByValue(6)
  lnkdList.reverseList();
  console.log(lnkdList.toArray());
}
main();

