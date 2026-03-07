/* OOP: one of several programming paradigms:
-Functional
-Logic
-Event - driven etc

- A way to manage think about state
- Models interactions within and between statees
- Based on the concept of Objects
-"Objects" have code and data associated to them

// Main Ideas:
// Inheritance, Abstraction, Encapsulation, Polymorphism
*/
const player = {
  name: "?",
  hp: 100,
  mp: 0,
  items: []
}

const hanSolo = player;
const darthVader = player;
console.log(hanSolo);
console.log(darthVader);

hanSolo.hp = 80;
console.log(hanSolo);
console.log(darthVader);
// the values of hanSolo n darthVader are same;
// Objects in JS are just references
// changing the hanSolo prop( hanSolo.hp = 80)
// is actually changing the boiler plate 'player'.

// to overcome this problem------
const createPlayer = (name, hp, mp, items) => {
  return {
    name, hp, mp, items
    // we can also do 
    // name = name
  }
}

const hanSolo1 = createPlayer('Han Solo', 100, 10, ['Blaster']);
console.log('\n ', hanSolo1);

const darthVader1 = createPlayer('Darth Vader', 200, 20, ['Saber']);
console.log('\n ', darthVader1);

// good but we can't play around with prototypes here
// without risk of messing up

//to overcome this-------
class Player {
}
const hanSolo2 = new Player();
console.log(hanSolo2);
console.log(Object.getOwnPropertyNames(hanSolo2));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(hanSolo2)));

function AnotherPlayer() {

}
const darthVader2 = new AnotherPlayer();
console.log(darthVader2);
console.log(Object.getOwnPropertyNames(darthVader2));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(darthVader2)));

// they're almost the same thing n all this because of 'new' keyword
//even though we haven't written any constructor in class Player 
// JS provides a default constructor

class Player1 {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }
}
const hanSolo3 = new Player1('Han Solo', 100, 20, ['Blaster1']);
console.log('\n ', hanSolo3);
console.log(Object.getOwnPropertyNames(hanSolo3));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(hanSolo3)));

function AnotherPlayer1(name, hp, mp, items) {
  this.name = name;// field_name(key): value
  this.hp = hp;
  this.mp = mp;
  this.items = items;
}
const darthVader3 = new AnotherPlayer1('Darht Vader', 200, 40, ['Saber']);
console.log('\n ', darthVader3);
console.log(Object.getOwnPropertyNames(darthVader3));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(darthVader3)));

const wyld = new Player1('Wyld', 100, 22, ['Heart of Steel n Gold']);
wyld.name = 'WyldStyle';
console.log('\n ', wyld);
console.log('\n ', hanSolo3);
// value of hanSolo3 is preserved even if we've made changes to wyld;
// we've achieved what we wanted!
class Player2 {
  // writing anything before is default for any new instance created
  // we can assign a value, set to private, static
  age = 20;
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }
  // const s = speak(){}
  // not allowed JS can't convert it into object
  // function n(params) {}
  speak(phrase) {
    console.log(`${this.name} says ${phrase}`);
  }
}
const hanSolo4 = new Player2('Han Solo', 100, 20, ['Blaster1']);
console.log('\n ', hanSolo4);
hanSolo4.speak('Never tell me the odds!');
console.log(Object.getOwnPropertyNames(hanSolo4));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(hanSolo4)));
// hanSolo have only name, hp, mp, items and not speak
// which makes sense
// because constructor, speak exists on getPrototype of hanSolo4 i.e Player2
// n name, hp, mp, items exists for each new object created;

