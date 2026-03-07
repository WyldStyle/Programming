class Database {
  token = '1bca23'
  // #token = '1323r2sdf'
  // if set to private we can't access it from outside
  constructor() {
  }
  saveData(data) {
    this.intiDBConnection()
    this.authorize()
    this.updateQuery();
  }
  intiDBConnection() { }
  authorize() { }
  updateQuery() { }
}

const db = new Database();
console.log(db);
db.token = 'superHero';
console.log(db);
// since we can change it's very very bad
db.saveData([1, 2, 3]);
db.authorize();
db.authorize = 'meow'
// db.authorize()
// we just messed up with things available not hidden
// as soon as we access authorize with db.authorize
// it'll create authorize in db property

//so we have to hide things so people don't mess with around
console.log(Object.getOwnPropertyNames(db));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(db)));



class DatabasePrivate {
  #token = '1323r2sdf'
  // if set to private we can't access it from outside
  constructor() {
    // constructor can't be private
  }
  saveData(data) {
    this.#token = '2983rh23r928'
    this.intiDBConnection()
    this.authorize()
    this.updateQuery();
  }
  #intiDBConnection() { }
  #authorize() { }
  #updateQuery() { }
  // private methods can only be accessed inside the class
  // we can't access them from subclass or superclass or outside
}

const db_private = new DatabasePrivate();
console.log(db_private);
console.log(Object.getOwnPropertyNames(db_private));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(db_private)));
// # private just means hiding something, 
// it really doesn't mean secure because the code's still there

class CustomDB extends DatabasePrivate {
  #token = 'jf;alsdkjf'
  saveData(data) { };
  // super.#intiDBConnection();
  // we can't access them from subclass or superclass or outside
}

// JavaScript isn't true Abstract lang....TypeScript is

// ----------------------S T A T I C--------------------
class Utils {
  static description = 'Awesome utilities!';
  description = 'Another description';
  static caps(str) {
    return str.toUpperCase();
  }
  lower(str) {
    return str.toLowerCase();
  }
}
console.log('\n', Utils.description);
console.log(Utils.caps);
console.log(Utils.lower);
console.log(Object.getOwnPropertyNames(Utils));
Utils.hello = 'hello Utils';
console.log(Object.getOwnPropertyNames(Utils));
// static methods and properties are on Utils and not on its prototype
// that's why its instance can't access it.

const utils = new Utils();
console.log(utils);
console.log(Object.getOwnPropertyNames(utils));
// since utils is an instance of Utils
// it'll have all non static n non private properties
// here utils only have description on utils...as description is a property
// method lower will be on Utils.prototype so utils can access it
// we don't see caps and static description
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(utils)));
Utils.prototype.camelCase = () => { };
// now camelCase will be available to utils
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(utils)));


// -----------------------Excercises---------------------
/*
    1. Create a class called "Printer" that has a constructor
    2.        that takes two parameters:
    3.        - brand (String)
    4.        - colours (Array of Strings)
    5.        *Don't set these to the "this" value yet
    2. Create a PRIVATE method called "setupPrinter" that takes
    3.        the same two parameters as the constructor (brand, colours)
    4.     
    5.     3. This method will assign the brand and colours to the "this"
    6.        Object inside the class (the instance of the class)
    4. Call the "setupPrinter" function from inside the constructor
    5. Create a new instance of Printer and see if the brand and
    6.        colours got set correctly
    Example:
           class Printer {...}
                  const printer = new Printer("HP", ["Red", "Green", "Blue"]);
                         console.log( printer.brand, printer.colours )
                                // HP ["Red", "Green", "Blue"]
                                */

class Printer {
  constructor(brand, colours) {
    this.#setupPrinter(brand, colours);
  }
  #setupPrinter(brand, colours) {
    this.brand = brand;
    this.colours = colours;
  }
}
const printerInstance = new Printer("HP", ["Red", "Green", "Blue"]);
// console.log((printerInstance.brand, printerInstance.colours));
// this will not print HP
console.log(printerInstance.brand, printerInstance.colours);
/*
    1. Create a class called "Utilties"
    2. Add a STATIC method to "Utilties" called
    3.        "camelCase" that has a single parameter:
    4.        - str (String)
    3. Add logic to "camelCase" that assumes that
    4.        "str" is a String and returns the camel-
    5.        cased version of the String. Eg:
    6.        "hello there" => "helloThere"
    7.        "Number Stock Items" => "numberStockItems"
    8.        * You can assume that the spaces are where
    9.          we move to the next upper-cased word
    4. Test this function on some Strings:
    5.        console.log(Utilities.camelCase("hello there"))
    6.        // helloThere
    7.        console.log(Utilities.camelCase("HELLO THERE"))
    8.        // helloThere
    9.        console.log(Utilities.camelCase("I love cookies"))
    10.        // iLoveCookies
    11.        console.log(Utilities.camelCase("Monkey Banana"))
    12.        // monkeyBanana
    13. */
