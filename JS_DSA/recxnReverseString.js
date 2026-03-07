const reverseStr = (str, i = str.length - 1) => {
  if(i < 0) return null;
  // if (i == 0) return str.charAt(i); don't have to write this
  else {
    let revStr = str.charAt(i) + reverseStr(str, i - 1);
    return revStr;
  }
}

const reverseStr1 = (str, i = str.length - 1, revStr = '') => {
  if(i < 0) return revStr;
  // if (i == 0) return str.charAt(i); don't have to write this;
  else{
    return revStr += str.charAt(i) + reverseStr(str, i - 1, revStr)
    // revStr += revStr + str.charAt(i) + reverseStr1(str, i - 1, revStr)
    // also won't work because nothing is returned;
    // entering return is necessary because it doesn't it actually adds nothing
    // because nothing was returned in the first place.
  }
}
// so if you want to pass a varible as parameter, you don't have to declare it
// and if you don't want to, declare each time function is called
console.log(reverseStr('what is your name'));
console.log(reverseStr(''));
console.log(reverseStr1('checking if we can do like this'));
console.log(reverseStr1(''));