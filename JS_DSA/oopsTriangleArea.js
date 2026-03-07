class Triangle {
  //Write the code here
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;

  }
  // calculate_perimeter = function() also works
  calculate_perimeter()
  // const or let calculate_perimeter = function() won't work
  // function calculate_perimeter() won't work
  {
    return this.side1 + this.side2 + this.side3;
  }
  calculate_area = function ()
  // function calculate_area() won't work
  {
    return this.side1 * this.side2 * this.side3;
  }

}
//Do Not change the Below  Code



var t = new Triangle(3, 4, 5);
console.log(t.calculate_area());
var per = t.calculate_perimeter();
console.log(per);
t = new Triangle(9, 10, 11);
console.log(t.calculate_area());
per = t.calculate_perimeter();
console.log(per);
