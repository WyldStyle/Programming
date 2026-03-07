class Player {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
    console.log('Class Player this, here this = class Player \n', this);
  }
  speak(phrase) {
    //this method will be with constructor on Player.prototype
    // so it will be automatically available to all the instances
    console.log(`\n ${this.name} says: ${phrase}`);
  }
}

class Warrior extends Player {
  // if we don't call constructor in subclass
  // we don't have to call super in subclass
  constructor(name, hp, mp, items, shield, phrase) {
    // this.shield = shield;
    // calling super in constructor of subClass is must
    //can't call this before super
    super(name, hp, mp, items)
    // Player.protype.constructor()
    // this is same as accessing constructor
    // super.constructor(name,hp,mp,items)
    // but this doesn't work as JS work with
    // super() format only.
    console.log(super.constructor);
    console.log(Object.getOwnPropertyNames(super.constructor));
    // we can also access other functions defined in super class this way

    // super(name,hp,mp,items)
    // super function calls the constructor of Player here
    // it replaces
    // this.name = name;
    // this.hp = hp;
    // this.mp = mp;
    // this.items = items;
    // so we dont have to write it again

    console.log('\n this before shield', this);
    this.shield = shield;
    this.phrase = phrase;
    console.log('\n this after shield, here this = class Warrior', this);
    super.speak(phrase);
  }


}
const warrior = new Warrior('Ashoka', '200', '100', 'Sword', 'Magic Shield', 'Lets conquer Kalinga')
console.log('\n 5.1', warrior); ''
warrior.speak(`Let's conquer Kalinga from outside`);
// instead of calling n writing code for every warrior every time
// we can pass phrase into Warrior constructor and call superClass function i.e super.speak(phrase)
console.log('\n', warrior instanceof Warrior);
console.log('\n', warrior instanceof Player);
console.log('\n', warrior instanceof Array);
console.log('\n', warrior instanceof Object);
console.log('\n', warrior instanceof Function);


// -----------------------------Excercises-------------------------------------
/*
    1. Create a class called Vehicle whose constructor
    2.        takes 2 parameters:
    3.        - name
    4.        - maxSpeed
    5.        Assign both of these to the instance of Vehicle
    2. Add a method on to the "Vehicle" class called
    3.        "getMaxSpeed" that returns the "maxSpeed"
    3. Create a "Spaceship" class that extends "Vehicle"
    4.        and has 3 parameters:
    5.        - name
    6.        - maxSpeed
    7.        - numRocketEngines
    8.        This will use super() to assign the name and maxSpeed
    9.        It will assign "numRocketEngines" directly to the
    10.        "Spaceship" instance
    4. Make sure these work (Assuming classes are defined):
    5.        const spaceship = new Spaceship("Enterprise", 1000, 2);
    6.        console.log( spaceship.getMaxSpeed() ); // 1000
    7.        console.log( spaceship.numRocketEngines ); // 2
    8. */

class Vehicle {
  constructor(name, maxSpeed) {
    // constructor is on Vehicle.prototype
    this.name = name;
    this.maxSpeed = maxSpeed;
  }
  getMaxSpeed() {
    return this.maxSpeed;
  }
}
class Spaceship extends Vehicle {
  constructor(name, maxSpeed, numRocketEngines) {
    super(name, maxSpeed);
    this.numRocketEngines = numRocketEngines;
    // super();
    // this.name = name;
    // this.maxSpeed = maxSpeed
    // this.numRocketEngines = numRocketEngines
    // this'll work but refrain from doing this
  }
}
const spaceship = new Spaceship("Enterprise", 1000, 2);
console.log('\n Ex w1 ', spaceship.getMaxSpeed());
console.log(spaceship.numRocketEngines);

/*
    1. Create a class called "Shape" whose constructor
    2.        takes one parameter:
    3.        - colour
    4.        Assign "colour" to the instance of Shape with a 
    5.        default value of "Transparent"
    6.        Add a "type" property to "this" with a default
    7.        value of "Shape"
    2. Add a method to "Shape" called "describe" that
    3.        will log out the following to the console:
    4.        "A ${this.colour} ${this.type}"
    3. Create a class called "Square" whose constructor
    4.        takes 2 parameters (Square has to extend Shape):
    5.        - colour
    6.        - sideLength
    7.        Call the super constructor with "colour"
    8.        Assign "sideLength" to the instance of "Square"
    9.        Assign "Square" to the "type" property
    4. Add an "area" method to "Square" that will calculate
    5.        and return the total area of the square.
    6.        (Area of a square is: sideLength * sideLength)
    7.     
    8.     5. Create a class called "Rectangle" whose constructor
    9.        takes 3 parameters (Rectangle has to extend Shape):
    10.        - colour
    11.        - width
    12.        - height
    13.        Call the super constructor with "colour"
    14.        Assign all of these to the instance of "Rectangle"
    15.        Assign "Rectangle" to the "type" property
    6. Add an "area" method to "Rectangle" that will calculate
    7.        and return the total area of the square.
    8.        (Area of a rectangle is: width * height)
    7. Run the following code and explain it in as much
    8.        technical detail as you can:
    9.        const square = new Square("blue", 5);
    10.        const rectangle = new Rectangle("red", 5, 6);
    11.        console.log( square.area() ); // 25
    12.        console.log( rectangle.area() ); // 30
    13.        for ( const shape of [square, rectangle] ) shape.describe();
    14.        // A blue square
    15.        // A red rectangle
    16. */
