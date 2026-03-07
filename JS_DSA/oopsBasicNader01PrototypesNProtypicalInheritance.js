const animal = {
  type: 'animal',
  numLegs : 2
}
console.log(animal);
console.log(animal.numLegs);
console.log(animal.toString());

console.log(animal.hasOwnProperty('type'));
console.log(animal.hasOwnProperty('toString'));

console.log(animal.__proto__);// [Object: null prototype] {}
console.log(animal.__proto__.__proto__);// null
console.log(animal.prototype);//undefined at this point 
console.log('here01',Object.getPrototypeOf(animal));
console.log(Object.getOwnPropertyNames(animal));

console.log('\n',Object.getOwnPropertyNames(animal.__proto__));
// console.log(Object.getOwnPropertyNames('\n',animal.__proto__));

Object.prototype.speak = () => {
  console.log('hi, Im Speaking from basic Obj prototype')
}
const animal2 = {
  type : 'monkey',
  numLegs: 2
}
console.log('\n',Object.getOwnPropertyNames(animal2.__proto__));
console.log(Object.getOwnPropertyNames('\n',animal2.__proto__));
animal.speak();
animal2.speak()

// Object itself has lot of properties like keys, get, set, length...and prototype also
// Object.prototype has constructor, __defineGetter__, toString etc properties
// ().__proto_ will return of which higher entity, () this instance has been created
// ().prototype will return (if prototype property has been defined for ()this) properties definded
// under ()'s prototype.

Object.hello = () =>{ console.log(`\n hello onto Object's native properties n not Object.prototype`);}
Object.prototype.hello2 = () => console.log(`\n hello2, this is on prototype`);
// animal2.hello(); // won't work
Object.hello()

console.log(Object.getOwnPropertyNames(Object));
console.log(Object.getOwnPropertyNames(animal2));
console.log(Object.getOwnPropertyNames(animal2.__proto__));

// -------to change prototypes assigned: inside & outside methods
const animal3 = {
  type: 'bird',
  // __proto__: Array.prototype //inside obj //old method
}
//  or just write this outside the function whenever required outside obj
Object.setPrototypeOf(animal3, Array.prototype);


console.log('\n', animal3)
console.log(Object.getOwnPropertyNames(animal3));
console.log(Object.getOwnPropertyNames(animal3.__proto__));
console.log(animal3.length);
console.log(Object.getOwnPropertyNames(animal3.__proto__.__proto__));
// console.log(Object.getOwnPropertyNames(animal3.__proto__.__proto__.__proto__));
// will give error as trying to get property of null
console.log(animal3.__proto__.__proto__.__proto__);




// ------------------E X E R C I S E-------------------------/
/* Add a new function called 'boop' to the prototype of String.
This fn should simply log out the string'BOOP!' */


/* Create a new String with the value 'meow' and assign it to a variable called 'cat' */

/* Called the boop method on 'cat' to make sure it works correctly */

console.log(String.hasOwnProperty(String)); // returns false

String.prototype.boop = () => console.log('BOOP');

let cat1 = new String('meow1');
cat1.boop();
// console.log(cat.boop());

let cat2 = 'meow2';
cat2.boop();

console.log(Object.getOwnPropertyNames(cat1));
console.log(Object.getOwnPropertyNames(cat2.__proto__));


/* log out all the prop within the Object prototype. (Only its own prop)
Log out all the prop withing the Array prototype
log out all the prop within the Array prototype's prototype
*/
console.log('\n 25.9 \n ',__proto__);
console.log('\n 26 \n ',Object.getOwnPropertyNames(Object));
console.log(Object.getPrototypeOf(Object)); 
console.log('\n 26.1 \n ',Object.getOwnPropertyNames(Object.__proto__));
console.log('\n 26.2 \n ',Object.getOwnPropertyNames(Object.__proto__.__proto__));
// console.log('\n 26.2 \n ',Object.getOwnPropertyNames(Object.__proto__.__proto__.__proto__));//null
console.log('\n 26.3 \n ',Object.__proto__.__proto__.__proto__);
// console.log('\n 26.1 \n',Object.getOwnPropertyDescriptor(Object.prototype));// undefined
console.log('\n 27 \n ',Object.getOwnPropertyNames(Object.prototype));


console.log('\n 28 \n ',Object.getOwnPropertyNames(Array));
//Array doesn't have any __proto__ property
console.log('\n 29 \n ',Array.__proto__);
// so it returns null object
console.log('\n 30 \n ',Array.prototype);
// it has prototype property
console.log('\n 31 \n ',Object.getOwnPropertyNames(Array.__proto__));
// will return the __proto__ prop of Object
console.log('\n 32 \n ',Object.getOwnPropertyNames(Array.prototype));

