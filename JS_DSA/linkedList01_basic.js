/*Our LinkedListNode class is a class that will
represent one item in our collection of items.*/
// data => next => data -> next -> data
class SinglyLinkedListNode {
  // data = data we want to store
  // node = pointer to the next node 
  // of our list of nodes ie reference to another
  // JS object = another LinkedListNode instance
  data = null;
  next = null;
  constructor(data, next) {
    this.data = data;
    this.next = next;
    // console.log(this,'inNode------------------');
  }
  /*Our toString method is a convenience 
  method when we want to see what is 
  contained in each node of our linked list.
*/
  toStringNodeEle(callback) {
    return callback ? callback(this.data)
      : `${this.data}`
  }
}

class SinglyLinkedList {
  head = null;
  tail = null;
  length = 0;
  // constructor(head, tail) {
  //   this.head = head;
  //   this.tail = tail;
  // }
  prependFirst(data) {
    const newNodeFirst =
      new SinglyLinkedListNode(data, this.head);
    // console.log('here-------',this);
    // newNode = {5, null};
    /* Then we set our this.head to point to our 
    newly created LinkedListNode object. If this 
    is the first item in our LinkedList, we must 
    also set this.tail to point to the new object,
     as it is also the last item in our LinkedList
     */
    this.head = newNodeFirst;
    // console.log('this.head',this.head);
    // If there is no tail yet 
    // let's make new node a tail
    if (!this.tail) {
      this.tail = newNodeFirst;
    }
    this.length++;
    // Finally, we return the data 
    // that was added to our LinkedList
    // return this;
  }
  appendLast(data) {
    const newNodeLast = new SinglyLinkedListNode(data, null);
    // console.log('this append ________-',newNodeLast);
    if (!this.tail) {
      // for 1st element
      this.tail = newNodeLast;
      this.head = newNodeLast;
    }
    else {
      this.tail.next = newNodeLast;
      this.tail = newNodeLast;
      this.length++;
    }
  }
  delete(delData) {
    if (this.length == 0) { return null; }
    // if(!this.head){ return null};
    if (this.head.data === delData) {
      if (this.head == this.tail) {
        this.head = null;
        this.tail = this.head;
        this.length = 0;
        return;
      }
      this.head = this.head.next;
      this.length--;
      return;
    }

    let a = this.head;
    while (a.next) {
      // console.log(count, a, a.next, '\n\n\n\n');
      if (a.next.data === delData) {
        a.next = a.next.next;
        this.length--;
        return;
      }
      a = a.next;
    }
    this.tail = a;
    this.tail.next = null;
  }
  deleteHead() {
    this.delete(this.head);
  }
  deleteTail() {
    this.delete(this.tail);
  }
  search(data) {
    let a = this.head;
    while (a) {
      if (a.data === data) {
        return true;
      }
      a = a.next;
    }
    return false;
  }
  _toArray() {
    let arrayOfEle = [];
    let a = this.head;
    while (a) {
      arrayOfEle[arrayOfEle.length] = a.data;
      a = a.next;
    }
    return arrayOfEle;
  }
  _toString() {
    return this._toArray().join('');
  }
}


const sLnkdList1 = new SinglyLinkedList()
sLnkdList1.prependFirst(6)
sLnkdList1.prependFirst(5);
sLnkdList1.appendLast(7)
sLnkdList1.appendLast(8)
sLnkdList1.appendLast(9)
// sLnkdList1.delete(6)
// console.log(sLnkdList1.toString1(5));
// console.log(sLnkdList1.head.next.next);
let a = sLnkdList1.head
for (let i = 0; i < sLnkdList1.length; i++) {
  // console.log(a);
  a = a.next
}
// console.log(sLnkdList1);
// console.log(sLnkdList1.search(10));
// console.log(sLnkdList1._toArray());
// console.log(sLnkdList1._toString());
// console.log(sLnkdList1.head.next.next);
// console.log(Object.getOwnPropertyNames(SinglyLinkedList));
// console.log(Object.getOwnPropertyNames(SinglyLinkedList.prototype));
// console.log(Object.getOwnPropertyNames(sLnkdList1));
// console.log(Object.getOwnPropertyNames(sLnkdList1));
// console.log(Object.getOwnPropertyNames(sLnkdList1.prototype));
// const = new sLnkdList1();



// ----------------  Doubly Linked List -----------------

class DoublyLinkedNode {
  constructor(data = null, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  head = null; tail = null; length = 0;

  isEmpty() { return this.length == 0; }

  prependFirst(data) {
    const newNode = new DoublyLinkedNode(data, null, this.head);
    if (this.head) {
      this.head.prev = newNode;
      this.head = newNode;
    }
    else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  appendLast(data) {
    const newNodeLast =
      new DoublyLinkedNode(data, this.tail, null)
    if (this.tail) {
      this.tail.next = newNodeLast;
      this.tail = newNodeLast;
    }
    else {
      this.tail = newNodeLast;
      this.head = newNodeLast;
    }
    this.length++;
  }

  justForU(findData) {
    let a = this.head, z = this.tail;
    while (a.next) {
      if (a.next.data == findData) {
        return [a, 0];
      }
      if (z.prev.data == findData) {
        return [0, z];
      }
      a = a.next;
      z = z.prev;
    }
    return null;
  }
  delete(delData) {
    if (!this.length) { return null; }

    else if (this.length === 1) {
      if (this.head.data === delData) {
        this.head = null; this.tail = null;
      }
      this.length--;
      return;
    }

    else if (this.head === delData) {
      this.head = this.head.next;
      this.head.prev = null;
    }
    else if (this.tail === delData) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    else {
      let [a, z] = this.justForU(delData)
      if (a) {
        a.next = a.next.next;
        a.next.prev = a;
      }
      else if (z) {
        z.prev = z.prev.prev;
        z.prev.next = z;
      }
    }
    this.length--;
    return;
  }
  search(findMe) {
    // const [a, z] = this.justForU(findMe);
    if (this.head == findMe || this.tail == findMe
      || this.justForU(findMe)) { return true; }
    return false;
  }

  listToArray() {
    let arr = [];
    a = this.head;
    while (a) {
      arr.push(a.data);
      a = a.next;
    }
    return arr;
  }

  listToString() {
    return this.listToArray().join('');
  }
}
const dLnkdList = new DoublyLinkedList();
dLnkdList.prependFirst(7)
dLnkdList.prependFirst(6);
dLnkdList.prependFirst(5)
dLnkdList.appendLast(8)
dLnkdList.appendLast(9);
// dLnkdList.appendLast(null);
// won't work;
// dLnkdList.delete(6)
console.log(dLnkdList.listToArray());
console.log(dLnkdList.listToString());
let a1 = dLnkdList.head;
// for (let i = 0; i < dLnkdList.length; i++) {
//   console.log(a1);
//   a1 = a1.next;
// }
let i = 0;
do {
  // console.log(a1);
  a1 = a1.next;
  i++;
}
while (i < dLnkdList.length);
