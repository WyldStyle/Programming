// function pascalTri(height) {
//   let arr = [];
//   if (height < 2) return '1';
//   arr[0] = 1;
//   console.log(spaceAdder(height, ' 1', 0));
//   for (let i = 0; i < height; i++) {
//     let nxt = '1', newArr = [];
//     newArr.push(1);
//     for (let j = 1; j < arr.length; j++) {
//       let sum = arr[j - 1] + arr[j];
//       nxt += ' ' + sum;
//       newArr.push(sum);
//     }
//     nxt = spaceAdder(height, nxt + ' ' + 1, i);
//     newArr.push(1);
//     arr = newArr;
//     console.log(nxt);
//   }
// }

// function spaceAdder(height, nxt, i) {
//   let noOfSpace = Math.floor((height - i-1))
//   let space = '';
//   while (noOfSpace) {
//     space += ' ';
//     noOfSpace--;
//   }
//   return space + nxt + space;
// }
// pascalTri(6)

function pascalNthEle(row, col){
  if(col == 0) return 1;
  else if(row == 0) return 0;
  else return pascalNthEle(row - 1, col) + pascalNthEle(row - 1, col - 1);
}
console.log(pascalNthEle(5,2));


