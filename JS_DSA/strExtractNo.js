// function strExtractNo(s) {
//   let arr = [];
//   outer: for (let i = 0; i < s.length; i++) {
//     if (switchNo(s.charAt(i))) {
//       let str = '';
//       for (let j = i; j < s.length; j++) {
//         // if (switchNo(s.charAt(j)) !== 1) {
//         //   arr.push(Number(s.slice(i, j)));
//         //   i = j;
//         //   break;
//         // }
//         // else if (j == (s.length - 1)) {
//         //   arr.push(Number(s.slice(i)))
//         //   break outer;
//         // }
//         if (switchNo(s.charAt(j))) {
//           str += s.charAt(j);
//         }
//         if (switchNo(s.charAt(j)) !== 1 || j == s.length - 1) {
//           arr.push(Number(str));
//           i = j;
//           break;
//         }
//       }
//     }
//   }
//   // return arr;
// }
// function switchNo(n) {
//   let x = 0;
//   switch (n) {
//     case '0':
//       x++;
//       break;
//     case '1':
//       x++;
//       break;
//     case '2':
//       x++;
//       break;
//     case '3':
//       x++;
//       break;
//     case '4':
//       x++;
//       break;
//     case '5':
//       x++;
//       break;
//     case '6':
//       x++;
//       break;
//     case '7':
//       x++;
//       break;
//     case '8':
//       x++;
//       break;
//     case '9':
//       x++;
//       break;
//   }
//   return x;
// }


// charCode [0 - 9] = [48 - 57]
// 

// only one Loop with Two Pointers:
function strExtractNo1(s) {
  let i = 0, j = 0, numArr = [], str = '';
  while (j < s.length) {
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
      str += s.charAt(j);
      j++;
      if (s.charCodeAt(j) < 48 || s.charCodeAt(j) > 57 || j == s.length) {
        numArr.push(Number(str));
        str = '';
        i = j + 1;
        j++;
      }
    }
    else {
      i++;
      j++;
    }
  }
  return numArr;
}
let s = 'hfh3345hdhs23hd4fhg24'
// console.log(s.length)
console.log(strExtractNo1(s))