console.log('\n 33 \n ',Array.prototype.prototype); //will return undefinded
console.log('\n 34 \n ',Array.prototype.__proto__);// will return prototype of obj
// Means array prototype doesn't have prototype property but since 
// Array is an instance of Object, Array.prototype has __proto__ property

// console.log(Object.getOwnPropertyNames(Array.prototype.prototype));// will give error
console.log('\n 35 \n ',Object.getOwnPropertyNames(Array.prototype.__proto__));
// console.log('\n 36 \n ',Object.getOwnPropertyNames(Array.prototype.__proto__.__proto__)); //error - rootObj
console.log('\n 36 \n ',Object.getOwnPropertyNames([].__proto__));
// [] is an instance of Array so [].__proto__ == Array.prototype
console.log('\n 37 \n ',Object.getOwnPropertyNames([].__proto__.__proto__));
// console.log('\n 38 \n ',Object.getOwnPropertyNames([].__proto__.__proto__.__proto__));// error - rootObj


console.log('\n --_-_-_-_-_-_-_-_-_-_stop using __proto___-_-_-_-_-_-_-_-_-_-_ \n');
//proto is same getPrototypeOf....getPrototype is better 

console.log('\n 38 \n ',Object);
console.log('\n 38.1 \n ',Object.getOwnPropertyNames(Object));
console.log('\n 38.2 \n ',Object.getPrototypeOf(Object));
// Object is a prototype of {} null prototype Main Object
console.log('\n 38.3 \n ',Object.getOwnPropertyNames(Object.getPrototypeOf(Object)));
console.log('\n 38.3.1 \n ',Object.getPrototypeOf(Object.getPrototypeOf(Object)));
// Expected = null: but beware {} as an i/p will point of Object.prototype
console.log('\n 38.3.2 \n ',Object.getOwnPropertyNames(Object.getPrototypeOf(Object.getPrototypeOf(Object))));
console.log('\n 38.4 \n ',Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object))));
// {} is a prototype of null
// console.log('\n 38.5 \n ',Object.getOwnPropertyNames(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object)))));
// null has no property names
console.log('\n 39 \n ',Object.prototype);
// console.log('\n 39.1 \n ',Object.prototype()); not a function but a property
console.log('\n 39.2 \n',Object.getOwnPropertyNames(Object.prototype));
console.log('\n 39.3 \n',Object.getPrototypeOf(Object.prototype));
// Object.prototype is a prototype of null because it has no prototype
// console.log('\n 39.4 \n',Object.getOwnPropertyNames(Object.getPrototypeOf(Object.prototype)))
// and null does not have any property but null prototype (having constructor n all) does.
console.log('\n 40 \n ',Array);
console.log('\n 40.1 \n ',Object.getOwnPropertyNames(Array));
console.log('\n 40.2 \n ',Object.getPrototypeOf(Array)); 
// == getPrototypeOf(Object) i.e. Array is a prototype of null prototype Object
console.log('\n 40.3 \n ',Object.getOwnPropertyNames(Object.getPrototypeOf(Array)));
// this confirms that
console.log('\n 40.4 \n ',Object.getPrototypeOf((Object.getPrototypeOf(Array))));
// Expected o/p is null : but this won't give null because
// the o/p is {} which as a i/p is not same as getPrototypeOf(Array) or getPrototypeOf(Object.prototype) 
// because {} as a i/p is a empty object which is a prototype of Object i.e. Object.prototype
console.log('\n 40.5 \n ',Object.getOwnPropertyNames(Object.getPrototypeOf((Object.getPrototypeOf(Array)))));
//this confirms that
console.log('\n 40.6 \n ',Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))));
// as expected this would be null
console.log('\n 41 \n ',Array.prototype);
console.log('\n 41.1 \n ',Object.getOwnPropertyNames(Array.prototype));
console.log(Array.prototype.prototype);// undefined as there is no prototype prop in prototype prop of Array
console.log('\n 41.2 \n ',Object.getPrototypeOf(Array.prototype));
console.log('\n 41.3 \n ',Object.getOwnPropertyNames(Object.getPrototypeOf(Array.prototype)));
console.log('\n 41.4 \n ',Object.getPrototypeOf((Object.getPrototypeOf(Array.prototype))));


console.log('\n Exercise 2 \n');
/* Create an new Object and assign it to a variable called "FakeArray". Give it the following value:
{"0": "Zero", "1": "One", "2": "Two", length: 3}

Set the prototype fo "FakeArray" to be Array.prototype
Use the map method on "FakeArray" to log out each item in the array.
*/

