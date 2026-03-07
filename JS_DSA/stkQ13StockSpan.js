
class StacksNode {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class StockSpanner {
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
 
  next(data){
    this.appendLast_push(data);
    let t = this.#tail, count = 0;
    while(t){
      if(t.data <= data) count++;
      else break;
      t = t.prev;
    }
    return count;
  }
}

// leetcode 
var StockSpanner = function() {
    this.stack= [];
};
StockSpanner.prototype.next = function(price) {
    let[curPrice, curSpan]= [price, 1];
    while(this.stack.length && this.stack[this.stack.length-1].price <= curPrice)
    {
        prev= this.stack.pop();
        let [prevPrice, prevSpan] = [prev.price, prev.span];
        curSpan=curSpan+prevSpan;
    }
    this.stack.push({price: curPrice, span:curSpan});
    return curSpan;
};

const stockSpanner = new StockSpanner();
console.log(stockSpanner.next(100));
console.log(stockSpanner.next(80));
console.log(stockSpanner.next(60));
console.log(stockSpanner.next(70));
console.log(stockSpanner.next(60));
console.log(stockSpanner.next(75));
console.log(stockSpanner.next(80));
