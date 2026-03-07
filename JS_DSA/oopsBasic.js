// OBJECTS are NOUNS i.e real world entity
// Their  properties are ADJECTIVES
// Their methods are VERB
// CLASSES - 
// Classes are a template for the object
// CLASSES are a group of OBJECTS with similar properties n methods
// Classes are Common n Collective Nouns
// these are all vague definitions
// Class is virtual identity in real world
// and in programming just another identity
// Objects and Classes are joined only by their common properties n methods
// The memory of Classes works differently in JAVA
// Classes - Java virtual Machine & Objects - heap memory 


// using OBJECT based approach---------------------------
const animal = {
  name: '',
  color: 'Brown',
  age: 0,
  eat: function (food) {
    console.log('Chow chow, ' + food + '!');
  },
  drink: function (drink) {
    console.log('Mmmmmmh, ' + drink + '!');
  }
}
const cat = Object.create(animal); // Objects inherit ...
cat.eat('cat food'); // ... methods ...
cat.drink('milk');
console.log(cat.color); // ... and properties from the prototype.
cat.meow = function () {      //..additional properties for cat only
  console.log('Meowwwww');
}
cat.meow();

console.log('\n')

const dog = Object.create(animal);
dog.eat('meat'); // Output: 'Chow, chow, meat!'
dog.drink('water'); // Output: 'Mmmmmmh, water!'
console.log(dog.color); // Output: 'Brown'
dog.bark = function () {
  console.log('Woof Woof');
}
dog.bark();

// dog.name('Doggy');
// console.log(dog.name) //won't work dog.name is not a function

const vegeterianDog = Object.create(dog);
vegeterianDog.eat = function (food) {
  // this eat function is not inherited from animals
  if (food.includes('meat')) {
    // throw new Error('I don’t eat meat!');
    console.log(`\n oh o..I don't eat meat`)
  }
  else {
    console.log('\n chow chow veggie', food, '!');

    this.__proto__.eat.call(this, food);// double _
    // Object.getPrototypeOf(this).eat.call(this.food); gives undefined
    Object.getPrototypeOf(this).eat.call(this, food);
    // see how these two call function access the parent animal
  }
}
vegeterianDog.eat('cheese meat');
vegeterianDog.eat('cheesyyyy')
vegeterianDog.bark();//present in dog
vegeterianDog.drink('water');//present in animal
vegeterianDog.toString();// present in Object object the
// mother of all object


// using PSEUDO CLASS based approach aka CONSTRUCTOR============================== 
// 
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};
//  either we can create person1 & person2 like assigning value every time
// or We can create a function to replace the repeating codes
function createPerson(name)
{
  const obj = {}; // we're creating a new obj
  // const obj = { name: name} won't work
  obj.name = name; //initialising it;
  obj.introduceSelf =  function (){
    console.log(`Hi I'm ${this.name}.`);
  }
  return obj; // and then returning it
}
const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."

// This works fine but is a bit long-winded: 
// we have to create an empty object, initialize it, and return it.
/* A better way is to use a constructor.
 -----********** A constructor is just a function called using the new keyword. ---------********8
When you call a constructor, it will:

    create a new object
    bind this to the new object, so you can refer to this in your constructor code
    run the code in the constructor
    return the new object.

// Constructors, by convention, start with a capital letter and are named for the type of object they create */
// now the upper ex can be done like this
function Person(name)
{
  this._name = name;
  this.introduceSelf = function(){
    console.log(`Hi! I'm ${this._name}.`);
  };
}

const salva1 = new Person("Salva Constuctor");
console.log(salva1._name);
salva1.introduceSelf();
// "Hi! I'm Salva."

const frankie1 = new Person("Frankie Constructor");
// frankie1._name;
frankie1.introduceSelf();
// "Hi! I'm Frankie."





function Animal(name1, colour1, age1) {
  // this is constructor function
  this.name = name1;
  this.colour = colour1;
  this.age = age1;
}
// Animal fn is converted into Animal prototype via Constructor
Animal.prototype.eat = function (food) {
  console.log('chow chow', food, '!');
}
Animal.prototype.drink = function (drink) {
  console.log('Mmmmmmh', drink, '!');
}
// the methods eat n drink are defined on this prototype

function Dog(name, colour, age, type) {
  Animal.call(this, name, colour, age);
  this.type = type;
};
// Dog fn is conv into Dog prototype via constructor
// but no link bw Animal n Dog exists yet

