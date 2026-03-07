/* this keyword
Objects Functions Scope Classes */

// use this with arrow fn only as a last resort

const thor = {
  name: 'Thor'
}
const jade = {
  name: "Jade"
}

const greet = (hero) => console.log(
  `${hero.name} says hello`
);

greet(thor);
greet(jade);

//another way of logging it out
const thor1 = {
  name: "Thor1",
  greet: () => console.log(`${thor1.name} says hello`)
}
thor1.greet();

const jade1 = {
  name: "Jade",
  greet: () => console.log(`${jade1.name} says hello`)
}
jade1.greet();
console.log('\n');
//so greet() is repeating twice
// we created a function but we can't do 
// thor1.greet(), or jade2.greet(), knowing
// that hero name already exist in that obj
// we have to pass the name to greet function
// by accessing it
// that where this keyword comes in
// we don't want to create hero variable n use greet(thor) Line13 - 18
// and we don't want to repeat greet inside every object line 23, 29

Object.prototype.greet = function () {
  console.log(this);
  console.log((`${this.name} says hello`));
  return this;
}
// all new objects inherits from Object 
// i.e thor & jade == Object.prototype
// if smthng(say greet()) is defined in Object.prototype
// n then if we tried to look for greet in thor & jade 
// it'll look in thor & jade and unable to find it there
// it'll look in Object.prototype
// n that's why we create a property greet in Object.prototype
//  REMEMBER REMEMBER ---> ARROW FN doesn't work here.

const thor2 = {
  name: 'Thor2'
}
console.log('\n 3 \n ', thor2.greet());// see how funny it is
// it'll first print the logs in prototype then 3 n then undefined
// as prototype.greet doesn't return anything
console.log('\n 3.1 \n ', thor2.greet());

thor2.greet();
console.log('\n 4.1 \n ');
thor.greet()
// n magically it is now even available to all the previously created Objects
// n that's why it's not recommended to alter properties on Predefined things like Objects, Arrays etc.
// make your own object and arrays and alter its properties.
console.log('\n 4.2 \n ');

const ironMan = {
  notName: 'IronMan'
}
ironMan.greet(); // will return undefined says hello because this.name = ironMan.name
// and ironMan doesn't have name property key so it returns undefined.


const alex = {
  name: "Alex",
  greet: function () {
    console.log(this, `scope is this function only n this = whatever written before .
    i.e alex n then it prints`,this,` object \n`);
    console.log(`${this.name} says hi!\n`);
    // dynamic because we don't know this is at this moment
    // it is decided at the time we call this greet fn.
  },
  greet1: {
    first:
      function () {
        // don't usen => function as arrow fn don't really bind, they use parent ie global scope
        console.log(this, `scope is this and not whole object, this = greet1`);
        console.log((`${this.name} says hi!\n`));
      },
    // 'greetINSIDEgreet': function(){} is wrong
    // can't assign a function to a string key
    greetINSIDEgreet: function () {
      console.log('\n ',this, 'inside greet');
      console.log(`\n ${this.name} says hi! says who's inside\n`);
    }
  },

  thisAlex: () => {
    console.log(this);
    console.log(`${this.name} says hi arrow`)
  },

  friend: {
    name: 'Priya',
    greetFriend: function(...args){
      console.log('\n this is args', args); console.log('this is this',this);
      console.log(alex.friend);
      console.log(`${this.name} says hi friend! \n`);
    }
  }


}
console.log('\n\n\n');
alex.greet();// this is bind to alex  //Alex says hi
alex.greet1.first(); //this is bind to greet1 
//undefined says hi because greet1 doesn't have name property
alex.greet1.greetINSIDEgreet();// undefined says hi
// alex.thisAlex() //an arrow fn
// will give undefined and error 

// ***so now we know that this binds only property just before . of function calling this

// n now manipulating what this refers to using call

console.log('\n 5 \n');
alex.friend.greetFriend();
// this is bind to friend
console.log('\n manipulating this \n');
alex.friend.greetFriend.call({name: 'Mia'});
//this is bind to Mia
console.log('\n ');
// call((1st arg refers to this), 2nd, 3rd , 4th, all other are just regular arguments)
alex.friend.greetFriend.call({name: 'Mia'}, 2,4,6);
alex.friend.greetFriend.call({name: 'IronMan', age: 40},{alias: 'Robert D. Jr.'});
console.log('\n');
alex.greet.call({name: "WonderWomen"});

