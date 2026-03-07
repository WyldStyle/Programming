/*
---------------- M A P P I N G --------------
for a function f(x)
DOMAIN = i/p = key = x = { }
RANGE = o/p = value = f(x) = { }
 
Trick : Keep (key + i/p) the Dog in wall(val = value) using Rope( Range , O/p)
A group of Domain & range points to a function f(x) if and only if 
there is one value for each key i.e one o/p for each i/p
*/

const ranking = new Map(
  // array of subarrays
  [
    ['Rookie', 1000],
    // ranking.set('Rookie', 1000);
    ['Veteran', 2000],
    //the method calls of set() can be chained, 
    //because the method returns the map as a return value
    // and you can call set() again directly.

    // .set('Veteran', 2000);
    ['Pro', 3000],
    ['Master', 4000],
    ['GrandMaster', 6000],
    ['Legendary', 8000]
  ]
)

console.log('ranking.size', ranking.size);
console.log(ranking.get('Rookie'));
console.log(ranking.has('Legendary'));
console.log('ranking.delete("Rookie")', ranking.delete('Rookie') +
  `\n ranking.clear() to clear all entries`);
console.log(ranking);

/* the constructor function of Map does not
necessarily expect an array, but an object that is iterable
an iterable object is one that defines its own iteration 
behavior so that it can
be used directly as input in a loop 
string , array, map & set are iterable object. */

// ----- Iterating--
for (let i = 0; i < ranking.size; i++)
{
  console.log(ranking.get(i));
}
for (let ranks of ranking.keys()) {
  console.log(`ranks are ${ranks}`);
}

for (let points of ranking.values()) {
  console.log(`points required for are ${points}`);
}

for (let ranksNpoints of ranking.entries()) {
  console.log(`The ranks are ${ranksNpoints[0]}, and points are ${ranksNpoints[1]}`)
}
console.log('\n')

for (let [ranks, points] of ranking.entries()) {
  console.log(`The Ranks are ${ranks}, and points are ${points}`)
}

console.log('\n');
let arr = [11,22,33,44,55,66,77,88];
basicMap1(arr);
function basicMap1(arr){
const basicMap1 = new Map();

  for(let i = 0; i < arr.length; i++)
  {
    basicMap1.set(i, arr[i]);
  }
  console.log('basicMap1',basicMap1);
  console.log(basicMap1.get(5))

  // basicMap1.set(2) = basicMap1.get(2) + 3; won't work
  basicMap1.set(2, basicMap1.get(2) + 1);
  console.log((basicMap1.get(2)));
}


//  ---------------- S E T S --------------

//  Sets have no keys but they have all functions of Map
// when key is called it returns value
// when value is called it returns value again
console.log('\n');
const rankingSet = new Set(
  ['Rookie', 'Veteran', 'Pro', 'Master', "GrandMaster", 'Legendary']
  // rankigSet.add('Rookie')
  // .add('Veteran')
)
console.log(rankingSet.size);