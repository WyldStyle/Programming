class SingleNode{
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedList {
  #head = null;
  #tail = null;
  #length = 0;
  constructor(size = 15) {
    this.size = size;
  }

  isEmpty() { return this.#length == 0; }

  push(data) {
    if (this.#length == this.size) return;
    else {
      const node = new SingleNode(data);
      if (this.#length == 0) {
        this.#head = node;
        this.#tail = node;
      }
      else {
        this.#tail.next = node;
        this.#tail = node;
      }
    }
    this.#length++;
  }
  unshift(data){
    if(this.#length == this.size) return
    else{
      const node = new SingleNode(data, this.#head)
      if(this.#length == 0){
        this.#head = node;
        this.#tail = node;
      }
      else{
        this.#head = node;
      }
    }
    this.#length++;
  }
 
  toArray(){
    let a = this.#head, arr = [];
    while(a){
      arr.push(a.data);
      a = a.next;
    }
    return arr;
  }

  reverse(k, a = this.#head){
    let prev = null, next = null;
    while(k && a){
      next = a.next;
      // console.log(`prev ${prev}, a ${a.data}, a.next ${a.next.data},next ${next}`);
      a.next = prev;
      prev = a;
      a = next;
      console.log(this.toArray());
      k--;
    }
    // this.#head = prev;
    // let head2 = next;
    // return head2;
  }

  rotate(k, a = this.#head){
    k = k % this.#length;
    if(this.#length < 2 || k == 0) return this.#head;
    let kHead = a;
    while(this.#length - 1 - k){
      kHead = kHead.next;
      k++;
    }
    //0 1 2 3 4 5 6 7 8= req = 6 7 8 0 1 2 3 4 5
    let temp = kHead.next;
    kHead.next = null;
    kHead = temp;

    while(temp.next){
      temp = temp.next;
    }
    temp.next = this.#head;
    this.#head = kHead;
}
}
function main(){
  const sLnkdList = new SinglyLinkedList();
  for(let i = 0; i < 7; i++){
    sLnkdList.push(i)
  }
  sLnkdList.rotate(0)
  console.log(sLnkdList.toArray());
}
main();