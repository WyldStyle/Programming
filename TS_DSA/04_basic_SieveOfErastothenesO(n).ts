
//Given an integer n, return the number of prime numbers that are strictly less than n.
// function countPrimes(n: number): number {
//     if (n <= 2) return 0;
//     const isPrime: boolean[] = new Array(n).fill(true);
//     isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers
//     for (let i = 2; i * i < n; i++) {
//         if (isPrime[i]) {
//             for (let j = i * i; j < n; j += i) {
//                 isPrime[j] = false; // Mark multiples of i as non-prime
//             }
//         }
//     }
//     let count = 0; 
//     for (let i = 2; i < n; i++) {
//         if (isPrime[i]) count++;
//     }
//     return count;
// }

// // Example usage:
// console.log(countPrimes(10)); // Output: 4 (2, 3, 5, 7 are prime numbers less than 10)

function checkPrimeNo1 (a:number){
if(a < 2 || a % 2 == 0 || a % 3 ==0 || a%5 == 0) return false;
let i = 6, sqrtNum= Math.floor(Math.sqrt( a));
for (; i<= sqrtNum; i=i+6){
    if (a % (i-1) == 0 || a % (i+1) == 0) return false; }
return true;
}
function countPrimesUptoN(n:number){
    let count = 0;
    if (n > 1 && n < 5){
        if(n > 2) {console.log(2,3); count += 2;}
        else {
console.log(2); count++;
        }
    }
    else{
        let primeArr = []; primeArr[0] = 2; primeArr[1] = 3;
        count +=2;
        for (let i = 5; count <= n; i+=6 ){
            if(checkPrimeNo1(i)) {primeArr[count] = i; count++}
            if(checkPrimeNo1(i+2)) {primeArr[count] = i+2; count++}
        }
        return primeArr;
    }
}

function sieveOfErasto(a:number){
    let primeArr: boolean[] = new Array (a).fill(true);
    for(let i = 2; i <=a; i++){
        if(primeArr[i]){
        console.log(i);
        for(let j = i+i; j<=a; j+=i){primeArr[j] = false};
        }
    }
}

function sieveOfErasto1(a:number){
    let primeArr: boolean[] = new Array (a).fill(true);
    if(a < 2) return [];
    else if (a < 3) return [2];
    else if(a < 5) return [2,3];
    else{
primeArr[4] = false; console.log(2,"\n",3);
    for(let i = 5; i <=a; i+=6){
        // console.log(i, i+2);
        // console.log(primeArr[i],primeArr[i+2]);
        if(primeArr[i]||primeArr[i+2]){
        if(primeArr[i]) console.log(i);
        if(primeArr[i+2]) console.log(i+2);
        for(let j = i+i; j<=a; j+=i){primeArr[j] = false};
        for(let j = i+2; j<=a; j+=i+2){primeArr[j] = false};
        }
    }
    }
}

function main (n:number){
// console.log(countPrimesUptoN(n));
// console.log(checkPrimeNo1(25));
// console.log(sieveOfErasto(n));
console.log(sieveOfErasto1(n));



}
main(100);