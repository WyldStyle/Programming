
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

function checkPrimeNo(n:number){
if(n < 2 || n % 2 == 0 || n % 3 ==0) return false;
let i = 6, sqrtNum= Math.floor(Math.sqrt( n));
for (; i<= sqrtNum; i=i+6){
    if (n % (i-1) == 0 || n % (i+1) == 0) return false; }
return true;
}
function countPrimesUptoN (n:number){

}

function main (n:number){
console.log(countPrimesUptoN(n));
}
main(100);