function AnotherPlayer2(name, hp, mp, items) {
  this.name = name;
  this.hp = hp;
  this.mp = mp;
  this.items = items;
  // for functions it's goes Xerox;
  // this.speak = function (phrase){
  //   console.log(`${this.name} says ${phrase}`);
  // }
  // what this does is that it copies this function 
  // which is basically same for each new instance created using new

}
// to avoid duplication of code why not make it available to every instance 
// by defining it on the AnotherPlayer2's prototype
AnotherPlayer2.prototype.speakFnProto = function (phrase) {
  console.log(`${this.name} says ${phrase}`);
}
const darthVader4 = new AnotherPlayer2('Darth Vader', 200, 40, ['Saber']);
console.log('\n ', darthVader4);
darthVader4.speakFnProto('Darth never fades, Dark does');
console.log(Object.getOwnPropertyNames(darthVader4));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(darthVader4)));

const wyld2 = new Player2('Wyld', 100, 22, ['Heart of Steel n Gold']);
wyld2.name = 'WyldStyle';
console.log('\n ', wyld2);
wyld2.speak('focus on one thing')


// -----------------------Excercises-----------------------------------
/*
    1. Create a class called "Animal"
    2. Allow us to pass in 2 properties/fields to the
    3.        Animal constructor which get set to the instance:
    4.        - type (String)
    5.        - name (String)
    3. Create two instances of the Animal class of your
    4.        choice passing in different "type" and "name" for each
    4. Print out both animal instances
    5. Change the "name" of one of your animals and print it
    6.        out again.
    *HINT: "this" will refer to the instance inside the class
    **/
class Animal {
  constructor(name = '', type = '') {
    this.name = name ? name : this.name;
    this.type = type ? type : this.type;
  }
}
const monkey = new Animal('Monkey Dada', 'Ape');
console.log('\n ', monkey);
const cat = new Animal('Peeku', 'feline')
monkey.name = 'Monkey Dadi';
console.log(monkey);


/*
    1. Create a class called "Student"
    2. Allow us to pass in 3 properties/fields to the
    3.        Student constructor which get set to the instance:
    4.        - name (String)
    5.        - major (String)
    6.        - grades (Array of Numbers)
    3. Create a method on "Student" called "addGrade" that
    4.        has one paramater "grade". It will simply push the
    5.        "grade" given on to the "grades" Array.
    4. Create a method on "Student" called "gpa" that will
    5.        return the AVERAGE grade of the student's "grades"
    5. Create an instance of the Student class like so:
    6.        const eva = new Student("Eva", "Arts", [95, 75, 83])
    4. Print out the "eva" instance
    6. Use the "gpa" method on "eva" to print out their average
    7.        grade (Should be 84.33)
    8. */

class Student {
  constructor(name = 'Default', major = 'Default', grades = D) {
    this.name = name ? name : this.name;
    this.major = major ? major : this.major;
    this.grades = grades ? grades : this.grades
  }
  addGrade(grade) {
    this.grades.push(grade);
  }

  gpa() {
    let Avg = 0;
    for (let grade of this.grades) {
      Avg += grade;
    }
    return (Avg / this.grades.length);
  }
}
const ava = new Student('Eva', "Arts", [95, 75, 83]);
console.log(ava.gpa());
ava.addGrade(97);
console.log(ava.gpa());





/*
    1. Create a class called "Bookstore"
    2. The "Bookstore" constructor has a single parameter
    3.        called "books" which is an Array of Book Objects.
    4.        Assign the argument passed in to the instance within
    5.        the constructor.
    3. Create a "listBooks" method on the "Bookstore" class
    4.        that will loop through and print out all the Books
    5.        in the Store (assume they have a name and author)
    6.        so you can format each like this:
    7.        `${book.name} by ${book.author}`
    3. Create another class called "Book"
    4. The "Book" constructor has 2 parameters:
    5.        - name
    6.        - author
    7.        Assign these to the instance within the constructor
    5. Create 2 Books:
    6.        const nineteen84 = new Book("1984", "George Orwell")
    7.        const hp = new Book("Harry Potter", "J.K. Rowling")
    6. Create a Bookstore:
    7.        const bookstore = new Bookstore( [ nineteen84, hp ] )
    7. Call bookstore.listBooks() and make sure it works:
    8.        1984 by George Orwell
    9.        Harry Potter by J.K. Rowling
    10. */
