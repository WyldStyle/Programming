/*Create a class named 'Shape' with a method to printShape 
"This is shape". Then create two other classes named 'Rectangle', 'Circle' 
inheriting the Shape class, both having a method to print 
"This is rectangle" and "This is circle" respectively. 
Create a child class 'Square' of 'rectangle' having a method to 
printSquare "Square is a rectangle". Now call the method of 'Shape' 
and 'Rectangle' class by the object of 'Square' class.*/

class Shape {
  constructor(shape = 'shape') {
    this._shape = shape;
  }

  printShape() {
    console.log(`This is ${this._shape}`);
  }
}

class Rectangle extends Shape {
  constructor(rectangle = 'rectangle') {
    super(rectangle);
    this._rectangle = rectangle ? rectangle : this._rectangle;
  }
  printRectangle() {
    super.printShape();
  }
}

class Circle extends Shape {
  constructor(circle = 'circle') {
    super(circle);
    this._circle = circle;
  }
}

class Square extends Rectangle {
  constructor(square = 'square') {
    super(square);
    this._square = square;
  }
  printSquare() {
    console.log('Square is a rectangle');
  }
}

const newSq = new Square('squarrrre');
newSq.printSquare();
newSq.printShape();
newSq.printRectangle();