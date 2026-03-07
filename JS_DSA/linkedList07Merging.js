class SingleNode {
  constructor(data, next) {
    this.data = data;
    this.next = next
  }
}

class SinglyLinkedList {
  head = null;
  tail = null;

  push(data) {
    const node = new SingleNode(data, null);
    if (this.head == null) {
      this.head = node;
      this.tail = node
    }
    else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  toArray() {
    let a = this.head, arr = [];
    while (a) {
      arr.push(a.data);
      a = a.next;
    }
    return arr;
  }
}

function mergingList(headA, headB) {
  let headS, headL, added = false;
  if (headA <= headB) [headS, headL] = [headA, headB];
  else[headS, headL] = [headB, headA];
  let lastNode = headS;

  while (headS || headL) {
    if (headS == null) {
      lastNode.next = headL;
      return Math.min(headA, headB);
    }
    else if (headL == null) {
      lastNode.next = headS; return Math.min(headA, headB);
    }
    else if (headS.data <= headL.data) {
      if (added) {
        lastNode.next = headS;
        added = !added;
      }
      lastNode = headS;
      headS = headS.next;
    }
    else if (headS.data > headL.data) {
      if (added) {
        headL = headL.next;
        lastNode = headL;
      }
      else {
        lastNode.next = headL;
        lastNode = headL;
        added = !added;
      }
      headL = headL.next;
    }
  }
}

function insert(a, b, lastNode) {
  a.next = b;
  a = temp;
  return b;
}
function main() {
  const sLnkdList = new SinglyLinkedList();
  const sLnkdList2 = new SinglyLinkedList();
  let arr1 = [1, 2, 4]
  for (let i = 0; i < arr1.length; i++) {
    sLnkdList.push(arr1[i]);
  }
  // let arr = [2,2,3,3,3,4,4,4,4,5,5,5,6]
  let arr = [1, 3, 4]
  for (let j = 0; j < arr.length; j++) {
    sLnkdList2.push(arr[j]);
  }
  console.log(sLnkdList.toArray());
  console.log(sLnkdList2.toArray());
  mergingList(sLnkdList.head, sLnkdList2.head, sLnkdList, sLnkdList2)
  console.log(sLnkdList.toArray());
}
main();
