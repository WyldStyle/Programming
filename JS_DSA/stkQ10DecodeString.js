let strArr = [
  'abc3[c]',
  'leetcode',
  "2[leetcode]",
  '1[c1[d]1[e]]',
  '3[ab1[cd]]',
  '3[ab2[cd]]ef',
  '11[cd3[ef]5[gh]ij]]kl',
  '3[ab11[cd3[ef]5[gh]ij]]kl',
  'xyz3[ab11[cd3[ef]5[gh]ij]]kl',
]
// leetCode 28ms
var decodeString = function(s) {
    let stack = []
    let currentNum = 0
    let currentStr = ""

    for(let char of s){
        if(char >= 0 && char <= 9){
            currentNum = currentNum * 10 + Number(char)
            // if num is like '15' WoW:
        }else if(char == '['){
            stack.push(currentStr)
            stack.push(currentNum)
            currentStr = ''
            currentNum = 0
        }else if(char == ']'){
            let num = stack.pop()
            let str = stack.pop()

            currentStr = str + currentStr.repeat(num)
        }else{
            currentStr += char 
        }
    }
    return currentStr
};
function main(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(decodeString(arr[i]));
  }
}
main(strArr)

// run this to see how above code works; 
let s1 = 'xyz3[ab1[cd3[ef]5[gh]ij]]kl'
// main(strArr)
console.log(decodedStr(s1));
function decodedStr(s) {
  let stack = [], currentNum = 0, currentStr = '';

  for (let char of s) {
    if (char >= 0 && char <= 9) {
      currentNum = currentNum * 10 + Number(char);
      console.log(`currentNum = ${currentNum}`);
    }
    else if (char === '[') {
      stack.push(currentStr);
      stack.push(currentNum);
      currentNum = 0;
      currentStr = '';
      console.log(`char is [, stack is ${stack}`);
    }
    else if(char === ']'){
      let num = stack.pop();
      let str = stack.pop();
      console.log(`char is ]---, stack is ${stack}`);
      currentStr = str + currentStr.repeat(num);
      console.log(`]--- ${currentStr}`);
    }
    else{
      currentStr += char;
      console.log(`else currentStr = ${currentStr}`);
    }
  }
  return currentStr
}
// class StacksNode {
//   constructor(data, prev, next) {
//     this.data = data;
//     this.prev = prev;
//     this.next = next;
//   }
// }

// class Stacks {
//   #head = null;
//   #tail = null;
//   #length = 0;
//   // check = null

//   appendLast_push(data) {
//     const newNodeLast =
//       new StacksNode(data, this.#tail, null);
//     if (!this.#length) {
//       this.#head = newNodeLast;
//       this.#tail = newNodeLast;
//     }
//     else {
//       this.#tail.next = newNodeLast;
//       this.#tail = newNodeLast;
//     }
//     this.#length++;
//   }

//   deleteTail_pop(data) {
//     if (!this.#length) { return null; }
//     const popppedEle = this.#tail.data;
//     if (this.#length == 1) {
//       this.#head = null;
//       this.#tail = null;
//     }
//     else {
//       this.#tail = this.#tail.prev;
//       this.#tail.next = null;
//     }
//     this.#length--;
//     return popppedEle;
//   }
//   isEmpty() { return this.#length == 0; }

//   peek() {
//     return this.#length == 0 ? null : this.#tail.data;
//     // if(!this.#length) return null;
//     // else return this.#tail.data; }
//   }

//   #toMap() {
//     let a = this.#head, i = 0;
//     const stackMap = new Map();
//     while (a) {
//       stackMap.set(i, a.data);
//       a = a.next;
//       i++;
//     }
//     return stackMap;
//   }

//   access(nthEle) {
//     return this.#toMap.get(nthEle);
//   }

//   search(findMe) {
//     return this.#toMap.has(findMe);
//   }

//   toMap() {
//     return this.#toMap();
//   }
// }