Dog.prototype = new Animal();
// ensures that Dog.prototype references a
// completely new object, which in turn references the
// Animal.prototype object as a prototype.

// After this the new Dog.protype refers to Animal.protype
// but the new Dog.prototype object has no
// constructor property compared to the "old" Dog.prototype object and
// thus there is no connection to the Dog object.

Dog.prototype.constructor = Dog;
// now Dog is a subclass

Dog.prototype.bark = function () {
  console.log('\n Woof Woof');
}
// finally you define methods in subclass
const bello = new Dog('Bello', 'White', '2', 'German Shephard');
bello.bark();

function VegeterianDog(name, colour, age, type) {
  Dog.call(this, name, colour, age)
  this.type = type;
}
VegeterianDog.prototype.eat = function (food) {
  if (food.includes('meat')) {
    console.log(`oh o I don't eat meat`);
  }
  else {
    // console.log('yummmmy', food); don't have to do this
    Dog.prototype.eat.call(this, food);
  }
}
// VegeterianDog('VeggieChamp','brown','3','desi'); won't work
const champ = new VegeterianDog('VeggieChamp', 'brown', '3', 'Desi');
champ.eat('bread');









// --------------with CLASS Syntax
// classes aren't hoisted like functions i.e.
// if you try to use class before it's declared it'll give an error

class Animal3 {
  // also const Animal3 = class Animal3 
  // Animal3 after class is optional in this method
  // this is class decleration
  // const AnimalClass = class Animal
  // this is class expression
  name = 'John Sample Fish';
  colour = 'Gold';
  age = '25';
  // default values;

  constructor(name, colour, age) {
    // since constructor is just a function which is called using new keyword
    // constructor here has same name as class name
    // that's why class name here is just called Syntactic Sugar
    // and name constructor is Syntactic Sugar for any function
    //  as any function can perform the required function
  
    // it implicitly returns a new object instance
    //  i.e we don't have to write Dog.name = 'Jacob'... every time
    // we create a new subclass
    // constructor(name = "Jacob", colour = 'Brown', age = '5')
    // will set values as default

    //     As with a constructor function outside of a class, to make the parameters available
    // as properties of the new object, you need to specifically assign them to properties
    // of the new object by using the this keyword

    this.name = name ? name : this.name;
    this.colour = colour ? colour : this.colour;
    this.age = age ? age : this.age;
    // The ternary operator ensures that the respective property is only
    // overwritten if the respective parameter also contains a value.
    // see as this.age = (age ? age : this.age) ie
    // if the new instance which is calling constructor function
    // is passing a value of age(i.e. you can also decide not to pass age)
    // then value of age is assigned to this.age otherwise it'll set 
    // this.age to default age;
  }

  eat(food) {
    console.log(`Chow Chow, ${food}`);
  }

  drink(drink) {
    console.log(`Mmmmmmmh, ${drink}`);
  }

  toString() {
    return `${this.name}, ${this.colour},
     ${this.age}`;
  }
}

// creating Object instances--
const defaultAnimal = new Animal3();
console.log(defaultAnimal.toString());

const fish = new Animal3('Fishy', 'Green', 2);
fish.eat('Algen');
console.log(fish.toString());

// ---------defining privated methods n properties
// use #
class Animal4 {
#name = 'John Sample Fish';
#color = 'Gold';
#age = '25';
constructor(name, color, age) {
this.#name = name ? name : this._name;
this.#color = color ? color : this._color;
this.#age = age ? age : this._age;
}
// Setter and getter methods as usual
#eat(food) {
console.log(`Chow chow, ${food}`);
}
#drink(drink) {
console.log(`Mmmmmmh, ${drink}`);
}
toString() {
return `${this.#name}, ${this.#color}, ${this.#age}`;
}
}

const snake = new Animal('Hissy', 'Green', 5);
snake.eat('mouse');
// snake.#eat('mouse'); gives error



// --------deriving/ INHERITING from Classes--------
//  use extends

