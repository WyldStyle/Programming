class Stacks {
  constructor(array = []) {
    this.array = [];
    if (array) this.array = array;
  }
  getBufferSlice = function () {
    return this.array.slice();
  }

  isEmpty = function () {
    return this.array.length == 0;
    // == checks and returns true/ false
  }
  peekLast = function () {
    return this.array[this.array.length - 1];
  } // returns the last element without removing it
  push = function (newestValue) {
    // return this.array.push(value)
    // this.array.push(newestValue);
    this.array[this.array.length] = newestValue;
    return this.array.length;
  }
  pop = function () {
    // return this.array.pop();
    let lastEle = this.array[this.array.length - 1];
    this.array.length = this.array.length - 1;
    return lastEle;
  }
}

console.log(stackSort([3, 5, 2, 4, 5, 24, 5, 6, 232]));

function stackSort(array) {
  let unsortedStack = new Stacks(array);
  let sortedStack = new Stacks();
  while (!unsortedStack.isEmpty()) {
    let currentEle_unsortedStack = unsortedStack.pop();
    while (!sortedStack.isEmpty() && sortedStack.peekLast() > currentEle_unsortedStack) {
      unsortedStack.push(sortedStack.pop());
    }
    sortedStack.push(currentEle_unsortedStack);
  }
  return sortedStack;
}


// ------------------- Sammie Bae's ------

function sortableStack(stack) {
  this.unsortedStack = new Stacks(stack);
  this.sortedStack = new Stacks();
}
  sortableStack.prototype.sortingStackInDescending = function (){
  while (!this.unsortedStack.isEmpty()) {
    let temp = this.unsortedStack.pop();
    while (!this.sortedStack.isEmpty() && this.sortedStack.peekLast() < temp) {
      this.unsortedStack.push(this.sortedStack.pop);
    }
    this.sortedStack.push(temp);
  }
}

let ss = new sortableStack([5,23,5,2,6,9,0,90,29])
console.log(ss);
console.log(ss.sortingStackInDescending());