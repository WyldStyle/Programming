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

const addTwoNumbers = function(l1, l2,sLnkdList1){
  let a = l1;
  let carry = 0;
  while(l1){
    let sum = l1.data + l2.data + carry;
    let digit = sum % 10;
    carry = sum < 10 ? 0 : 1;
    l1.data = digit;
    if(carry || (l1.next == null && l2.next != null) || (l1.next != null && l2.next == null)){
      if(l1.next == null) l1.next = {data : 0, next : null};
      if(l2.next == null) l2.next = {data : 0, next : null}; 
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  return a;
}
  // leetCode : 
  // let newNode = new ListNode(0);
  //       let head = newNode;
  //       let carry = 0;
    
  //       while(l1 || l2) {
  //           let a = l1 && l1.val;
  //           let b = l2 && l2.val;
  //           let sum = a + b + carry;
        
  //           carry = Math.floor(sum/10);
  //           head.next = new ListNode(sum%10);
        
  //           if(l1) l1 = l1.next;
  //           if(l2) l2 = l2.next;
        
  //           head = head.next;
  //       }
  //       if(carry > 0) head.next = new ListNode(carry);
  //       return newNode.next;

  function deleteByIdx(a,idx) {
    let head = a, length = 0;
    while(a){
      length++;
      a = a.next;
    }
    if(length == idx) {a = a.next; return}
    a= head;
    idx = length -1 - idx;
    console.log(idx,length);
    while(idx){
      a = a.next;
      console.log(a.data);
      idx--;
    }
    a.next = a.next.next;
  }

function main(){
  const sLnkdList1 = new SinglyLinkedList();
  const sLnkdList2 = new SinglyLinkedList();
  // let arr1 = [1,8]
  // let arr1 = [1,2,3,4,5,6,7,8,9];
  let arr1 = [1]
  for(let i = 0; i < arr1.length; i++){
    sLnkdList1.push(arr1[i])
  }

  // let arr2 = [5,6,4];
  let arr2 = [0];
  for(let j = 0; j < arr2.length; j++){
    sLnkdList2.push(arr2[j]);
  }
    console.log(sLnkdList1.toArray());
    // console.log(sLnkdList2.toArray());
    // addTwoNumbers(sLnkdList1.head, sLnkdList2.head, sLnkdList1)
    deleteByIdx(sLnkdList1.head, 1)
    console.log(sLnkdList1.toArray());
}
main();