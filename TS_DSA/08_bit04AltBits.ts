function bitAltBits(num:number){
    console.log(num, "in here");
    
let strNum = (num).toString(2);
console.log(strNum);

if(strNum[0]== "0"){
for (let i =0; i < strNum.length;){
if(strNum[i] == "0" && (strNum[i+1] == "1"|| strNum[i+1] == undefined)) i = i+2;
else return false;
}
return true;
}
else{
    console.log('if here');
    
for (let i =0; i < strNum.length;){
// console.log(strNum[i], strNum[i+1], strNum[i+2], strNum[i+3]);
// console.log(strNum[0],strNum[1],strNum[2],strNum[3]);
if(strNum[i] == "1" && (strNum[i+1] == "0" || strNum[i+1] == undefined)) {i = i+2}

else return false;
}
return true;
}
}

function main(length:number,startingBit:string){
    // console.log(altNoGen(length,startingBit));
    console.log(bitAltBits(altNoGen(length,startingBit)));
    
    
    
}

// main(10);
// main(15);
main(17,"1");

function altNoGen(length:number, startingBit:string){
    let altBitNumStr = startingBit;
    for(let i = 0; i < length-1; i++ ){
        altBitNumStr += altBitNumStr[i] == "1" ? "0":"1";
    console.log(altBitNumStr);
    }
    
    return parseInt(altBitNumStr,2);
}