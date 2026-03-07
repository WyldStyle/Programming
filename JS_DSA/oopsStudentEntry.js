// Psudeo Class
function Student(name = 'john', roll_no = 2)
{
  this.name = name;
  this.roll_no = roll_no;
}

// Class Based Syntax
class Student1 {
  constructor(n = 'john', r = 2) {
  
  this.name = n;
  this.roll_no=r;
  // this is to generically replace x.name, y.name, z.name
  }
}
var x = new Student("vaibhav", 101);
console.log(x.name)

var y = new Student("rahul", 102);
console.log(y.name)

var z = new Student();
console.log(z.name)


/* A class named 'Student' with String variable 'name' and integer variable 'roll_no' and Constructor is already created.

Create a method display to print the attributes name and roll_no.*/
class Student
{
  constructor(name="john",a=2)
  {
    this.name=name;
    this.roll_no=a;
  }
  //create the method display below
  display = function (){
      console.log(this.name);// just calling name won't work
      console.log(this.roll_no);// just calling a or this.a won't work
  }
}

var x=new Student("vaibhav",101);
var y=new Student("rahul",102);
var z=new Student();

x.display();
y.display();
z.display();
