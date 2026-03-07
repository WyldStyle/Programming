// class DoublyLinkedNode {
//   constructor(data, prev, next) {
//     this.data = data;
//     this.prev = prev;
//     this.next = next;
//   }
// }

// class DoublyLinkedList {
//   #head = null;
//   #tail = null;
//   #length = 0;
//   constructor(size = 1000) {
//     this.size = size;
//   }

//   isEmpty() { return this.#length == 0; }
//   isNotEmpty() { return this.#length != 0; }

//   unshift(data) {
//     if (this.isEmpty()) return this.insert(data);
//     else if (this.#length < this.size) {
//       const node = new DoublyLinkedNode(data, null, this.#head);
//       this.#head.prev = node;
//       this.#head = node;
//     }
//   }
//   push(data) {
//     if (this.isEmpty()) return this.insert(data);
//     else if (this.#length < this.size) {
//       const node = new DoublyLinkedNode(data, this.#head, null);
//       this.#tail.next = node;
//       this.#tail = node;
//     }
//   }
//   insert(data, position) {
//     if (this.#length == this.size) return `list is full. Current Size = ${this.size}`;
//     if (this.isEmpty()) {
//       const node = new DoublyLinkedNode(data, null, null)
//       this.#head = node;
//       this.#tail = node;
//     }

//     else if (position >= this.#length || position == undefined) this.push(data)
//     else if (position <= 0) this.unshift(data)

//     else if (this.#head != this.#tail) {
//       let a = this.#head;
//       while (position - 1) {
//         a = this.#head.next;
//         position--;
//       }
//       const node = new DoublyLinkedNode(data, a, a.next)
//       a.next.prev = node;
//       a.next = node;
//     }
//     else {
//       position == 0 ? this.unshift(data) : this.push(data);
//     }
//     this.#length++;
//   }
//   toArray() {
//     let a = this.#head, arr = []
//     while (a) {
//       arr.push(a.data);
//       a = a.next;
//     }
//     return arr
//   }

//   shift() {
//     if(this.isEmpty() || this.#length == 1) return this.delete();
//     this.#head = this.#head.next;
//     this.#head.prev = null;
//   }

//   pop() {
//     if(this.isEmpty() || this.#length == 1) return this.delete();
//     this.#tail = this.#tail.prev;
//     this.#tail.next = null;
//     console.log('here popping');
//   }
//   delete(position) {
//     if (this.isEmpty()) return null;
//     else if (this.#length == 1) {
//       this.#head = null;
//       this.#tail = null;
//     }
//     else if(this.#length == 2){
//       if(position == 0) this.shift();
//       else this.pop();
//     }
//     else if(position >= this.#length || position == undefined) this.pop();
//     else if(position <= 0) this.shift();
//     else {
//       let a = this.#head;
//       while (position - 1) {
//         a = a.next;
//         position--;
//       }
//       a.next = a.next.next;
//       a.next.prev = a;
//     }

//     this.#length--;
//   }
// }
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
  constructor(size = 5) {
    this.size = size;
  }

  isEmpty() { return this.#length == 0; }
  isNotEmpty() { return this.#length != 0; }
  isFull() { return this.#length == this.size }
  isNotFull() { return this.#length != this.size }

  insert(data, position) {
    if (this.isFull()) {
      console.log(`List is full. Size is ${this.size}`);
      return;
    }
    else if (this.isEmpty()) {
      const node = new DoublyLinkedNode(data);
      this.#head = node;
      this.#tail = node;
      this.#length++;
    }
    else if (position <= 0) return this.unshift(data);
    else if (position >= this.#length || position == undefined) return this.push(data);
    else return this.#insertMid(data, position) //this.#length > 1 i.e. this.#head != this.#tail;
  }

  unshift(data) {
    if (this.isEmpty()) this.insert(data, 0);
    else if (this.isNotFull()) {
      const node = new DoublyLinkedNode(data, null, this.#head)
      this.#head.prev = node;
      this.#head = this.#head.prev;
      this.#length++;
    }
  }

  #insertMid(data, position) {
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

  push(data) {
    if (this.isEmpty()) this.insert(data);
    else if (this.isNotFull()) {
      const node = new DoublyLinkedNode(data, this.#tail)
      this.#tail.next = node;
      this.#tail = this.#tail.next;
      this.#length++;
    }
  }

  deleteByIndex(idx, a = this.#head, val = false) {
    if (this.isEmpty()) return null;
    else if (this.#length == 1) {
      this.#head = null;
      this.#tail = null;
      this.#length--;
    }
    else if (idx <= 0) this.shift();
    else if (idx >= this.#length - 1 || (val && idx + 1 == this.#length)) this.pop();
    else this.#deleteMidIdx(idx, a, val);
  }
  shift() {
    if (this.#length < 2) this.deleteByIndex(0)
    else {
      this.#head = this.#head.next;
      this.#head.prev = null;
      this.#length--;
    }
  }
  #deleteMidIdx(idx, a, val) {
    console.log(!val && idx - 1);
    while (!val && idx - 1) {
      a = a.next;
      idx--;
    }
    console.log(a.next.data);
    a.next = a.next.next;
    a.next.prev = a;
    this.#length--;
  }
  pop() {
    if (this.#length < 2) this.deleteByIndex(1);
    else {
      this.#tail = this.#tail.prev;
      this.#tail.next = null;
      this.#length--;
    }
  }

  deleteByValue(value) {
    if (this.isEmpty()) return null;
    let a = this.#head, idx = 0;
    while (a) {
      if (a.data == value) {
        this.deleteByIndex(idx, a.prev, true);
        idx--
      }
      a = a.next;
      idx++;
    }
  }
deletByShiftingNode(a = this.#head.next){
  a.data = a.next.data;
  a.next = a.next.next;
}
  toArray() {
    let a = this.#head, arr = [];
    while (a) {
      arr.push(a.data)
      a = a.next;
    }
    return arr;
  }
}

function main() {
  const lnkdList = new DoublyLinkedList(7);
  lnkdList.unshift(1)
  lnkdList.push(7)
  lnkdList.insert(2, 1)
  lnkdList.insert(3, 2)
  lnkdList.insert(4, 3)
  lnkdList.insert(5, 4)
  lnkdList.push(3)
  console.log(`3`, lnkdList.toArray());
  console.log('deleting by Idx ');
  lnkdList.deleteByIndex(3)
  console.log(`3`, lnkdList.toArray());
  console.log('deleting by value');
  lnkdList.deleteByValue(3)
  lnkdList.deleteByValue(1)
  lnkdList.deleteByValue(2)
  console.log(`3`, lnkdList.toArray());

}
// main();

function main1(){
  let lnkdList = new DoublyLinkedList(10);
  lnkdList.push(4)
  lnkdList.push(5)
  lnkdList.push(1)
  lnkdList.push(9)
  console.log((lnkdList.toArray()));
  lnkdList.deletByShiftingNode()
  console.log((lnkdList.toArray()));
}
main1();