let count = 0;
function perm_w_rep_PasswordCracker(arr,permArr = [], end = arr.length - 1){
  if(permArr.length == arr.length){
    console.log(permArr);
    count++;
  }
  else{
    for(let i = 0; i <= end; i++){
      permArr.push(arr[i]);
      perm_w_rep_PasswordCracker(arr,permArr)
      permArr.pop();
    }
  }
}
let arr = [1,2,3,4]
perm_w_rep_PasswordCracker(arr);
console.log(count);