function loop1 (n:number){ 

    for (let i = 0; i <= n ; i++){
        console.log("the no is ",i);
    }
}

function loopFirst20EvenNo(){
    for (let i = 0; i <= 40 ; i+=2){
        console.log("Even no is ",i);
    }
}

function sqPrint(n:number){
for(let i = 1; i*i <= n ;i++)
    console.log(i*i);
}

function main(n:number){
// loopFirst20EvenNo();
sqPrint(n)
}

main(49);