// let stack1 = new Stacks();
// function decodeStringMy(s) {
//   let decodedStr = '';
//   let outerStr = '', outerIni = '';
//   let i = s.length - 1;
//   let openB = false, closedB = false, noB = true;
//   for (let end = i; end >= 0; end--) {
//     if (s.charAt(end) != ']') outerStr = s.charAt(end) + outerStr;
//     else { noB = false; i = end; break; }
//   }
//   for(let ini = 0; ini <= i; ini++ ){
//     if((s.charCodeAt(ini) >= 48 && s.charCodeAt(ini) <= 57) || s.charAt(ini) == '[') break;
//     else outerIni += s.charAt(ini);
//   }
//   for (; i >= 0; i--) {
//     if (s.charAt(i) != '[') {
//       if (s.charAt(i) == ']') closedB = true;
//       stack1.appendLast_push(s.charAt(i));
//     }
//     else {
//       openB = true; 
//       let str = strInsideBrkt(stack1);
//       let [kval, newI] = getKvalue(s, i);
//       let kXstr = '';
//       if (!(openB && closedB)) str = str + decodedStr;
//       while (kval) {
//         kXstr += str;
//         kval--;
//       }
//       if (!(openB && closedB)) decodedStr = kXstr;
//       else decodedStr = kXstr + decodedStr;
//       while (stack1.peek() != ']' && stack1.peek() != null) {
//         decodedStr += stack1.deleteTail_pop();
//       }
//       i = newI;
//       openB = false; closedB = false;
//     }
//   }
//   if(!noB) return outerIni + decodedStr + outerStr;
//   else return outerIni;
// }

// function strInsideBrkt(stack1) {
//   let char = '';
//   while (stack1.peek() != ']') {
//     char += stack1.deleteTail_pop();
//   }
//   stack1.deleteTail_pop();
//   return char;
// }

// function getKvalue(s, i) {
//   let kval = '';
//   while (i >= 0) {
//     i--;
//     if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
//       kval = s.charAt(i) + kval;
//     }
//     else break;
//   }
//   return [Number(kval), i + 1];
// }

// let s = 'abc3[c]'
// let s = 'leetcode'



// function main(strArr) {
//   for (let i = 0; i < strArr.length; i++) {
//     if (i == 6) {
//       console.log(strArr[i]);
//       console.log(outerStr(strArr[i]));
//     }
//   }
// }
// // main(strArr);
// function outerStr(s) {
//   let outerStrStart = '', outerStrEnd = '';
//   for (let i = 0; i < s.length; i++) {
//     if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) break;
//     outerStrStart += s.charAt(i);
//   }
//   for (let i = s.length - 1; s.charAt(i) != ']'; i--) {
//     outerStrEnd = s.charAt(i) + outerStrEnd;
//   }
//   const [midStr, i] = decodeString(s);
//   return outerStrStart + midStr + outerStrEnd;
// }

// function decodeString(s, i = 0) {
//   let finalStr = '', nTimes = 1, strInsideBrkt = '';
//   for (; s.charAt(i) !== ']' && i < s.length; i++) {
//     if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
//       [nTimes, i] = multiplicant(s, i);
//     }
//     if (s.charAt(i) == '[') {
//       [strInsideBrkt, i] = multiplyInsideBrkt(s, i + 1);
//       i--;
//     }
//   }
//   while (nTimes) {
//     finalStr += strInsideBrkt;
//     nTimes--;
//   }
//   return [finalStr, i];
// }

// function multiplyInsideBrkt(s, i) {
//   let str = s.charAt(i++);
//   while (i < s.length && s.charAt(i) != ']') {
//     if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
//       let str1;
//       [str1, i] = decodeString(s, i);
//       str += str1;

//     }
//     else str += s.charAt(i);
//     i++;
//   }
//   return [str, i];
// }
// function multiplicant(s, i) {
//   let num = s.charAt(i); i++;
//   while (i < s.length && s.charAt(i) != '[') {
//     num += s.charAt(i);
//     i++;
//   }
//   return [parseInt(num), i];
// }