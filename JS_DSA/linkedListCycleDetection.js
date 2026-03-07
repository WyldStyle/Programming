class SingleNode{
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
      console.log(arr);
      a = a.next;
    }
    return arr;
  }
}

function main(){
  const sLnkdList = new SinglyLinkedList();
  for(let i = 0; i < 10; i++){
    sLnkdList.push(i);
  }
  sLnkdList.tail.next = sLnkdList.head.next.next.next
  // console.log(sLnkdList.toArray());
  console.log(cycleDetection(sLnkdList,sLnkdList.head));
}
main();

function cycleDetection(sLnkdList,head){
  let a = head, setNode = new Set(), pos = 0;
  while(a){
    if(setNode.has(a)) return a;
    setNode.add(a);
    pos++;
    a = a.next;
  } 
  return -1;
}

// LeetCode smthng called Floyd's Algo
var detectCycle = function(head) {
    let once = head; //Torotise
    let twice = head; //Rabbit
    while (twice && twice.next) {
        once = once.next; //Rabbit is ahead
        twice = twice.next.next;
        if (once === twice) {//Rabbit being faster catches tortoise in a loop
            let ptr = head;
            while (ptr !== once) {
                ptr = ptr.next;
                once = once.next;
            }
            return ptr;
        }
    }
    return null;
};

// apply Floyd's algo in finding nearest duplicates in an array
// [1,6,3,8,9,7,10, 14,15,4,5,3,2]