// const FakeArray = new Object(); don't have to use this
// FakeArray = {"0": "Zero", "1": "One", "2": "Two", length: 3,
// __proto__: Array.prototype
// }
// console.log(FakeArray.prototype);
// error can't redeclare to a const var
const fakeArray = {"0": "Zero", "1": "One", "2": "Two", length: 3};
Object.setPrototypeOf(fakeArray, Array);
console.log(Object.getPrototypeOf(fakeArray));
console.log(fakeArray.length);
console.log(fakeArray.prototype);
Object.setPrototypeOf(fakeArray, Array.prototype);
// fakeArray.map((i) => console.log(fakeArray[i]));
fakeArray.map((i) => console.log(i))

// Q: can we copy map from array and define it in the Object properties
// so that we can use map on Objects


console.log('\n Excercise 3 \n');
/* Create a new Objcect and assign it to a variavle called 'store'. Give it the following vALUE
{name: null,
stock: [
  {name: 'candy', quantity: 100},
  {name: 'fruit', quantity: 7},
  {name: 'toys', quantity: 23},
]}

Create another new Object called 'myStore' and assign it to an empty Object.
Then set it's name to: "My wonderful Store"
Set the prototype of 'myStore' to be 'store'

Create another new Object called 'yourstore' and assign it to an empty Object 
then set it's name to: "Not My Wonderful Store"
Set the prototype of 'yourStore' to be "store"

Modify the quantity of fruit in "myStore", to be 300
Log out the name and stock from "myStore"
Log out the name and stock form "yourStore"

What is happening and WHY?
*/
const store = 
{name: null,
stock: [
  {name: 'candy', quantity: 100},
  {name: 'fruit', quantity: 7},
  {name: 'toys', quantity: 23},
]}

const myStore = {};
myStore.name = 'My Wonderful Store';
Object.setPrototypeOf(myStore, store);

const yourStore = {};
yourStore.name = 'Not my wonderful Store';
Object.setPrototypeOf(yourStore, store);

console.log('\n Ex3.1: ',store, myStore, yourStore, myStore.stock, myStore.name);
console.log('\n Ex3.2: ',Object.getOwnPropertyNames(store, myStore, yourStore));
// will log out property names only for store

console.log('\n Ex3.3 ',Object.getPrototypeOf(myStore)); // prototype of myStore is now store
console.log('\n Ex3.4 ',Object.getPrototypeOf(Object.getPrototypeOf(myStore)));
// prototype of store is object

myStore.stock[1].quantity = 300;
console.log('\n Ex3.5 \n ',myStore.stock);
console.log('\n Ex3.5.1 \n ',yourStore.stock);
console.log('\n Ex3.6 \n ',store);

(Object.getPrototypeOf(myStore)).stock[1].quantity = 500;
console.log('\n Ex3.7 \n ',store);
console.log('\n Ex3.8 \n ',myStore.stock);
console.log('\n Ex3.8.1 \n ',yourStore.stock);

// From above we can see that stock is a property of store and myStore n yourStore
// (after being their prototype set to store)
// now inherits all the properties of store
// but the property stock itself exists one time only
// it isn't copied into myStore or yourStore
// myStore.stock n yourStore.stock n store.stock all refers to the same prototype
// that's why changing one value of fruits reflects every instance of store
// this proves Prototypes are References.



// --------------------------------------------Exercise 4--------------------------------------------
/*Create the following function:
function Person(name){
  this.name = name;
}

Create an instance of person in 2 ways:
const cleo = Person("Cleo")
const taylor = new Person("Taylor")

Log out the own property names of each of these 
variables.
WHAT happened?

Log out taylor's own property names. Does this work ? Why?
Log out the prototype of cleo and taylor. 
What is happening?
What about just taylor?
*/
function Person(name =''){
  this.name = name;
}

// const cleo = Person('Cleo') // will give error
const taylor = new Person('Taylor');

// console.log('\n 4.1 \n ',Object.getPrototypeOf(cleo));
console.log('\n 4.1.2 \n ',Object.getPrototypeOf(taylor));
console.log(('\n 4.2 \n ',Object.getOwnPropertyNames(taylor)));
console.log('\n 4.2.1 \n ',Object.getOwnPropertyNames(Object.getPrototypeOf(taylor)));
console.log('\n 4.2.2 \n ',Object.getOwnPropertyNames(Object.getPrototypeOf
  (Object.getPrototypeOf(taylor))));
console.log('\n 4.3 \n ',Object.getOwnPropertyNames((Object.getPrototypeOf(taylor)).constructor));


// console.log('\n 4.3 \n ',cleo);
console.log('\n 4.3.1 \n ',taylor);
console.log('\n 4.3.2 \n ',Object.getPrototypeOf(taylor).constructor.name)
// console.log(taylor.__proto__.constructor.name);
// will give name of construtor function i.e. Person
console.log('\n 4.3.3 \n ',Object.getOwnPropertyNames(Object.getPrototypeOf(taylor).constructor.name));
console.log('\n 4.3.4 \n ',Object.getPrototypeOf(Object.getPrototypeOf(taylor).constructor.name));