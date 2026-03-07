// function bitwiseAdd(a: number, b: number): number {
//     while (b !== 0) {
//         const carry = (a & b) << 1; // Calculate carry
//         a = a ^ b; // Sum without carry
//         b = carry; // Update b to carry for next iteration
//     }
//     return a;
// }

// function bitwiseSubtract(a: number, b: number): number {
//     while (b !== 0) {
//         const borrow = (~a & b) << 1; // Calculate borrow
//         a = a ^ b; // Subtract without borrow
//         b = borrow; // Update b to borrow for next iteration
//     }
//     return a;
// }

// function bitwiseMultiply(a: number, b: number): number {
//     let result = 0; 
//     while (b > 0) {
//         if (b & 1) { // If b is odd, add a to result
//             result = bitwiseAdd(result, a);
//         }                  
//         a <<= 1; // Double a
//         b >>= 1; // Halve b
//     }   
//     return result;
// }

// function bitwiseDivide(a: number, b: number): number {
//     if (b === 0) throw new Error("Division by zero");
//     let quotient = 0;
//     let remainder = a;
//     while (remainder >= b) {
//         remainder = bitwiseSubtract(remainder, b);
//         quotient = bitwiseAdd(quotient, 1);
//     }
//     return quotient;
// }

function bitwiseAdd(a:number, b:number){
    let carry = 0, sum = 0;
    while(b){
        sum = a ^b;
        carry = (a&b)<<1;
        b = carry;
        a = sum;
    }
return a;
}
function bitwiseSubtract(a:number, b:number){
    return bitwiseAdd(a,(bitwiseAdd(~b,1)))
}
function bitwiseMultiply(a:number, b:number){
if (b < 0){a = bitwiseAdd(~a,1), b = bitwiseAdd(~b,1);}
    let product = 0;
    while (b){
        if(b&1)product = bitwiseAdd(a,product);
        a = a<<1;
        b= b>>1;
    }
    return product;
}
function bitwiseDivide(a:number, b:number){
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // overflow case
    if (a === INT_MIN && b=== -1) {
        return INT_MAX;
    }
    let negative = (a ^ b) < 0, quotient = 0;
    a = Math.abs(a);
    b = Math.abs(b);
    for (let i = 31; i >=0; i--){
        if((a>>i)>=b){
            a = bitwiseSubtract(a, b<<i);
            quotient = bitwiseAdd(quotient, 1 << i)
        }
    }
    return negative ? bitwiseAdd(~quotient, 1): quotient;
}
function main(a:number, b: number){
console.log(bitwiseAdd(a,b));
console.log(bitwiseSubtract(a,b));
console.log(bitwiseMultiply(a,b));
console.log(bitwiseDivide(a,b));

}

// main(44,55);
// main(44,0)
// main(-44,1) this works for multiply
// main(-44,-1);
// main(44,-1) but these two doesn't
// so to overcome this we have to negate a & b;
// main(-44,-1);
// main(44,-1);
// main(4,3)
console.log(bitwiseDivide(-2147483648,-1))
// console.log(bitWiseNegate(-2147483647))
// console.log(bitWiseNegate(-2147483648))