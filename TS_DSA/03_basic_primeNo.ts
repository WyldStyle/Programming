function checkPrimeNo (a:number){
//console.log(a, a%2, a%3);
if(a < 1 || a % 2 == 0 || a % 3 ==0) return false;

let i = 6, sqrtNum= Math.floor(Math.sqrt( a));
    
for (; i<= sqrtNum; i=i+6){
    // console.log("num=",a,"i=",i,"sqrtNum=",sqrtNum, sqrtNum%(i-1), sqrtNum%(i+1));
    
    if (a % (i-1) == 0 || a % (i+1) == 0) return false;
    }
return true;
}

function checkPrimeNo1 (a:number){
if(a < 2 || a % 2 == 0 || a % 3 ==0 || a%5==0) return false;
let i = 6, sqrtNum= Math.floor(Math.sqrt( a));
for (; i<= sqrtNum; i=i+6){
    if (a % (i-1) == 0 || a % (i+1) == 0) return false; }
return true;
}
function main(a: number) {
console.log(checkPrimeNo(a));
}

main(1559)