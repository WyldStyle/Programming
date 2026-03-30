function bitAltBits(num:number){
    let count = 0;
    for (; num >0; num = num >> 1 ){
        if(num & 1) count++;
        console.log(num);
    }
    return count;
}

function main(num:number){
console.log(bitAltBits(num));
}

main(50);