alex.friend.greetFriend.apply({name: 'Mia Apply'});
alex.friend.greetFriend.apply({name: 'Mia apply'},[{age: 40},{alias: 'Wonder'}]);
//the only difference using apply is we can pass other parameters all grouped as 
// a single array, and so the elements of array are only passed as arguments to function

// bind permanently binds this to the argument passed
const boundGreet = alex.greet.bind({name: 'GlueMan'});
console.log(boundGreet);
boundGreet();
boundGreet('hello', 'there')
alex.friend.greetFriend = alex.friend.greetFriend.bind({name: 'GluMan2'})
alex.friend.greetFriend()

// ---------------------------EXERCISES---------------------------------------
/*/*
    1. Create the following Object and assign it to a variable
       named "pet":
       { name: "Nemo", type: "fish", age: 2 }
 
    2. Add a 'sayHello' function to the Object prototype. When
       called, it should log out the Object's name,
       type and age to match the following example:
       "Nemo is a fish and is 2 years old. Nemo says hi!"
 
       ^ This would be logged if we did pet.sayHello();
 
    3. Create another pet with different property values
       to make sure it works as well.
*/
const pet = 
       { name: "Nemo", type: "fish", age: 2 };
Object.prototype.sayHello = function(){
  console.log(this);
  console.log(`${this.name} is a ${this.type} and is ${this.age} years old. ${this.name} says hi!`);
}
pet.sayHello();

const pet2 = {name: 'Peeku', type: 'feline',age: 2};
pet2.sayHello();

// ---------------------------EXERCISE 1---------------------------------------
/*

    1. Create the following Object and assign it to a variable
       named "book":
       {
        name: "Harry Potter",
        author: "J.K. Rowling",
        characters: {
            mainChars: ["Harry", "Ron", "Hermione"],
            list: function() {
                for (const char of this.mainChars) {
                    console.log(char)
                }
            }
        }
       }
 
    2. Call the list function on the book and explain the behaviour
 
    3. How would you make the "list" method temporarily (for one
       function call) log out this array instead:
       ["Draco", "Severus", "Voldemort"] ?
 
    HINT* What methods can we use on Functions to manipulate "this"?
*/
const book =  
       {
        name: "Harry Potter",
        author: "J.K. Rowling",
        characters: {
            mainChars: ["Harry", "Ron", "Hermione"],
            list: function() {
              console.log(this.mainChars);
                for (const char of this.mainChars) {
                    console.log(char)
                }
            }
        }
       }
console.log('\n Ex1 \n');
book.characters.list();
console.log('\n Ex 1.1');
book.characters.list.call({mainChars: ["Draco", "Ron","Voldemort"]})
// book.characters.list.apply({mainChars: ["Draco", "Ron","Voldemort"]}) apply differs only in 2nd arg
// to print only Draco Ron Voldermart only you have to bind,

/* 
    2. Now Make it so if we do: book.characters.list()
       It will always use this Array of mainChars permanently:
       ["Draco", "Severus", "Voldemort"]
 
       ^ Do not modify "mainChars", you can only change "list"
         Also, you cannot modify the "list" function itself
 
    HINT* What methods can we use on Functions to manipulate "this"?
*/ 
const binding_mainChars = book.characters.list.bind({mainChars: ["Draco","Severus","Voldemort"]});
console.log('\n Ex1.2');
binding_mainChars();
// now whenever binding_mainChars is called it will always refer to this.
console.log('\n Ex1.3');
book.characters.list();
// but called again refers to the original mainChars defined within object;

// now to completely bypass original mainChars you can
// 1. delete mainChars in book - but that would later pose problem when you want to unbind
// 2. bind list to new mainChars ^_^;
console.log('\n Ex.1.4');
book.characters.list = book.characters.list.bind({mainChars: ["Draco","Severus","Voldemort"]});
book.characters.list();