class Shape {
  type = 'Shape';
  // since it's value if default and 
  // if we aren't passing this value as arguments
  // we don't have to use this.
  //if you're not sure to do this
  // just go with this
  constructor(colour = 'transparent', //type = 'Shape'
  ) {
    this.colour = colour ? colour : this.colour;
    // this.type = type ? type : this.type;
  }
  describe() {
    console.log(`A ${this.colour} ${this.type}`);
  }
}
class Square extends Shape {
  constructor(colour, sideLength) {
    super(colour);
    this.type = "Square";
    this.sideLength = sideLength ? sideLength : this.sideLength;
  }
  area() {
    return this.sideLength * this.sideLength;
  }
}
class Rectangle extends Shape {
  constructor(colour, width, height) {
    super(colour);
    this.type = "Rectangle";
    this.width = width ? width : this.width;
    this.height = height ? height : this.width;
  }
  area() {
    return this.height * this.width;
  }
}
const square = new Square("blue", 5);
const rectangle = new Rectangle("red", 5, 6);
console.log('\n Ex 5.1 ', square.area());
console.log('\n ', rectangle.area());
for (const shape of [square, rectangle]) {
  shape.describe();
}

/*
    1. Copy your code over from your exercise-2 solution.
    2. Add another class called "Circle" that extends
    3.        the "Shape" class.
    4.     
    5.     3. The "Circle" constructor will have two parameters:
    6.        - colour
    7.        - radius
    8.        Call the super constructor with "colour"
    9.        Assign "radius" to the instance of "Circle"
    10.        Assign "Circle" to the "type" property
    4. Add an "area" method to "Circle" that will calculate
    5.        and return the total area of the circle.
    6.        (Area of a circle is: pi * radius * radius )
    7.        * Lookup how to get the value for "pi" on Google/MDN
    5. Add a method to "Circle" called "describe" that
    6.        will log out the following to the console:
    7.        "A round and awesome ${this.colour} ${this.type}"
    6. Run the following code and explain it in as much
    7.        technical detail as you can:
    8.        const square = new Square("blue", 5);
    9.        const rectangle = new Rectangle("red", 5, 6);
    10.        const circle = new Circle("green", 3);
    11.        console.log( square.area() ); // 25
    12.        console.log( rectangle.area() ); // 30
    13.        console.log( circle.area() ); // 28.27433
    14.        for ( const shape of [square, rectangle, circle] ) {
    15.         shape.describe();
    16.        }
    17.        // A blue square
    18.        // A red rectangle
    19.        // A round and awesome green circle
    20. */
class Circle extends Shape {
  constructor(colour, radius) {
    super(colour);
    this.radius = radius ? radius : this.radius;
    let type = "Circle";
    this.type = type;
    // or we can just set this.type = 'Circle';
    // if we don't do this it will
    // set default type i.e. Shape
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
  describe() {
    console.log(`A round and awesome ${this.colour} ${this.type}`);
  }
}
const circle = new Circle("greeen", 3);
console.log('\n', circle.area());
for (const shape of [square, rectangle, circle]) {
  shape.describe();
}
console.log('\n', square, '\n', rectangle, '\n', circle, '\n');
const squareDefault = new Square();
console.log('\n', squareDefault, '\n', squareDefault.describe());

/*
    1. Lookup the retro arcade game: Space Invaders
    2.        on Google for some pictures
    3.        Eg: https://en.wikipedia.org/wiki/Space_Invaders
    2. How would you build a class to model the Player
    3.        (Spaceship) and the Enemies (Flying Aliens)?
    4.        * There are multiple different Aliens
    3. Try to think of all the different fields and
    4.        methods each would have in a real game. What 
    5.        would you want to have in them?
    4. Write these out first on paper/text to 
    5.        brainstorm, then implement the classes in JS
    * This is purposefully open-ended to allow you
    *       the creative freedom to design these classes
    *       */

/*
    1. Create a class called "FancyArray" that extends
    2.        the built-in Array in Javascript
    2. Add a "mapWithLogging" method to "FancyArray"
    3.        that works just like the regular array map (with)
    4.        the same parameters, but also logs the following
    5.        each iteration of the map:
    6.        "Current: ____, After Callback: _____"
    3. The following code example should work and log out
    4.        correctly as well:
    5.        
    6.         class FancyArray extends Array {...}
        const arr = new FancyArray();
                console.log(arr);
                        arr.push(1);
                                arr.push(2);
                                        arr.push(3);
        const mapped = arr.mapWithLogging((item, i) => {
                  return item + i;
                          });
                                  console.log(mapped);
        // FancyArray(0) []
                // Current: 1, After Callback: 1
                        // Current: 2, After Callback: 3
                                // Current: 3, After Callback: 5
                                        // FancyArray(3) [ 1, 3, 5 ]
                                        */
class FancyArray extends Array {
  // constructor(array) {
  //   this.array = array;
  // }
  // mapWithLogging(callback) {
  //   let index = 0;
  //   // let resArr = [];
  //   let resArr = new FancyArray();
  //   for (const item of this) {
  //     const mappedItem = callback(item, index);
  //     resArr.push(mappedItem);
  //     console.log((`Current: ${item}, After Callback: ${mappedItem}`));
  //     index++;
  //   }
  //   return resArr;
  // }
  // MDN
  mapWithLogging(callback, thisArg = this) {
    // console.log(this); = array passed
    let index = 0;
    let resArr = new FancyArray();
    for (const item of thisArg) {
      const mappedItem = callback(item, index++, thisArg)
      resArr.push(mappedItem);
      console.log((`Current: ${item}, After Callback: ${mappedItem}`));
      // index++;
    }
    return resArr;
  }
}
  const arr = new FancyArray();
console.log(arr);
arr.push(1);
arr.push(2);
arr.push(3);
  const mapped = arr.mapWithLogging((item, i) => {
    return item + i;
  });
console.log(mapped);