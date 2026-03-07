function checkArmStrongNo(a:number){
let sum = 0, temp = a, exp = Math.ceil(Math.log10(a));
// console.log("exp is",exp);

while(temp){
sum += Math.pow(temp%10,exp);
temp = Math.floor(temp/10);
// console.log(sum,temp);
}
return sum === a;
}

function armStrongNoGen(){
for(let i = 0; i < 1000; i++){
    if(checkArmStrongNo(i)) console.log(i);
}
return null;
}

function main(a:number){
// console.log(checkArmStrongNo(a));
console.log(armStrongNoGen());

}

// main(267);
// main(153);
main(2);