// ---------------------------EXERCISE 3---------------------------------------
/*
    1. Create a function called "Person". It will have 3
       parameters: name, age, and favouriteFood. (function
       syntax, not arrow function!)
 
    2. Inside of Person, directly set these values:
       this.name = name;
       this.age = age;
       this.favouriteFood = favouriteFood
       (no return value is needed)
 
    3. Create a the following two variables:
       const avery = Person("Avery", 20, "Dark Chocolate");
       const jackie = new Person("Jackie", 35, "Sourdough Bread");
 
    4. Log out "avery" and "jackie" and explain what you see
 
    5. Log out the entire prototype chain of "jackie" (one by one)
 
    6. How would you explain what is happening when we use the
       "new" operator with a function in JS?
*/
function Person(name, age, favouriteFood){
       this.name = name;
       this.age = age;
       this.favouriteFood = favouriteFood
}
// const avery = Person("Avery",20,"Dark Choco");
const jackie = new Person("Jackie",35,"Sourdough Bread");
// console.log(avery); // will result undefined & error because Person isn't returning anything
console.log('\n Ex3',jackie);
console.log('\n Ex3.1',Object.getPrototypeOf(jackie));
console.log('\n Ex3.2',Object.getOwnPropertyNames(Object.getPrototypeOf(jackie)));
console.log('\n Ex3.3',Object.getPrototypeOf(Object.getPrototypeOf(jackie)));
console.log('\n Ex3.4',Object.getOwnPropertyNames(Object.getPrototypeOf(Object.getPrototypeOf(jackie))));
console.log('\n Ex3.5',Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(jackie))));//null
// console.log('\n Ex3.6',Object.getOwnPropertyNames(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(jackie)))));
// to get actual names we know that there is constructor property n constructor prop has name prop
console.log('\n Ex3.1.1',Object.getPrototypeOf(jackie).constructor.name);
console.log('\n Ex3.3.1',Object.getPrototypeOf(Object.getPrototypeOf(jackie.constructor.name)));
console.log('\n Ex3.5.1',Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(jackie.constructor.name))));//null
// jackie => Person => Object => null

console.log("\n Ex3.6",Object.getOwnPropertyNames(jackie))
console.log("\n Ex3.7",Object.getOwnPropertyNames(Person))

// ---------------------------EXERCISE bonus 1---------------------------------------
/*
    1. Create the following 2 functions:
 
    function ThisPerson(name, age, favouriteFood) {
        this.name = name;
        this.age = age;
        this.favouriteFood = favouriteFood;
    }
 
    function ProtoPerson(name, age, favouriteFood) {
        return { // short-hand property initialization:
            name,
            age,
            favouriteFood,
        };
    }
 
    2. What is the difference between the following 2 instances?:
       const thisPerson = new ThisPerson("This", 0, "cookies");
       const protoPerson = ProtoPerson("Proto", 1, "?")
 
    3. How would you modify the ProtoPerson function to have it
       return the same thing as the ThisPerson function, but
       WITHOUT us having to use the "new" keyword still?
 
    *HINT: Think of how you'd modify/setup the prototype chain
*/
    function ThisPerson(name, age, favouriteFood) {
        this.name = name;
        this.age = age;
        this.favouriteFood = favouriteFood;
    }
 
    function ProtoPerson(name, age, favouriteFood) {
        return { // short-hand property initialization:
          // name is mathching to name in arguments so it'll initialize name = name;
            name,
            age,
            favouriteFood,
        };
    }
const thisPerson = new ThisPerson('This',0, 'cookies')
const protoPerson = ProtoPerson('Proto',1,"?")

