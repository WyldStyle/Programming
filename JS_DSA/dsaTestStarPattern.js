
function starPattern(){
let str1 = '', space = '', str2 = '';
  for (let i = 0; i <= 4; i++){
    str1 = '';
    for (let j = 0; j <= 4 -i; j++){
      str1 += "*";
    }
    space = '';
    for (let k = 0; k < 2*i; k++){
      space += ' ';
    }
    console.log(str1 + space + str1);
  }
}
starPattern();