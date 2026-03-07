// Find remainder of x^y / p
function modExp (x:number,y:number,p :number){
if(p==1 || x == p || x % p == 0) return 0;
let mod = p-1, count = 0;
for(let i = x; mod > 1;  i*=x){
    // console.log("xlxoxo");
    mod = i % p;
    count++;
}
const remainingExp = y % count;
return x**remainingExp % p;
}

function main(x:number,y:number,p :number){
    console.log("xoxooxoxoxox");
//    console.log(modExp(x,y,p));
}
// console.time ('myTimeStart')
main(100,10,257);
// console.time ('myTimeEnd');


//Sammie Bae's function
// function modularExponentiation(base, exponent, modulus) {
//   if (modulus == 1) return 0;

//   var value = 1;

//   for (var i = 0; i < exponent; i++) {
//     value = (value * base) % modulus;
//   }
//   return value;
// }

// console.time ('myTimeStart')
// modularExponentiation(100,10,257);
// console.time ('myTimeEnd')