class Bookstore {
  constructor(books) {
    this.books = books;
  }
  //book = {name: Harry Potter, author: J K Rowling}
  listbook(books) {
    for (let book of this.books) {
      console.log(`${book.name} by ${book.author}`);
    }
  }
}

class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }
}

const nineteen84 = new Book("1984", "George Orwell")
const hp = new Book("Harry Potter", "J.K. Rowling")
const bookstore = new Bookstore([nineteen84, hp]);
console.log('\n Ex3 Books');
bookstore.listbook();
/*
    1. Lookup the retro arcade game: Space Invaders
    2.        on Google for some pictures
    3.        Eg: https://en.wikipedia.org/wiki/Space_Invaders
    2. How would you build a class to model the Player
    3.        (Spaceship) and the Enemy (Flying Alien)?
    3. Try to think of all the different fields and
    4.        methods each would have in a real game. What 
    5.        would you want to have in them?
    4. Write these out first on paper/text to 
    5.        brainstorm, then implement the classes in JS
    * This is purposefully open-ended to allow you
    *       the creative freedom to design these classes
    *       */
class SpIn_Player {
  // initial field initialization
  lives = 3;
  shootingDelay = 2000; // ms
  ypos = 500;
  xpos = 5000;
  // inital position of Player;
  // constructor(name, hp, ){}
  shoot() {

  }
}
const spaceship = new SpIn_Player();
console.log('\n Ex bonus 4 Space Invaders\n ', spaceship);

class Enemy {
  hp = 1;
  shootingDelay = 9000; //ms
  constructor(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
  }
  shoot() {

  }
}
const alien1 = new Enemy();
console.log('\n Ex 4.1 \n ', alien1);

/*
    Let's see how a "Factory" class/function might work
    1. Create a class called "EnemyFactory"
    2. Make the following work to produce the output shown:
    const factory = new EnemyFactory();
        const flying = factory.generateFlyingEnemy("batman");
            flying.fly(); // batman can fly!
    const swimming = EnemyFactory.generateSwimmingEnemy("aquaman");
        swimming.swim(); // aquaman can swim!
    * What is the difference between these two? When might you
    *       even use this? Where are the property keys of each of these:
    *             - EnemyFactory
      - factory
      -       - factory.__proto__
      - flying.__proto__
      -       - swimming.__proto__
*/

// The idea of Factory classes function is to return classes
// we can do this with Object and function but here we're learning
// that it can be done with classes too.
// class EnemyFactory {
//   generateFlyingEnemy(name) {
//     class FLyingEnemy {
//       constructor(flyingEnemyname) {
//         this.name = flyingEnemyname;
//       }
//       fly() {
//         console.log(`\n ${this.name} can fly!`);
//       }
//     }
//     return new FLyingEnemy(name);
//   }
// }

// const factory = new EnemyFactory();
// const flying = factory.generateFlyingEnemy("batman");
// flying.fly(); // batman can fly!


// check out the nuance in returning the class
class EnemyFactory1 {
  generateFlyingEnemy(name) {
    return new (class FlyingEnemy {
      constructor(flyingEnemyname) {
        this.name = flyingEnemyname;
      }
      fly() {
        console.log(`\n ${this.name} can fly!`);
      }
    })(name);
    // return new FLyingEnemy(name);
  }
}

const factory1 = new EnemyFactory1();
const flying1 = factory1.generateFlyingEnemy("batman");
console.log('\n Ex 4.2');
flying1.fly(); // batman can fly!

// instead of defining within the block
// we can directly do it here
EnemyFactory1.generateSwimmingEnemy = function (superhero) {
  class SwimmingEnemy {
    superhero = superhero;

    swim() {
      console.log(`${this.superhero} can swim!`);
    }
  }
  return new SwimmingEnemy(superhero);
}
const swimming = EnemyFactory1.generateSwimmingEnemy("aquaman");
swimming.swim(); // aquaman can swim!

