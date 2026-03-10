// function setBitCount(n: number): number {
//     let count = 0;          
//     while (n > 0) {
//         count += n & 1;     
//         n >>= 1;            
//     }
//     return count;
// }

function bitSetBitCount (num:number){
let count = 0;
for(; num; count++){
    // console.log("num is = ",num, " == ", num.toString(2), "num - 1 is = ",num-1, " == ", (num-1).toString(2));
    num &= num -1;
}
return count;
}

function main(num:number){
    for(let i =0; i < num; i++){
    console.log("TotalSetBit = ",bitSetBitCount(i)    );
    }
}

main(20);