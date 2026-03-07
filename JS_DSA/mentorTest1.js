// function grade(score)
// {
//   // console.log(score)
//   if (score > 25 && score <= 30 )
//   {
//     console.log(`grade = `,`A`);
//   }
//   if(score > 20 && score <= 25)
//   {
//     console.log(`grade = `,`B`);
//   }
//   if(score > 15 && score >= 20)
//   {
//     console.log(`grade = `,`C`);
//   }
// }
// grade(20);

// // 
// function difference(n)
// {
//   let sum = 0, product = 1;
//   if (n == 0)
//   { return 0;}

//   while (n != 0)
//   {
//     sum += (n % 10);
//     product *= (n % 10);
//     n = Math.floor(n /10);
//   }
//   return product - sum;
// }
// // 
// function starPrint()
// {
//   let str = '', space = '';
//   for (let  i = 0; i < 5; i++)
//   {
//     str = ''; space = ''
//     for (let j = 0; j<=i; j++)
//     {
//       str += "*";
//     }

//     for (let k = 1; k < 5-i;k++){
//     space += ' ';}
//     console.log(str+space+str)
//   }
// }
// starPrint();
// // 
// function goodPair(arr)
// {
//   let c = 0;
//   for (let i = 0; i < arr.length -1; i++)
//   {
//     for (let j = i+1; j<arr.length; j++){
//       if( arr[i] == arr[j])
//       c++;
//     }
//   }
//   return c;
// }















// Date 25/06/2023 Mock Interview 1
function minJumps(hurdles) {
  let sum = 0, count = 1;
  if (hurdles[0] >= hurdles.length) {
    return 1;
  }
  for (let i = 0; i < hurdles.length - 2; i++) {
    if (hurdles[i] == 0) {
      return -1;
    }
    // sum += hurdles[i];
    count++;
    i = hurdles[i] - 1;
  }
  return count;
}