class Dog4 extends Animal3 {
  // Animal4 doesn't produce dog4.eat()
  // as private methods aren't available to subclass
_type;
constructor(name, color, age, type) {
// When you invoke a derived class that has no constructor but uses the new keyword,
// JavaScript supplies the following default constructor:

// A constructor is a method (always named constructor()) in a class that runs
// whenever a class is invoked with new and creates an object instance. It’s fully possible,
// and quite common, to write classes without explicitly writing a constructor.
super(name, color, age);

// super (parent constructor) has to be called before 
// accessing this inside constructor n can't be omitted
// Calling super() is exactly the same as calling the constructor function of the
// parent class.
this._type = type ? type : this._type;
// while using getters n setters to avoid endless recursion
// prefix the property name with _(underscore) to differentiate
// between property name and get/ set function name;
// using _(undescore) is convention for private properties
// but before EMCA 2022, they aren't truely private
}
get type() {
return this._type;
}
set type(type) {
this._type = type;
}
bark() {
console.log('Woof woof');
}
}
const dog4 = new Dog4('Bello', 'White', 2, 'Maltese');
dog4.eat('cheese'); // "Chow chow, cheese"
dog4.bark(); // "Woof woof"
console.log(dog4.type); // "Maltese"

// --overwriting methods
class Food {
_description
constructor(description) {
this._description = description ? description : this._description;
}
get description() {
return this._description;
}
set description(description) {
this._description = description;
}
toString() {
return this.description;
}
}
class Meat extends Food {}
class Bread extends Food {}


// ---calling methods of Superclass
class VegetarianDog extends Dog4 {
eat(food) {
if (food instanceof Meat) {
// throw new Error(`I don’t eat meat!`);
console.log('I dont eat meat')
} else {
super.eat(food);
}
}
}
const dog5 = new VegetarianDog('Bello', 'White', 2, 'Maltese');
dog5.eat(new Bread('wheat bread')); // "Chow, Chow, wheat bread!"
dog5.eat(new Meat('steak')); // Error: "I don't eat meat!"


// -----------Defining Static Properties
class car {
  // car.company_name = 'Hyndai'; won't work
}
car.company_name = 'Hyundai';
// static methods are methods that are
// called directly on the class and not on an object instance.

const fortuner = new car();
fortuner.price = 5000000;
// console.log(fortuner.company_name()); will give error
// because fortuner object can't access static methods
console.log(fortuner.price);

class car1{
  // now if you define a static property
  static company_name = 'Maruti';
  print_details(){
    console.log(car1.company_name, this.price);
  }
}

const harrier = new car1();
harrier.price = 2400000;
harrier.print_details();

car1.company_name = 'Tata';
// overwrites the static method
harrier.print_details();



class Animal6 {
_name = 'John Sample Fish';
_color = 'Gold';
_age = '25';
static ANIMAL_COLORS = {
WHITE: 'White',
BLACK: 'Black',
BROWN: 'Brown',
GREEN: 'Green',
YELLOW: 'Yellow',
ORANGE: 'Orange'
}
constructor(name, color, age) {
this._name = name ? name : this._name;
this._color = color ? color : this._color;
this._age = age ? age : this._age;
}
}
console.log(Animal6.ANIMAL_COLORS);
// {
// WHITE: 'White',
// BLACK: 'Black',
// BROWN: 'Brown',
// GREEN: 'Green',
// YELLOW: 'Yellow',
// ORANGE: 'Orange'
// }
const bird = new Animal6('Birdie', Animal6.ANIMAL_COLORS.BLACK, 5);
console.log(bird.name); // will give undefinded
console.log(bird._name); // "Birdie"
console.log(bird._color); // "Black"
console.log(bird._age); // 5
// console.log(bird.ANIMAL_COLORS); // undefined



/*Create a class Employee Having 2 attributes (salary , working_hours).

It will contain the following methods :- 
1 - 'getInfo()' which takes the salary, number of hours of work per day of employee as parameter and initializes the attributes. (Note there is no constructor instead get_info method is used)
2 - 'AddSal()' which adds 10 to salary of the employee if it is less than 500. (note you don't have to print or return anything)
3 - 'AddWork()' which adds 5 to salary of employee if the working_hours is more than 6 hours. (note you don't have to print or return anything)*/
class Employee
{
    // constructor (salary, working_hours){
    //     this.salary = salary;
    //     this.working_hours = working_hours;
    // }
    
    getInfo(salary, working_hours){
        this.salary = salary;
        this.working_hours = working_hours;
    }
    
    AddSal(){
        if(this.salary < 500){
            this.salary += 10;
        }
    }
    
    AddWork(){
        if(this.working_hours > 6){
            this.salary += 5;
        }
    }
    
}
//Do Not change the Below  Code

var t=new Employee();
t.getInfo(400,7);
t.AddSal();
t.AddWork();
console.log(t.salary);
var x=new Employee();
x.getInfo(600,8);
x.AddSal();
x.AddWork();
console.log(x.salary);