// console.log('\n 4.1',Function);
// console.log('\n 4.2',Object.getOwnPropertyNames(Function));
// console.log('\n 4.3',(Object.getPrototypeOf(Function)).constructor.name);
// console.log('\n 4.4',Object.getPrototypeOf(Function));
// console.log('\n 4.5',Object.getOwnPropertyNames(Object.getPrototypeOf(Function)));
// console.log('\n 4.6',Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Function))));

// console.log('\n 4.8',Object.getPrototypeOf(Function.prototype));
// console.log('\n 4.9',Object.getOwnPropertyNames(Function.prototype));
// console.log('\n 4.10',Function.prototype.constructor.name);
// console.log('\n 4.11',Object.getOwnPropertyNames(Function.prototype.constructor));

// console.log('\n 4.12',(Object.prototype.constructor.name));
// console.log('\n 4.13',Object.prototype.constructor.constructor);
// console.log('\n 4.14',Object.getOwnPropertyNames(Object.prototype.constructor.constructor));

// console.log('\n 4.15',Object.getOwnPropertyNames(Array.prototype.constructor.constructor));





// console.log('\n 4.16 \n',Object.getOwnPropertyNames(EnemyFactory1));
// console.log('\n 4.17 ',Object.getPrototypeOf(EnemyFactory1));
// console.log('\n 4.18 ',(Object.getPrototypeOf(EnemyFactory1)).constructor.name);
// console.log('\n 4.19 ',Object.getOwnPropertyNames(Object.getPrototypeOf(EnemyFactory1)));
// console.log('\n 4.20 ',EnemyFactory1.prototype);
// console.log('\n 4.21 ',Object.getPrototypeOf(EnemyFactory1.prototype));
// console.log('\n 4.22 ',Object.getOwnPropertyNames(EnemyFactory1.prototype));
// console.log('\n 4.23 ',EnemyFactory1.prototype.constructor.name);
// console.log('\n 4.24 ',Object.getOwnPropertyNames(EnemyFactory1.prototype.constructor));

console.log('\n 4.25 ',factory1);
console.log('\n 4.26 ',Object.getOwnPropertyNames(factory1));
console.log('\n 4.27 ',Object.getPrototypeOf(factory1));
console.log('\n 4.28 ',Object.getPrototypeOf(factory1));
console.log('\n 4.29 ',Object.getOwnPropertyNames(Object.getPrototypeOf(factory1)));
// console.log('\n 4.30 ',Object.getOwnPropertyNames(factory1.prototype)); //error as {}
console.log('\n 4.31 ',factory1.constructor);
// no such prop in factory1 hence will search in EnemyFactory1.prototype
// we haven't defined any property in factory1 so it is still an empty object
// const factest = new factory1;
// and we definitely can't create a new instance of it 
// until we define constructor function in it


console.log('\n 4.32 ',flying1);
console.log('\n 4.33',Object.getOwnPropertyNames(flying1));
console.log('\n 4.34',Object.getPrototypeOf(flying1));
console.log('\n 4.35',(Object.getPrototypeOf(flying1)).constructor.name);
console.log('\n 4.36',Object.getOwnPropertyNames(Object.getPrototypeOf(flying1)));
// FlyingEnemy can't be accessed this way
// console.log('\n 4.37',FlyingEnemy);
// FlyingEnemy can't be displayed because it doesn't exist until called by flying1;
// console.log('\n 4.40',Object.getPrototyoeOf(FlyingEnemy));
// console.log(FlyingEnemy.fly('batti'));
// console.log('\n 4.40',);
// console.log('\n 4.40',);
// console.log('\n 4.40',);
// console.log('\n 4.40',);
// console.log('\n 4.40',);
// console.log('\n 4.40',);
// console.log('\n 4.40',);
// console.log('\n 4.40',);
// console.log('\n 4.40',);