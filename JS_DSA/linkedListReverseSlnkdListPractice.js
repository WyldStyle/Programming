class DoublyLinkedNode {
  constructor(data = null, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  head = null;
  tail = null;
  length = null;

  isEmpty() { return this.length == 0; }

  prependFirst(data) {
    const newNode =
      new DoublyLinkedNode(data, null, this.head);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.head.prev = newNode;
      this.head = newNode;
    }
  }
  appendLast(data) {
    const newNode =
      new DoublyLinkedNode(data, this.tail, null)
    if (!this.length) {
      this.tail = newNode;
      this.head = newNode;
      this.length++;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }
  listToArray() {
    if (!this.isEmpty()) { return null; }
    let a = this.head;
    let arr = [];
    while (a) {
      arr[arr.length] = a.data;
      a = a.next;
    }
    return arr;
  }
  listToString() {
    if (!this.isEmpty()) { return null; }
    return this.listToArray().join('');
  }

  justForU(findMe) {
    let a = this.head, z = this.tail;
    while (a.next) {
      if (a.next.data == findMe) {
        return [a, 0];
      }
      if (z.prev.data == findMe) {
        return [0, z];
      }
      a = a.next;
      z = z.prev;
    }
  }
  delete(delData) {
    if (!this.length) { return null; }

    if (this.length == 1) {
      if (this.head === delData) {
        this.head = null; this.tail = null;
      }
      this.length--;
      return;
    }

    else if (this.head == delData) {
      this.head = this.head.next;
      this.head.prev = null;
    }
    else if (this.tail == delData) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    else {
      let [a, z] = this.justForU(delData);
      if (a) {
        a.next = a.next.next;
        a.next.prev = a;
      }
      if (z) {
        z.prev = z.prev.prev;
        z.prev.next = z;
      }
    }
    this.length--;
    return;
  }
  search(findMe) {
    if (this.justForU(findMe)) { return true; }
    return false;
  }
}
// Doubly Linked List is Circular if tail.next = head && head.prev = tail
// so there's no point in reversing it

class SinglyLinkedListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next
  }
}

class SinglyLinkedList {
  head = null;
  tail = null;
  length = 0;

  isEmpty() { return this.length == 0; }
  prependFirst(data) {
    const newNode =
      new SinglyLinkedListNode(data, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    this.length++;
  }
  appendLast(data) {
    const newNodeLast =
      new SinglyLinkedListNode(data, null);
    if (!this.tail) {
      this.tail = newNodeLast;
      this.head = newNodeLast;
    }
    else {
      this.tail.next = newNodeLast;
      this.tail = newNodeLast;
      this.length++;
    }
  }

  listToArray() {
    if (this.isEmpty()) { return null; }
    let a = this.head, arr = [];
    while (a) {
      arr.push(a.data);
      a = a.next;
    }
    return arr;
  }

  listToString() {
    return this.listToArray().join('');
  }

  justForU(findMe) {
    let a = this.head;
    while (a.next) {
      if (a.next.data == findMe) {
        return a;
      }
      a = a.next;
    }
    return null;
  }
  search(findMe) {

    if (this.head == findMe || this.tail == findMe
      || this.justForU(findMe)) { return true }
    return false;
  }
  delete(delData) {
    if (this.isEmpty()) { return null; }
    else if (this.head === delData) {
      if (this.head == this.tail) {
        // initially length = 2, after 1 element left
        this.head = null; this.tail = null;
        this.length = 0;
        return;
      }
      this.head.next = this.head;
      // if length > 3
      this.length--;
      return;
    }
    else if (this.head !== delData) {
      let a = this.justForU(delData);
      if (a) {
        if (a.next == this.tail) {
          a.next = null;
          this.tail = a;
        }
        else { a.next = a.next.next; }
        this.length--;
        return;
      }
    }
    return null;
  }
}

const sLnkdList2 = new SinglyLinkedList();
console.log(sLnkdList2.listToArray());
console.log(sLnkdList2.appendLast(9));
console.log(sLnkdList2.appendLast(10));
console.log(sLnkdList2.appendLast(11));
console.log(sLnkdList2.prependFirst(8));
console.log(sLnkdList2.prependFirst(7));
console.log(sLnkdList2.prependFirst(6));
console.log(sLnkdList2.delete(5));
console.log(sLnkdList2.listToArray());

function reverseSLnkdList(sLnkdList2) {
  // return sLnkdList2.listToArray().reverse();
  // works

  // Object.setPrototypeOf(sLnkdList2, Array);
  // return sLnkdList2.reverse();
  // setting prototype to Array won't work

  let a_current = this.head;
  while (a_current) {
    // if we have created a property name prev
    // at creation of node
    // we could have just initialized prev and
    // set next to null
    // creating a single Lnkd form doubly lnkd
    // but in this we haven't created prev
    // so we actually have to swap element
    let next_temp = a_current.next;
    a_current = 
  }
}
console.log(reverseSLnkdList(sLnkdList2));