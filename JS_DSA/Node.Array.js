/* ARRAYS */
const arrayCar = ['lambo', " ferrari", " bugati", `Axcel`];
const array1 = [];
array1[0] = "Lambo";
array1[4] = "Date.now";
function arrFn1 () { return (2*3)}
array1[5] = arrFn1;
array1[6] = arrayCar;
console.log(array1);
array1.push('Adding an element - array1.push()');
console.log("array1[7] = "+array1[7]);
array1[array1.length] = "adding element using length prop = array1[array1.length]";
console.log(array1);

/* In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.*/
console.log('Array.isArray(array1) ='+Array.isArray(array1));// to differentiate bw array & object
console.log("array1 instanceof Array = "+ array1 instanceof Array);
//console.log("array1 instanceof Array = "+ array1 instanceof Array);


//Array Methods
let array2 = [0, 5, 8, 9, "55"];
console.log("\n array2.toString ="+array2.toString());
console.log("array2.join('&') ="+array2.join('&')); // using join you can specify the separator:

console.log("array2.pop() - pops last element ie returns last element = "+array2.pop());
console.log("array2.pop() - pops last element ie returns last element = "+array2.pop());
//The pop() method returns the value that was "popped out"
console.log("array2.push() - pushes element at the end n return new length = "+array2.push(99));
//The push() method returns the new array length:
console.log("new array2 = "+array2);
console.log("array2.shift() = shifts left n pops out 0th element = "+array2.shift());
console.log("array2.unshift() = adds/pushes element at beginning"+
" and shift rights n returns new length = "+array2.unshift());
console.log("new array2 = "+array2);
console.log("delete array2[1] = "+delete array2[1] + ' \n new array2 = '+array2);

console.log("arrayCar.concat(array2) = "+arrayCar.concat(array2))
console.log("arrayCar.concat(array2, array1) = "+arrayCar.concat(array2, array1));
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat(); console.log(myArr); 

const array3 = [ "a", "b",'c',`d`,"e",'f', `g`, 'h', `i`]; console.log("\n array 3 = "+array3);
console.log('array3.splice (2, 0, "pushNum3", "pushNum4" = '+array3.splice(2, 0, "pushNum3", "pushNum4")+ array3);
/* The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.*/
console.log('array3.splice (2, 2, "pushNum5", "pushNum6" = '
+array3.splice(2, 2, "pushNum5", "pushNum6")+" returns deleted item" + "\n new array3 =" +array3);
console.log("array3.splice(0,2) - removes two element = "+ array3.splice(0,2) +"\n new array3 = "+array3);
console.log("array3.splice(2,2) - removes two element = "+ array3.splice(2,2) +"\n new array3 = "+array3);

console.log("array3.slice(1) - returns sub array from 1 to last = "+array3.slice(1));
console.log("array3.slice(1,5) - returns sub array from 1 to 5 = "+array3.slice(1,5));

//Sort
// String Sort
console.log("string array3.sort() = "+array3.sort()); console.log("array3.reverse() = "+array3.reverse());

let array4 = ['5','20','10','15',45, 30, 25, 40, 35]; 
console.log("array4 sorting numbers and numString = "+array4);
console.log("array4.sort(function (a, b){return a-b}); = "+array4.sort(function (a, b){return a-b}));
array5 = ['this','is','how','to','sort','5','20','10','15',45, 30, 25, 40, 35];
console.log("array4.sort(function (a, b){return b-a}); = "+array4.sort(function (a, b){return b-a}));
console.log("Randomize an array4.sort(function (){return 0.6-Math.random()}) = "
+array4.sort(function (){return 0.6 - Math.random()}));
// won't work console.log((array5.sort).sort(function (a, b){return a-b}))

for( let pRandom = 1; pRandom<=5; pRandom++)
{
let kRandom1, array6 = [5, 2, 9, 7, 10, 35, 25];
for (let iRandom1 = array6.length -1; iRandom1 > 0; iRandom1--) 
  {
  let jRandom1 = Math.floor(Math.random() * (iRandom1+1));
  let kRandom1 = array6[iRandom1];
  array6[iRandom1] = array6[jRandom1];
  array6[jRandom1] = kRandom1;
  }
console.log("using Fisher Yates Shuffle to Randomize = "+ array6);
}
console.log("Math.max.apply(null, array4) = " +Math.max.apply(null, array4));
console.log("Math.min.apply(null, array4) = " +Math.min.apply(null, array4));

