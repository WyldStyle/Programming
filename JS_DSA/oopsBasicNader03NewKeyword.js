function hero(name) {
  this.name = name,
    this.greet = function () {
      console.log('this = ',this);
      console.log(`${this.name} says awesome new \n`);
    }
      // return 'hi!'
}
// const stormRegular = hero('soRegular');
// won't work with this
// console.log(stormRegular);
const storm = new hero('Storm');
console.log(storm,'\n');

storm.greet();
storm.greet.apply({name: 'Cyborg'});

console.log(Object.getPrototypeOf(storm));
console.log();
console.log(Object.getPrototypeOf(Object.getPrototypeOf(storm)));