class Utilities1 {
  static camelCase1(str) {
    let resStr = ''
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) == ' ') {
        resStr += str.charAt(i + 1).toUpperCase();
        i++;
        continue;
      }
      resStr += str.charAt(i);
    }
    return resStr;
  }
}
console.log(Utilities1.camelCase1('to lowecase n uppercase'));
console.log(Utilities1.camelCase1("hello there"))
// helloThere
console.log(Utilities1.camelCase1("HELLO THERE"))
// helloThere
console.log(Utilities1.camelCase1("I love cookies"))
// iLoveCookies
console.log(Utilities1.camelCase1("Monkey Banana"))
// monkeyBanana
/*
    1. Given the class definitions below, predict
    2.        what will be logged out with the code:
       class Animal {
               static knownMammals = [];
                       mammal = false;
                               eyes = 2;
        static isMammal() {}
                describe() {}
                       }
       class Monkey extends Animal {
               static knownMonkeys = [];
                       height;
                               weight;
        static isCute() {}
                eatBanana() {}
                       }
    2. What will this code print out:
    3.        const animal = new Animal();
    4.        console.log(Object.getOwnPropertyNames(animal))
    5.        console.log(Object.getOwnPropertyNames(animal.__proto__))
    6.        console.log(Object.getOwnPropertyNames(Animal))
    7.        console.log(Object.getOwnPropertyNames(Animal.__proto__))
       const monkey = new Monkey();
              console.log(Object.getOwnPropertyNames(monkey))
                     console.log(Object.getOwnPropertyNames(monkey.__proto__))
                            console.log(Object.getOwnPropertyNames(Monkey))
                                   console.log(Object.getOwnPropertyNames(Monkey.__proto__))
                                   */

class Animal {
  static knownMammals = [];
  mammal = false;
  eyes = 2;
  //since constructor is not defined here
  // JS will call native constructor 
  // n assuume all the property declared as 
  // instance property i.e. they don't belong to 
  // Class but the instance 
  // remember it like arguments passed to constructor & this
  static isMammal() { }
  describe() { }
}
class Monkey extends Animal {
  static knownMonkeys = [];
  // height;
  // weight;
  static tail = 'one';
  size = 'big';
  constructor(height, weight){
    super();
    this.weight = 5;
    this.height = 8;
  }
  // even if we do this constructor will take size as its input
  // to add something as only this class property
  // we have to add static like static tail;
  static isCute() { }
  eatBanana() { }
}
const animal = new Animal();
console.log(Object.getOwnPropertyNames(animal))
console.log(Object.getOwnPropertyNames(animal.__proto__))
console.log(Object.getOwnPropertyNames(Animal))
console.log(Object.getOwnPropertyNames(Animal.__proto__))
const monkey = new Monkey();
console.log(Object.getOwnPropertyNames(monkey))
console.log(Object.getOwnPropertyNames(monkey.__proto__))
console.log(Object.getOwnPropertyNames(Monkey))
console.log(Object.getOwnPropertyNames(Monkey.__proto__))



/*
    1. Go to the MDN javascript documentation online
    2.        and lookup "Array".
    2. What are all the STATIC properties and methods
    3.        on the Array Object?
    3. What are all the INSTANCE properties and methods
    4.        on Array instances?
    4. Explain why some of these are static and why some
    5.        are instance fields/properties/methods
    6. */

    console.log(Object.getOwnPropertyNames(Array));
    //it'll give all the static properties methods of Array

/*
    1. If you were to design your own class for your
    2.        project, what questions would you ask while 
    3.        deciding whether to make something a static or
    4.        instance field/method/property?
    2. How about private or public accessors for these
    3.        static or instance fields/methods/properties?
    4. */

