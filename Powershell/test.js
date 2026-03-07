// function autoReload(){
//     if(localStorage.getItem("autoReload")=== "true"){
//         console.log(localStorage.getItem("autoReload"))
//         setTimeout(()=>{location.reload()},6000)
//     }
// }
//     autoReload()

//     window.onload = ()=>{
//         setInterval(()=>{location.reload()},6000)
//  

function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
} 
function main(x,y){
    console.log(add(x,y));
}
main(5,9);