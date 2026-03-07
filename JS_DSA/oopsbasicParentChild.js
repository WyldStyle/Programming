class PARENT {
  constructor(n = 'parent') {
    this.name = n;
  }
  printP() {
    console.log(`this is a parent class`)
    // console.log(`this is a ${this.name} class`);
    // if you do this an object of CHILD class
    // calling printP of parent class 
    // will print child here
    // this is because we're not passing values
  }
}

class CHILD extends PARENT {
  constructor(n = 'child') {
    super(n);
    this.name = n;
  }
  print() {
    super.printP();
  }
}

var obj_parent = new PARENT();
obj_parent.printP();

var obj_child = new CHILD();
obj_child.print();
obj_child.printP()