console.log('\n Ex bn1 \n',thisPerson);
console.log('\n Ex bn2 \n',protoPerson);
console.log('\n Ex bn1.1 \n ',Object.getPrototypeOf(thisPerson).constructor.name);
//prototype chain: thisPerson => ThisPerson => Object => null
console.log('\n Ex bn2.1 \n ',Object.getPrototypeOf(protoPerson).constructor.name);
//prototype chain: protoPerson => Object => null
function ProtoPerson1(name, age, favouriteFood){
  let obj = {
    name: name,
    age: age,
    favouriteFood: favouriteFood
  }
  // Object.setPrototypeOf(ThisPerson, Object.prototype)
  // Object.setPrototypeOf(ProtoPerson1, ThisPerson);
  // console.log(Object.getPrototypeOf(ProtoPerson1), 'whats the prototype here');
  // Object.setProtypeOf(obj,ProPerson1)
  // -_-_-_   all these won't work----------------------
  console.log('\n in ProtoPerson1\n',Object.getPrototypeOf(ProtoPerson1));
  Object.setPrototypeOf(obj, ProtoPerson1.prototype);
  return obj;
}
// Object.setPrototypeOf(ProtoPerson, ThisPerson);
const protoPerson1 = ProtoPerson1('Proto2',1, '?')
console.log('\n Ex bn2.2 \n ',Object.getPrototypeOf(protoPerson1).constructor.name);
console.log(protoPerson1);

// ---------------------------EXERCISE bonus 2---------------------------------------
/*
    1. Create the following function:
 
    function Person(name, age, favouriteFood) {
        this.name = name;
        this.age = age;
        this.favouriteFood = favouriteFood;
    }
 
    2. Add the following to the Person prototype:
        Person.prototype.greet = function() {
            console.log(`${this.name} says hello!`);
        }
 
    2. Create a function called "SuperHero" that
       has the same 3 parameters as Person, but
       adds a fourth one called: "overpowered"
 
    3. Inside the "SuperHero" function, set up all the
       properties on to the "this" Object just like in
       Person, with the addition of "overpowered".
 
    5. Set the Prototype of "SuperHero" to be "Person"
       (This can be done in 2 ways)
 
    6. Create an instance of Person and SuperHero:
       const anya = new Person("Anya", 40, "Sour Keys")
       const batman = new SuperHero("Bruce", 55, "Steak", false)
 
    7. Log out the prototype chains of each of these Objects
    8. Can you call "greet" on batman? Why?
    9. What properties are on each Object? Why?
 
    BONUS: Did we just create Object Oriented Programming?
*/
console.log('\n Ex4 ---------- \n');
    function Person1(name, age, favouriteFood) {
        this.name = name;
        this.age = age;
        this.favouriteFood = favouriteFood;
    }

        Person1.prototype.greet1 = function() {
            console.log(`${this.name} says hello!`);
        }
function SuperHero(name, age, favouriteFood, overpowered){
  this.name = name;
  this.age = age;
  this.favouriteFood = favouriteFood;
  this.overpowered = overpowered;
}

       const anya = new Person1("Anya", 40, "Sour Keys")
       const batman = new SuperHero("Bruce", 55, "Steak", false)

       console.log('\n Ex4.1 \n',anya);
       console.log('\n Ex4.2 \n',batman);
       console.log('\n Ex4.2.1 \n');
       console.log(Object.getPrototypeOf(Person1)); //{}
       console.log('\n ',Object.getPrototypeOf(SuperHero),'\n'); //{}
      //  batman.greet11(); won't run because greet isn't available to batman

// now if we set
console.log('\n4.3 \n');
// Object.setPrototypeOf(SuperHero, Person1)
//this does nothing //comment out and check because their prototype is same {}
// prototype chain for SuperHero is still SuperHero => Object => null //why????
// because they're both function and not object...function don't inherit...objects do!
Object.setPrototypeOf(SuperHero.prototype, Person1.prototype);
// however this sets prototype chain to SuperHero => Person1 => Object => null
// greet1 is defined in Person1's prototype so we have to set Superhero's prototype
// to Person1's prototype;
let _prototypeOf = Object.getPrototypeOf(anya);
while(_prototypeOf){
  console.log('\n',_prototypeOf,'==',_prototypeOf.constructor.name,'\n');
  _prototypeOf = Object.getPrototypeOf(_prototypeOf);
}

let _prototypeOf1 = Object.getPrototypeOf(batman);
while(_prototypeOf1){
  console.log('\n',_prototypeOf1,'==',_prototypeOf1.constructor.name,'\n');
  _prototypeOf1 = Object.getPrototypeOf(_prototypeOf1);
}
batman.greet1();